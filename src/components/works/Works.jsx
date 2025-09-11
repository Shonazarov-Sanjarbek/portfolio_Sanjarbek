import React from "react";
import bottom from "../../assets/bottom.svg";
import nest from "../../assets/nest.png";
import diceGames from "../../assets/dice-game.png";
import webpack from "../../assets/webpack.png";
import mohid from "../../assets/mohid.png";

function Works() {
  const cards = [
    { img: nest, link: " https://nestsanjarbek.vercel.app/", alt: "NestJS" },
    { img: diceGames, link: "https://dicegame-sanjarbek.vercel.app/", alt: "Dice Game" },
    { img: webpack, link: "https://webpack-sanjarbek.vercel.app/", alt: "Webpack" },
    { img: mohid, link: "https://mohid-apisanjarbek.vercel.app/", alt: "Mohid" },
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
