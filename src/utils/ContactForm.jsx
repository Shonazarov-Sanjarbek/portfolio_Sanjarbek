import { useState } from "react";
import { sendTelegramMessage } from "../utils/sendTelegramMessage";

export default function ContactForm() {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    telegram: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault(); // 🔴 juda muhim

    try {
      setLoading(true);

      await sendTelegramMessage(form);

      alert("Xabar yuborildi!");
      setForm({ name: "", phone: "", telegram: "", message: "" });
    } catch (err) {
      alert(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input name="name" placeholder="Ism" value={form.name} onChange={handleChange} />
      <input name="phone" placeholder="Telefon" value={form.phone} onChange={handleChange} />
      <input name="telegram" placeholder="@username" value={form.telegram} onChange={handleChange} />
      <textarea name="message" placeholder="Xabar" value={form.message} onChange={handleChange} />

      <button type="submit" disabled={loading}>
        {loading ? "Yuborilmoqda..." : "Yuborish"}
      </button>
    </form>
  );
}
