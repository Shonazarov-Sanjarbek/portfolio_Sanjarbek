export const sendTelegramMessage = async ({
  name,
  phone,
  telegram,
  message,
}) => {
  const BOT_TOKEN = import.meta.env.VITE_TELEGRAM_BOT_TOKEN;
  const CHAT_ID = import.meta.env.VITE_TELEGRAM_CHAT_ID;

  if (
    !name?.trim() ||
    !phone?.trim() ||
    !telegram?.trim() ||
    !message?.trim()
  ) {
    throw new Error("Barcha maydonlar to‘ldirilishi kerak!");
  }

  // Telefon: faqat raqam
  if (!/^[0-9]+$/.test(phone)) {
    throw new Error("Telefon raqam faqat raqamlardan iborat bo‘lishi kerak!");
  }

  // Telegram username
  if (!/^@[a-zA-Z0-9_]{3,32}$/.test(telegram)) {
    throw new Error(
      "Telegram username noto‘g‘ri! (@username ko‘rinishida bo‘lishi kerak)"
    );
  }

  const text = `📩 Yangi xabar:

👤 Ism: ${name}
📞 Telefon: ${phone}
✈️ Telegram: ${telegram}

💬 Xabar:
${message}`;

  const res = await fetch(
    `https://api.telegram.org/bot${BOT_TOKEN}/sendMessage`,
    {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ chat_id: CHAT_ID, text }),
    }
  );

  const data = await res.json();

  if (!data.ok) {
    throw new Error(data.description || "Telegramga yuborishda xato!");
  }

  return data; 
};
