import React from "react";
// import hero from "../../assets/hero.png";

function Hero() {
  return (
    <div className="hero" >
      <div className="overlay"></div> {/* qora yarim shaffof qatlam */}
      <div className="hero__content">
        <h1>Hello, I'm Sanjarbek 👋</h1>
        <p>
          Frontend Developer | Creator of modern and responsive web applications
        </p>
      </div>
    </div>
  );
}

export default Hero;
