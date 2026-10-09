// Cloudflare Pages Function: /api/waitlist
// Runs on Cloudflare's global edge network (Free Plan compatible)

interface Env {
  // Optional Cloudflare KV or D1 bindings if the user connects them
  WAITLIST_KV?: KVNamespace;
  DB?: D1Database;
}

export const onRequestPost: PagesFunction<Env> = async (context) => {
  const headers = {
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Methods': 'POST, OPTIONS',
    'Access-Control-Allow-Headers': 'Content-Type',
  };

  try {
    const data = await context.request.json() as any;

    // Basic validation
    if (!data.email || !data.email.includes('@')) {
      return new Response(
        JSON.stringify({ success: false, error: 'Valid email address is required.' }),
        { status: 400, headers }
      );
    }

    if (!data.fullName || data.fullName.trim().length < 2) {
      return new Response(
        JSON.stringify({ success: false, error: 'Full name is required.' }),
        { status: 400, headers }
      );
    }

    const submissionId = 'VYV-' + Math.random().toString(36).substring(2, 9).toUpperCase();
    const timestamp = new Date().toISOString();

    const record = {
      id: submissionId,
      fullName: data.fullName.trim(),
      email: data.email.trim().toLowerCase(),
      flowProfile: data.flowProfile || 'medium',
      symptoms: data.symptoms || [],
      city: data.city || 'Not specified',
      isTester: Boolean(data.isTester),
      notes: data.notes || '',
      createdAt: timestamp,
      patentRef: 'Patent File By Anshika & Shubham',
      assignedSample: data.flowProfile === 'heavy' ? 'VYVIA Shield Max Sample' :
                      data.flowProfile === 'light' ? 'VYVIA Feather Sample' : 'VYVIA Balance Sample'
    };

    // Store in KV if user configured the binding
    if (context.env.WAITLIST_KV) {
      await context.env.WAITLIST_KV.put(`waitlist:${record.email}`, JSON.stringify(record));
    }

    return new Response(
      JSON.stringify({
        success: true,
        message: 'Welcome to the VYVIA Founder Circle! Your spot and sample reservation are confirmed.',
        submissionId,
        record,
      }),
      { status: 200, headers }
    );
  } catch (err: any) {
    return new Response(
      JSON.stringify({ success: false, error: 'Failed to process reservation: ' + (err?.message || 'Server error') }),
      { status: 500, headers }
    );
  }
};

export const onRequestOptions: PagesFunction = async () => {
  return new Response(null, {
    status: 204,
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'POST, OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type',
    },
  });
};
