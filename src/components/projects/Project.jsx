// Projects.jsx
import React from "react";
import aurum from "../../assets/aurum-avia.png"
import game from "../../assets/dice-game.png"
import webpack from "../../assets/webpack.png"
import magazin from "../../assets/internet magazin.png"

const projects = [
  {
    title: "Aurum Avia",
    description: "Airline website UI & booking flow",
    href: "https://aurum-avia.uz",
    image: aurum,
  },
  {
    title: "Dice Game",
    description: "Interactive game built with JS and animations",
    href: "https://dicegame-sanjarbek.vercel.app/",
    image: game,
  },
  {
    title: "Webpack Demo",
    description: "Modern build setup & optimization",
    href: "https://webpack-sanjarbek.vercel.app/",
    image: webpack,
  },
  {
    title: "Ecommerce",
    description: "Small online shop UI & cart flows",
    href: "https://internet-magazin-pi.vercel.app/",
    image: magazin,
  },
];

function Projects() {
  return (
    <section id="projects" className="container">
      <div className="projects">
        <h2 className="projects__title">Selected Projects</h2>
        <div className="projects__grid">
          {projects.map((p, i) => (
            <a
              className="projects__card"
              href={p.href}
              target="_blank"
              rel="noopener noreferrer"
              key={i}
            >
              <div
                className="projects__media"
                style={{ backgroundImage: `url(${p.image})` }}
              ></div>
              <div className="projects__card-body">
                <h3>{p.title}</h3>
                <p>{p.description}</p>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
