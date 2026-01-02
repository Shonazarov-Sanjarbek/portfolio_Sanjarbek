import React, { useState } from "react";
import logo from "../../assets/San_Dev.png";
import { BsGithub, BsInstagram, BsTelegram } from "react-icons/bs";

function Header() {
  const [open, setOpen] = useState(false);

  const menuItems = [
    { id: "hero", label: "Hero" },
    { id: "projects", label: "Projects" },
    { id: "skills", label: "Skills" },
    { id: "contact", label: "Contact" },
  ];

  const handleScroll = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
      setOpen(false);
    }
  };

  return (
    <header className="header">
      <div className="container">
        <div className="header__inner">
          {/* LOGO */}
          <img src={logo} alt="logo" className="header__logo" />

          {/* MARKAZIY MENU */}
          <ul className="header__menu">
            {menuItems.map((item) => (
              <li
                key={item.id}
                onClick={() => handleScroll(item.id)}
                className="header__menu-item"
              >
                {item.label}
              </li>
            ))}
          </ul>

          {/* 🔥 O‘NG TOMON: ICON + RAQAM */}
          <div className="header__contact">
            <div>
              {/* 🔢 RAQAM */}
              <a href="tel:+998970058747">+99897 005 87 47</a>
              {/* 🔗 ICONKALAR */}
              <div className="header__right-socials">
                <a
                  href="https://t.me/bek_8747_uzb"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="Telegram"
                >
                  <BsTelegram />
                </a>
                <a
                  href="https://instagram.com/sanjarbek_8747"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="Instagram"
                >
                  <BsInstagram />
                </a>
                <a
                  href="https://github.com/Shonazarov-Sanjarbek"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="GitHub"
                >
                  <BsGithub />
                </a>
              </div>
            </div>
          </div>

          {/* BURGER */}
          <button
            className="header__burger"
            onClick={() => setOpen(!open)}
            aria-label="Toggle menu"
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
      </div>

      {/* SIDEBAR O‘ZGARMADI */}
      <div className={`sidebar ${open ? "open" : ""}`}>
        <button className="sidebar__close" onClick={() => setOpen(false)}>
          &times;
        </button>
        <ul className="sidebar__menu">
          {menuItems.map((item) => (
            <li
              key={item.id}
              className="sidebar__item"
              onClick={() => handleScroll(item.id)}
            >
              {item.label}
            </li>
          ))}
        </ul>
      </div>

      {open && <div className="overlay" onClick={() => setOpen(false)} />}
    </header>
  );
}

export default Header;
