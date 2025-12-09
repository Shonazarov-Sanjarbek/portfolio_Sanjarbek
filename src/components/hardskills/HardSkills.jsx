import React from "react";
import { FaHtml5, FaCss3Alt, FaJsSquare, FaReact } from "react-icons/fa";
import { SiBootstrap, SiWebpack, SiTailwindcss, SiSass } from "react-icons/si";

const icons = [
  <FaHtml5 style={{ color: "#E44D26" }} />,
  <FaCss3Alt style={{ color: "#264de4" }} />,
  <SiSass style={{ color: "#CC6699" }} />,
  <SiTailwindcss style={{ color: "#38bdf8" }} />,
  <SiBootstrap style={{ color: "#7952b3" }} />,
  <FaJsSquare style={{ color: "#f7df1e" }} />,
  <FaReact style={{ color: "#61dbfb" }} />,
  <SiWebpack style={{ color: "#1c78c0" }} />,
];

function SkillsSlider() {
  return (
    <div className="container">
      <div className="skills-slider">
        <div className="skills-slider__track">
          {[...icons, ...icons].map((icon, i) => (
            <div className="skills-slider__item" key={i}>
              {icon}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default SkillsSlider;
