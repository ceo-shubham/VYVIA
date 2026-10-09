// Cloudflare Worker entry point for `wrangler deploy` mode
export interface Env {
  ASSETS?: { fetch: (request: Request) => Promise<Response> };
  WAITLIST_KV?: any;
}

export default {
  async fetch(request: Request, env: Env): Promise<Response> {
    const url = new URL(request.url);

    // Handle CORS preflight
    if (request.method === 'OPTIONS') {
      return new Response(null, {
        status: 204,
        headers: {
          'Access-Control-Allow-Origin': '*',
          'Access-Control-Allow-Methods': 'GET, POST, OPTIONS',
          'Access-Control-Allow-Headers': 'Content-Type',
        },
      });
    }

    // API Route: /api/waitlist
    if (url.pathname === '/api/waitlist' && request.method === 'POST') {
      try {
        const data = (await request.json()) as any;
        const submissionId = 'VYV-' + Math.random().toString(36).substring(2, 9).toUpperCase();
        const record = {
          id: submissionId,
          fullName: data.fullName || 'Tester',
          email: data.email || '',
          flowProfile: data.flowProfile || 'medium',
          assignedSample:
            data.flowProfile === 'heavy'
              ? 'VYVIA Shield Max Sample Box'
              : data.flowProfile === 'light'
              ? 'VYVIA Feather Sample Box'
              : 'VYVIA Balance Sample Box',
          createdAt: new Date().toISOString(),
        };

        if (env.WAITLIST_KV && data.email) {
          await env.WAITLIST_KV.put(`waitlist:${data.email}`, JSON.stringify(record));
        }

        return new Response(
          JSON.stringify({
            success: true,
            message: 'Welcome to the VYVIA Founder Circle! Your spot and sample reservation are confirmed.',
            submissionId,
            record,
          }),
          {
            status: 200,
            headers: {
              'Content-Type': 'application/json',
              'Access-Control-Allow-Origin': '*',
            },
          }
        );
      } catch (err: any) {
        return new Response(
          JSON.stringify({ success: false, error: err?.message || 'Server error' }),
          {
            status: 500,
            headers: {
              'Content-Type': 'application/json',
              'Access-Control-Allow-Origin': '*',
            },
          }
        );
      }
    }

    // API Route: /api/contact
    if (url.pathname === '/api/contact' && request.method === 'POST') {
      return new Response(
        JSON.stringify({
          success: true,
          message: 'Your inquiry has been received by inventors Anshika & Shubham.',
        }),
        {
          status: 200,
          headers: {
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*',
          },
        }
      );
    }

    // Static Assets serving (SPA fallback for all client routes)
    if (env.ASSETS) {
      const response = await env.ASSETS.fetch(request);
      if (response.status === 404 && !url.pathname.startsWith('/api/')) {
        // SPA fallback to index.html
        return env.ASSETS.fetch(new Request(new URL('/', request.url), request));
      }
      return response;
    }

    return new Response('VYVIA Platform Live', { status: 200 });
  },
};
