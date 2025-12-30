import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import fetch from "node-fetch";

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

app.post("/api/send-message", async (req, res) => {
  const { name, phone, telegram, message } = req.body;

  console.log("/api/send-message kirish body:", req.body);

  if (!name || !phone || !telegram || !message) {
    return res.status(400).json({ error: "Barcha maydonlar to‘ldirilishi kerak!" });
  }

  const text = `📩 Yangi xabar:
👤 Ism: ${name}
📞 Telefon: ${phone}
✈️ Telegram: ${telegram}

💬 Xabar:
${message}`;

  try {
    const telegramRes = await fetch(
      `https://api.telegram.org/bot${process.env.TELEGRAM_BOT_TOKEN}/sendMessage`,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ chat_id: process.env.TELEGRAM_CHAT_ID, text }),
      }
    );

    console.log("Telegram API status:", telegramRes.status);

    let data;
    try {
      data = await telegramRes.json(); // Telegramdan JSON o‘qiladi
    } catch {
      return res.status(500).json({ error: "Telegramdan noto‘g‘ri javob keldi" });
    }

    if (!data.ok) {
      return res.status(500).json({ error: data.description || "Telegramga yuborishda xato" });
    }

    // HAR DOIM JSON qaytariladi
    res.json({ success: true, data });

  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Serverda xato yuz berdi" });
  }
});

app.listen(3000, () => console.log("Server 3000 portda ishlamoqda"));
