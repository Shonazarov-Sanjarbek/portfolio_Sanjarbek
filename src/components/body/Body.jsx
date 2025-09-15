import React from "react";
import Hero from "../hero/Hero";
import Works from "../works/Works";
import HardSkills from "../hardskills/HardSkills";
import SoftSkills from "../softskills/SoftSkills";
import Contact from "../contact/Contact";

function Body() {
  return (
    <body className="body">
      <section id="hero" className="section">
        <Hero />
      </section>
      <section id="works" className="section">
        <Works />
      </section>
      <section id="hardskills" className="section">
        <HardSkills />
      </section>
      <section id="softskills" className="section">
        <SoftSkills />
      </section>
      <section id="contact" className="section">
        <Contact />
      </section>
    </body>
  );
}

export default Body;
