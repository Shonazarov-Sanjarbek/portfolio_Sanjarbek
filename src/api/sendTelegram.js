export const sendTelegramMessage = async ({ name, phone, telegram, message }) => {
  // Agar foydalanuvchi @ yozmasa, avtomatik qo'shamiz
  const normalizedTelegram = telegram?.startsWith("@") ? telegram : `@${telegram}`;

  // Vite uchun baza URL: devda proxy ishlasa bo'sh, aks holda to'liq URL berishingiz mumkin
  const base = import.meta.env.VITE_API_BASE || "";

  const res = await fetch(`${base}/api/send-message`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ name, phone, telegram: normalizedTelegram, message }),
  });
  // Bir marta body o'qib, keyin JSON parse qilish (ikki marta o'qishni oldini oladi)
  const raw = await res.text();
  let data;
  try {
    data = raw ? JSON.parse(raw) : {};
  } catch (err) {
    // JSON parse bo'lmasa, raw matnni xato sifatida qaytaramiz
    throw new Error(`Serverdan noto‘g‘ri javob keldi (${res.status}): ${raw || err.message}`);
  }

  if (!res.ok) throw new Error(data.error || `Xatolik yuz berdi (${res.status})`);

  return data;
};
