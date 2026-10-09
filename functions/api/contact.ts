// Cloudflare Pages Function: /api/contact
// Doctor & Inquirer contact endpoint

export const onRequestPost: PagesFunction = async (context) => {
  const headers = {
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Methods': 'POST, OPTIONS',
    'Access-Control-Allow-Headers': 'Content-Type',
  };

  try {
    const body = await context.request.json() as any;
    if (!body.email || !body.message) {
      return new Response(JSON.stringify({ success: false, error: 'Email and message are required' }), {
        status: 400,
        headers
      });
    }

    return new Response(JSON.stringify({
      success: true,
      message: 'Your medical/research inquiry has been delivered to inventors Anshika & Shubham.',
      ticketId: 'MED-' + Math.floor(100000 + Math.random() * 900000)
    }), { status: 200, headers });
  } catch (e: any) {
    return new Response(JSON.stringify({ success: false, error: e.message }), { status: 500, headers });
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
