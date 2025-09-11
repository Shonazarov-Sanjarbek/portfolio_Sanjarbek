import React from "react";

function Button() {
  const openTelegram = () => {
    window.open("https://t.me/Bek_8747_uzb", "_blank");
  };
  return (
    <button onClick={openTelegram} className="button">
      Bek_8747_uzb
    </button>
  );
}

export default Button;
