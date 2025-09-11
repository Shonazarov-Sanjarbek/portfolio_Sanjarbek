import React from "react";
import { FaTelegramPlane, FaInstagram, FaPhoneAlt } from "react-icons/fa";

function Contact() {
  return (
    <div className="container">
      <section className="contact">
        <div className="contact__content">
          <h2 className="contact__title">
            <span className="text-gradient">Contact Me</span>
            <span className="icon">🚀</span>
          </h2>
          <p className="contact__subtitle">
            Menga istalgan vaqtda bemalol yozishingiz mumkin 👇
          </p>

          <div className="contact__links">
            <a
              href="https://t.me/Bek_8747_uzb"
              target="_blank"
              rel="noopener noreferrer"
              className="contact__btn telegram"
            >
              <FaTelegramPlane className="contact__icon" />
              Telegram
            </a>

            <a
              href="https://www.instagram.com/sanjarbek_8747/"
              target="_blank"
              rel="noopener noreferrer"
              className="contact__btn instagram"
            >
              <FaInstagram className="contact__icon" />
              Instagram
            </a>

            <a
              href="tel:+998998747747"
              className="contact__btn phone"
            >
              <FaPhoneAlt className="contact__icon" />
              +998 99 874 77 47
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Contact;