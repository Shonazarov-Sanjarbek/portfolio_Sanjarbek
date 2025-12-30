export default async function handler(req, res) {
  if (req.method !== 'POST') return res.status(405).json({ error: 'Method not allowed' });

  const { name, phone, telegram, message } = req.body || {};
  if (!name || !phone || !telegram || !message) {
    return res.status(400).json({ error: "Barcha maydonlar to'ldirilishi kerak" });
  }

  const botToken = process.env.TELEGRAM_BOT_TOKEN;
  const chatId = process.env.TELEGRAM_CHAT_ID;
  if (!botToken || !chatId) {
    return res.status(500).json({ error: 'Serverda Telegram sozlamalari yo‘q' });
  }

  const text = `📩 Yangi xabar:\n👤 Ism: ${name}\n📞 Telefon: ${phone}\n✈️ Telegram: ${telegram}\n\n💬 Xabar:\n${message}`;

  try {
    const telegramRes = await fetch(
      `https://api.telegram.org/bot${botToken}/sendMessage`,
      {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ chat_id: chatId, text }),
      }
    );

    const data = await telegramRes.json().catch(() => null);
    if (!telegramRes.ok) {
      return res.status(502).json({ error: data?.description || 'Telegramga yuborishda xato' });
    }

    return res.json({ success: true, data });
  } catch (err) {
    console.error('send-message error:', err);
    return res.status(500).json({ error: 'Server ichida xato yuz berdi' });
  }
}
