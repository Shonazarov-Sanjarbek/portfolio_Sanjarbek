export const sendTelegramMessage = async ({ name, phone, telegram, message }) => {
  if (!name?.trim() || !phone?.trim() || !telegram?.trim() || !message?.trim()) {
    throw new Error("Barcha maydonlar to‘ldirilishi kerak!");
  }

  if (!/^[0-9]+$/.test(phone)) throw new Error("Telefon raqam faqat raqamlardan iborat bo‘lishi kerak!");
  if (!/^@[a-zA-Z0-9_]{3,32}$/.test(telegram)) throw new Error("Telegram username noto‘g‘ri! (@username ko‘rinishida bo‘lishi kerak)");

  const BOT_TOKEN = import.meta.env.VITE_TELEGRAM_BOT_TOKEN; // .env faylda bo‘lsin
  const CHAT_ID = import.meta.env.VITE_TELEGRAM_CHAT_ID;

  const text = `📩 Yangi xabar:
👤 ${name}
📞 ${phone}
✈️ ${telegram}

💬 ${message}`;

  try {
    const res = await fetch(`https://api.telegram.org/bot${BOT_TOKEN}/sendMessage`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ chat_id: CHAT_ID, text }),
    });

    if (!res.ok) {
      const data = await res.json().catch(() => null);
      throw new Error(data?.description || "Telegramga yuborilmadi");
    }

  } catch (err) {
    console.error(err);
    throw new Error("Telegramga yuborishda xato yuz berdi");
  }
};
