export default async function handler(req, res) {
  // Faqat POST ruxsat
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  try {
    const { name, phone, telegram, message } = req.body;

    // 🔹 Tekshiruvlar (frontenddagiga mos)
    if (!name?.trim() || !phone?.trim() || !telegram?.trim() || !message?.trim()) {
      return res.status(400).json({
        error: "Barcha maydonlar to‘ldirilishi kerak!",
      });
    }

    if (!/^[0-9]+$/.test(phone)) {
      return res.status(400).json({
        error: "Telefon raqam faqat raqamlardan iborat bo‘lishi kerak!",
      });
    }

    if (!/^@[a-zA-Z0-9_]{3,32}$/.test(telegram)) {
      return res.status(400).json({
        error: "Telegram username noto‘g‘ri!",
      });
    }

    // 🔹 Telegram tokenlar (SERVERDAN)
    const BOT_TOKEN = process.env.TELEGRAM_BOT_TOKEN;
    const CHAT_ID = process.env.TELEGRAM_CHAT_ID;

    if (!BOT_TOKEN || !CHAT_ID) {
      return res.status(500).json({
        error: "Server sozlanmagan (ENV yo‘q)",
      });
    }

    // 🔹 Xabar matni
    const text = `📩 Yangi xabar:

👤 Ism: ${name}
📞 Telefon: ${phone}
✈️ Telegram: ${telegram}

💬 Xabar:
${message}`;

    // 🔹 Telegramga yuborish
    const tgRes = await fetch(
      `https://api.telegram.org/bot${BOT_TOKEN}/sendMessage`,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          chat_id: CHAT_ID,
          text,
        }),
      }
    );

    const data = await tgRes.json();

    if (!data.ok) {
      return res.status(500).json({
        error: data.description || "Telegramga yuborishda xato!",
      });
    }

    // 🔹 Hammasi OK
    return res.status(200).json({ success: true });
  } catch (err) {
    return res.status(500).json({
      error: "Server xatosi",
    });
  }
}
