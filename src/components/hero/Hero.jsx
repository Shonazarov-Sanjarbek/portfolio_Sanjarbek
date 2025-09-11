import React from "react";
import Button from "../button/Button";

function Hero() {
  return (
    <div className="container">
      <div className="hero">
        <p className="hero__subtitle">
          Hello, I am Sanjarbek A web developer living in City.
        </p>
        <p className="hero__title">
          I help businesses and companies achieve their goals by designing
          user-centric digital products and interactive experiences. If you
          would like to contact me, you can click the button below.
        </p>
          <Button />
      </div>
    </div>
  );
}

export default Hero;
