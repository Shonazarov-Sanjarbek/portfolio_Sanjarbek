import Button from "../button/Button";
import monitor from "../../assets/monitor.png";
import phone from "../../assets/phone.png";

function Hero() {
  return (
    <section id="hero" className="hero">
      <div className="container hero-grid">
        <div className="hero-left">
          <p className="eyebrow">Frontend Developer</p>
          <h1>
            Hi, I'm <span className="accent">Sanjarbek</span><br />
            I build beautiful & fast web experiences.
          </h1>

          <p className="lead">
            I specialize in responsive UI, performance, and accessible interfaces.
          </p>

          <div className="hero-ctas">
            <Button variant="primary" size="md" href="#projects">
              View Projects
            </Button>

            <Button variant="ghost" size="md" href="#contact">
              Contact Me
            </Button>
          </div>
        </div>

        <div className="hero-right">
          <div className="device-mockup">
            <div className="screen screen-lg">
              <img src={monitor} alt="Monitor mockup" />
            </div>
            <div className="screen screen-sm">
              <img src={phone} alt="Phone mockup" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
