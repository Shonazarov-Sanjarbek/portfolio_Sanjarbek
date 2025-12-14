// Skills.jsx
import React from "react";
import { FaBrain, FaTools } from "react-icons/fa"; // icons

function Skills({ skills }) {
  // Auto-sort: promptdan kelgan malumotlarni ajratish
  const hardSkills = skills.filter((s) => s.type === "hard");
  const softSkills = skills.filter((s) => s.type === "soft");

  return (
    <section className="container">
      <div id="skills" className="skills">
        <h2 className="skills__title">Skills</h2>

        <div className="skills__block">
          {/* SOFT SKILLS */}
          <div className="skills__column soft">
            <div className="skills__header">
              <FaBrain className="skills__icon" />
              <h3>Soft Skills</h3>
            </div>

            <div className="skills__list">
              {softSkills.map((skill, i) => (
                <div className="skills__card" key={i}>
                  <span>{skill.name}</span>
                </div>
              ))}
            </div>
          </div>

          {/* HARD SKILLS */}
          <div className="skills__column hard">
            <div className="skills__header">
              <FaTools className="skills__icon" />
              <h3>Hard Skills</h3>
            </div>

            <div className="skills__list">
              {hardSkills.map((skill, i) => (
                <div className="skills__card" key={i}>
                  <span>{skill.name}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Skills;
