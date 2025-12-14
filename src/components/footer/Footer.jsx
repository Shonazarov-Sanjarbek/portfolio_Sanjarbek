import React from "react";
import { FaTelegramPlane, FaInstagram, FaGithub } from "react-icons/fa";

function Footer() {
  return (
    <footer className="footer">
      <div className="container footer__wrapper">

        {/* LEFT */}
        <div className="footer__left">
          <h2 className="footer__logo">San_Dev</h2>
          <p className="footer__desc">
            Frontend developer | Creative & Modern UI/UX.
          </p>
        </div>

        {/* RIGHT — ICONS */}
        <div className="footer__right">
          <a
            href="https://t.me/Bek_8747_uzb"
            target="_blank"
            rel="noopener"
            className="footer__social"
            aria-label="Telegram"
          >
            <FaTelegramPlane />
          </a>

          <a
            href="https://www.instagram.com/sanjarbek_8747/"
            target="_blank"
            rel="noopener"
            className="footer__social"
            aria-label="Instagram"
          >
            <FaInstagram />
          </a>

          <a
            href="https://github.com/Shonazarov-Sanjarbek"
            target="_blank"
            rel="noopener"
            className="footer__social"
            aria-label="Github"
          >
            <FaGithub />
          </a>
        </div>
      </div>

      <div className="footer__bottom">
        <p>© {new Date().getFullYear()} Sanjarbek — All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
