export default function handler(request, response) {
  const url = process.env.SUPABASE_URL || process.env.NEXT_PUBLIC_SUPABASE_URL;
  const publishableKey = process.env.SUPABASE_PUBLISHABLE_KEY || process.env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY;

  if (!url || !publishableKey) {
    return response.status(503).json({ error: 'Supabase 환경변수가 연결되지 않았습니다.' });
  }

  response.setHeader('Cache-Control', 'no-store');
  return response.status(200).json({ url, publishableKey });
}
