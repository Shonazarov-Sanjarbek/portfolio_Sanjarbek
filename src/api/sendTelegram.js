// sendTelegram.js
export const sendTelegramMessage = async ({ name, phone, telegram, message }) => {
  const BOT_TOKEN = import.meta.env.VITE_TELEGRAM_BOT_TOKEN;
  const CHAT_ID = import.meta.env.VITE_TELEGRAM_CHAT_ID;

  if (!name || !phone || !telegram || !message) {
    throw new Error("Barcha maydonlar to‘ldirilishi kerak!");
  }

  const text = `Ism: ${name}\nTelefon: ${phone}\nTelegram: ${telegram}\nXabar: ${message}`;

  const res = await fetch(`https://api.telegram.org/bot${BOT_TOKEN}/sendMessage`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ chat_id: CHAT_ID, text }),
  });

  const data = await res.json();

  if (!data.ok) {
    throw new Error(data.description || "Xato yuz berdi!");
  }

  return data;
};
