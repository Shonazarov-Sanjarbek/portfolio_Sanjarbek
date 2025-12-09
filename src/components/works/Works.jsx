import React from "react";
import bottom from "../../assets/bottom.svg";
import aurum from "../../assets/aurum-avia.png";
import diceGames from "../../assets/dice-game.png";
import webpack from "../../assets/webpack.png";
import cart from "../../assets/internet magazin.png";

function Works() {
  const cards = [
    { img: aurum, link: " https://aurum-avia.uz", alt: "NestJS" },
    { img: diceGames, link: "https://dicegame-sanjarbek.vercel.app/", alt: "Dice Game" },
    { img: webpack, link: "https://webpack-sanjarbek.vercel.app/", alt: "Webpack" },
    { img: cart, link: "https://internet-magazin-pi.vercel.app/", alt: "Cart" },
  ];
  return (
    <div className="container">
      <div className="work">
        <div className="work__desc">
          <img src={bottom} alt="" />
          <p className="work__text">My work</p>
        </div>
        <div className="work__wrapper">
         {cards.map((card, idx) => (
            <a
              className="work__card"
              href={card.link}
              target="_blank"
              rel="noopener noreferrer"
              key={idx}
            >
              <img src={card.img} alt={card.alt} style={{ width: "100%", height: "100%", objectFit: "cover" }} />
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Works;
