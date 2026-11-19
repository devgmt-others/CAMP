export default function handler(request, response) {
  const storeId = process.env.PORTONE_STORE_ID;
  const channelKey = process.env.PORTONE_CHANNEL_KEY;

  if (!storeId || !channelKey) {
    return response.status(503).json({
      error: 'PORTONE_STORE_ID 또는 PORTONE_CHANNEL_KEY 환경변수가 연결되지 않았습니다.'
    });
  }

  response.setHeader('Cache-Control', 'no-store');
  return response.status(200).json({ storeId, channelKey });
}
