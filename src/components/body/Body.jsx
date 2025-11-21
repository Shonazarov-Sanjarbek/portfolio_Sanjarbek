import React, { useEffect, useRef } from "react";
import Hero from "../hero/Hero";
import Works from "../works/Works";
import HardSkills from "../hardskills/HardSkills";
import SoftSkills from "../softskills/SoftSkills";
import Contact from "../contact/Contact";

function Body() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    let width = canvas.width = window.innerWidth;
    let height = canvas.height = window.innerHeight;

    const particles = [];
    const numParticles = 100;

    class Particle {
      constructor() {
        this.x = Math.random() * width;
        this.y = Math.random() * height;
        this.vx = (Math.random() - 0.5) * 1.2;
        this.vy = (Math.random() - 0.5) * 1.2;
        this.size = Math.random() * 2 + 1;
      }
      move() {
        this.x += this.vx;
        this.y += this.vy;
        if(this.x < 0 || this.x > width) this.vx *= -1;
        if(this.y < 0 || this.y > height) this.vy *= -1;
      }
      draw() {
        ctx.fillStyle = "rgba(0,230,230,0.8)";
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI*2);
        ctx.fill();
      }
    }

    for(let i=0; i<numParticles; i++) particles.push(new Particle());

    function connectParticles() {
      for(let a=0; a<particles.length; a++){
        for(let b=a; b<particles.length; b++){
          const dx = particles[a].x - particles[b].x;
          const dy = particles[a].y - particles[b].y;
          const dist = Math.sqrt(dx*dx + dy*dy);
          if(dist < 120){
            ctx.strokeStyle = `rgba(0,230,230,${1 - dist/120})`;
            ctx.lineWidth = 1;
            ctx.beginPath();
            ctx.moveTo(particles[a].x, particles[a].y);
            ctx.lineTo(particles[b].x, particles[b].y);
            ctx.stroke();
          }
        }
      }
    }

    function animate() {
      ctx.clearRect(0,0,width,height);
      particles.forEach(p => { p.move(); p.draw(); });
      connectParticles();
      requestAnimationFrame(animate);
    }

    animate();

    window.addEventListener("resize", () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    });

    return () => {
      window.removeEventListener("resize", () => {});
    }
  }, []);

  return (
    <div className="body">
      <canvas ref={canvasRef} className="background-canvas" />
      <section id="hero" className="section"><Hero /></section>
      <section id="works" className="section"><Works /></section>
      <section id="hardskills" className="section"><HardSkills /></section>
      <section id="softskills" className="section"><SoftSkills /></section>
      <section id="contact" className="section"><Contact /></section>
    </div>
  );
}

export default Body;
