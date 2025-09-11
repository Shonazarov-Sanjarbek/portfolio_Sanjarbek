import React from "react";
import {
  FaUsers,
  FaComments,
  FaLightbulb,
  FaPuzzlePiece,
  FaNetworkWired,
  FaRocket,
  FaBookOpen,
} from "react-icons/fa";

const softSkills = [
  { name: "Teamwork", desc: "Jamoada ishlash qobiliyati", icon: <FaUsers /> },
  {
    name: "Communication",
    desc: "Ochiq va samarali muloqot",
    icon: <FaComments />,
  },
  {
    name: "Problem Solving",
    desc: "Muammolarni tez hal qilish",
    icon: <FaPuzzlePiece />,
  },
  {
    name: "Creativity",
    desc: "Ijodkorlik va yangi g‘oyalar",
    icon: <FaLightbulb />,
  },
  {
    name: "Networking",
    desc: "Foydali aloqalar o‘rnatish",
    icon: <FaNetworkWired />,
  },
  {
    name: "Eager to Learn",
    desc: "Yangi narsalarni o‘rganishga qiziqish",
    icon: <FaBookOpen />,
  },
  {
    name: "Working with Community",
    desc: "Hamjamiyat bilan ishlash",
    icon: <FaUsers />,
  },
  {
    name: "Self Motivation",
    desc: "O‘z-o‘zini rag‘batlantirish",
    icon: <FaRocket />,
  },
];

function SoftSkills() {
  return (
    <div className="container">
      <div className="softskills">
        <h2 className="softskills__title">Soft Skills</h2>
        <div className="softskills__grid">
          {softSkills.map((skill, i) => (
            <div className="softskills__card" key={i}>
              <div className="softskills__icon">{skill.icon}</div>
              <h3>{skill.name}</h3>
              <p>{skill.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default SoftSkills;
