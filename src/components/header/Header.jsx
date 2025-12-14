import React, { useState } from "react";
import logo from "../../assets/San_Dev.png";

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
          <img src={logo} alt="logo" className="header__logo" />

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
