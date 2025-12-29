export const sendTelegramMessage = async ({ name, phone, telegram, message }) => {
  const BOT_TOKEN = import.meta.env.VITE_TELEGRAM_BOT_TOKEN;
  const CHAT_ID = import.meta.env.VITE_TELEGRAM_CHAT_ID;

  const text = `📩 Yangi xabar:
👤 ${name}
📞 ${phone}
✈️ ${telegram}

💬 ${message}`;

  const res = await fetch(
    `https://api.telegram.org/bot${BOT_TOKEN}/sendMessage`,
    {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ chat_id: CHAT_ID, text }),
    }
  );

  if (!res.ok) throw new Error("Telegramga yuborilmadi");
};
