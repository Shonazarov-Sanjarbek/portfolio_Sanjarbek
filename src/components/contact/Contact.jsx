import React from "react";
import { FaTelegramPlane, FaInstagram, FaPhoneAlt } from "react-icons/fa";
import Button from "../button/Button"; // mavjud bo‘lsa

function Contact() {
  return (
    <div className="container">
      <section className="contact">
        {/* Left Side - Hero */}
        <div className="contact__left">
          <p className="contact__subtitle">
            Hello, I am <span className="highlight">Sanjarbek</span>, a web
            developer living in City.
          </p>
          <p className="contact__title">
            I help businesses and companies achieve their goals by designing
            user-centric digital products and interactive experiences. If you
            would like to contact me, you can click the button below.
          </p>
        </div>

        {/* Right Side - Contact Info */}
        <div className="contact__right contact__content">
          <h2 className="contact__heading">
            <span className="text-gradient">Contact Me</span>
            <span className="icon">🚀</span>
          </h2>
          <p className="contact__mini-sub">
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

            <a href="tel:+998970058747" className="contact__btn phone">
              <FaPhoneAlt className="contact__icon" />
              +998 97 005 87 47
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Contact;
