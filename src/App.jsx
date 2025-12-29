import React from "react";
import Header from "./components/header/Header";
import Hero from "./components/hero/Hero";
import Projects from "./components/projects/Project";
import Skills from "./components/skills/Skills";
import Contact from "./components/contact/Contact";
import Footer from "./components/footer/Footer";

import "./sass/main.scss";

function App() {


  const skills = [
    // hardskills
    { type: "hard", name: "Html" },
    { type: "hard", name: "Css" },
    { type: "hard", name: "SASS" },
    { type: "hard", name: "Bootstrap" },
    { type: "hard", name: "JavaScript" },
    { type: "hard", name: "React" },
    { type: "hard", name: "Tailwindcss" },
    { type: "hard", name: "Webpack" },

    // softskills
    { type: "soft", name: "Teamwork" }, // Jamoada ishlash qobiliyati
    { type: "soft", name: "Communication" }, // Ochiq va samarali muloqot
    { type: "soft", name: "Problem Solving" }, // Muammolarni tez hal qilish
    { type: "soft", name: "Creativity" }, // Ijodkorlik va yangi g‘oyalar
    { type: "soft", name: "Networking" }, // Foydali aloqalar o‘rnatish
    { type: "soft", name: "Eager to Learn" }, // Yangi narsalarni o‘rganishga qiziqish
    { type: "soft", name: "Working with Community" }, // Hamjamiyat bilan ishlash
    { type: "soft", name: "Self Motivation" }, // O‘z-o‘zini rag‘batlantirish
  ];

  return (
    <div>
      <Header />
      <Hero />
      <Projects />
      <Skills skills={skills} />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
