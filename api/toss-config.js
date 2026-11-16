export default function handler(request, response) {
  const clientKey = process.env.TOSS_WIDGET_CLIENT_KEY;

  if (!clientKey) {
    return response.status(503).json({
      error: 'TOSS_WIDGET_CLIENT_KEY 환경변수가 연결되지 않았습니다.'
    });
  }

  response.setHeader('Cache-Control', 'no-store');
  return response.status(200).json({ clientKey });
}
