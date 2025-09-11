import React from "react";
import { FaHtml5, FaCss3Alt, FaJsSquare, FaReact } from "react-icons/fa";
import { SiBootstrap, SiWebpack, SiTailwindcss, SiSass } from "react-icons/si";

const hardSkills = [
  { name: "HTML", level: 95, icon: <FaHtml5 style={{ color: "#E44D26" }} /> },
  { name: "CSS", level: 90, icon: <FaCss3Alt style={{ color: "#264de4" }} /> },
  { name: "SCSS", level: 90, icon: <SiSass style={{ color: "#CC6699" }} /> },
  {
    name: "Tailwind",
    level: 90,
    icon: <SiTailwindcss style={{ color: "#38bdf8" }} />,
  },
  {
    name: "Bootstrap",
    level: 85,
    icon: <SiBootstrap style={{ color: "#7952b3" }} />,
  },
  {
    name: "JavaScript",
    level: 80,
    icon: <FaJsSquare style={{ color: "#f7df1e" }} />,
  },
  { name: "React", level: 85, icon: <FaReact style={{ color: "#61dbfb" }} /> },
  {
    name: "Webpack",
    level: 50,
    icon: <SiWebpack style={{ color: "#1c78c0" }} />,
  },
];

function HardSkills() {
  return (
    <div className="container"> 
      <div className="hardskills">
        <h2 className="hardskills__title">Hard Skills</h2>
        <div className="hardskills__grid">
          {hardSkills.map((hardSkills, i) => (
            <div className="hardskills__card" key={i}>
              <div className="hardskills__icon">{hardSkills.icon}</div>
              <h3>{hardSkills.name}</h3>
              <div className="hardskills__bar">
                <div
                  className="hardskills__progress"
                  style={{ width: `${hardSkills.level}%` }}
                ></div>
              </div>
              <span>{hardSkills.level}%</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default HardSkills;
