import React, { useState } from "react";
import logo from "../../assets/San_Dev.png";

function Header({ title }) {
  const [open, setOpen] = useState(false);

  const handleScroll = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
      setOpen(false); // sidebarni yopib yuboradi
    }
  };

  return (
    <div className="header">
      <div className="container">
        <div className="header__block">
          <img className="header__logo" src={logo} alt="logo" />
          <ul className="header__collection">
            {title.map((item, index) => (
              <li
                className="header__item"
                key={index}
                onClick={() => handleScroll(item.id)}
              >
                {item.label}
              </li>
            ))}
          </ul>

          {!open && (
            <button
              className="header__burger"
              onClick={() => setOpen(true)}
              aria-label="Open menu"
            >
              <span />
              <span />
              <span />
            </button>
          )}
        </div>
      </div>

      {/* Sidebar */}
      <div className={`header__sidebar${open ? " open" : ""}`}>
        <button
          className="header__close"
          onClick={() => setOpen(false)}
          aria-label="Close menu"
        >
          &times;
        </button>
        <ul>
          {title.map((item, index) => (
            <li
              className="header__sidebar-item"
              key={index}
              onClick={() => handleScroll(item.id)}
            >
              {item.label}
            </li>
          ))}
        </ul>
      </div>

      {open && (
        <div className="header__overlay" onClick={() => setOpen(false)} />
      )}
    </div>
  );
}

export default Header;
