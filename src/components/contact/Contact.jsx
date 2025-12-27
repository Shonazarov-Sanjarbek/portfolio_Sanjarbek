import React, { useState, useEffect } from "react";
import {
  FaTelegramPlane,
  FaInstagram,
  FaPhoneAlt,
  FaGlobe,
  FaYoutube,
  FaEnvelope,
} from "react-icons/fa";
import Button from "../button/Button";
import { sendTelegramMessage } from "../../api/sendTelegram";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    telegram: "",
    message: "",
  });

  const [isValid, setIsValid] = useState(false);
  const [loading, setLoading] = useState(false);

  // ====== FAQAT KERAKLI NAZORAT ======
  const handleChange = (e) => {
    const { name, value } = e.target;

    // Telefon: faqat raqam
    if (name === "phone" && !/^[0-9]*$/.test(value)) return;

    // Telegram: @ bilan boshlanishi, faqat harf/raqam/_
    if (name === "telegram" && !/^@?[a-zA-Z0-9_]*$/.test(value)) return;

    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  // ====== VALIDATION ======
  useEffect(() => {
    const { name, phone, telegram, message } = formData;

    const allFilled =
      name.trim() &&
      phone.trim() &&
      telegram.trim() &&
      message.trim();

    const phoneValid = /^[0-9]+$/.test(phone);
    const telegramValid = /^@[a-zA-Z0-9_]{3,32}$/.test(telegram);

    setIsValid(allFilled && phoneValid && telegramValid);
  }, [formData]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!isValid) return;

    setLoading(true);
    try {
      await sendTelegramMessage(formData);
      alert("✅ Xabar Telegram botga yuborildi!");
      setFormData({ name: "", phone: "", telegram: "", message: "" });
    } catch (err) {
      alert("❌ " + err.message);
    } finally {
      setLoading(false);
    }
  };

  const handleReset = () => {
    setFormData({ name: "", phone: "", telegram: "", message: "" });
  };

  return (
    <div id="contact" className="container">
      <div className="contact-grid">
        <div className="contact-left">
          <h2>Savol va takliflaringizni qoldiring.</h2>

          <form onSubmit={handleSubmit}>
            <input
              type="text"
              name="name"
              placeholder="Ismingiz"
              value={formData.name}
              onChange={handleChange}
            />

            <input
              type="text"
              name="phone"
              placeholder="Telefon raqam"
              value={formData.phone}
              onChange={handleChange}
            />

            <input
              type="text"
              name="telegram"
              placeholder="Telegram username (@username)"
              value={formData.telegram}
              onChange={handleChange}
            />

            <textarea
              name="message"
              rows="5"
              placeholder="Xabaringiz..."
              value={formData.message}
              onChange={handleChange}
            />

            <div className="btn-row">
              <Button
                type="submit"
                variant="primary"
                size="md"
                disabled={!isValid || loading}
                className={!isValid ? "disabled" : ""}
              >
                {loading ? "Yuborilmoqda..." : "Yuborish"}
              </Button>

              <Button
                type="button"
                variant="primary"
                size="md"
                onClick={handleReset}
              >
                Tozalash
              </Button>
            </div>
          </form>
        </div>

        {/* O‘NG TOMON O‘ZGARMADI */}
        <div className="contact-right">
          <div className="info-card">
            <div className="info-head">
              <FaPhoneAlt className="info-icon" />
              <span>Telefon</span>
            </div>
            <a href="tel:+998970058747" className="info-value">
              +998 (97) 005-87-47
            </a>
          </div>

          <div className="info-card">
            <div className="info-head">
              <FaGlobe className="info-icon" />
              <span>Ijtimoiy tarmoqlar</span>
            </div>

            <div className="info-socials">
              <a
                href="https://t.me/bek_8747_uzb"
                target="_blank"
                className="s-icon"
              >
                <FaTelegramPlane />
              </a>
              <a
                href="https://instagram.com/sanjarbek_8747"
                target="_blank"
                className="s-icon"
              >
                <FaInstagram />
              </a>
              <a href="https://youtube.com" target="_blank" className="s-icon">
                <FaYoutube />
              </a>
            </div>
          </div>

          <div className="info-card">
            <div className="info-head">
              <FaEnvelope className="info-icon" />
              <span>Email</span>
            </div>
            <a
              href="mailto:shonazarovsanjarbek71@gmail.com"
              className="info-value"
            >
              shonazarovsanjarbek71@gmail.com
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
