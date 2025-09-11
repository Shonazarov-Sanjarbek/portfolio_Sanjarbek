import "./sass/main.css";
import Header from "./components/header/Header";
import Body from "./components/body/Body";
import Footer from "./components/footer/Footer";
import {
  FaTelegramPlane,
  FaGithub,
  FaLinkedin,
  FaInstagram,
} from "react-icons/fa";

function App() {
  return (
    <>
      <Header
        title={[
          { id: "hero", label: "Hero" },
          { id: "works", label: "Works" },
          { id: "hardskills", label: "Hardskills" },
          { id: "softskills", label: "Softskills" },
          { id: "contact", label: "Contact" },
        ]}
      />
      <Body />
      <Footer
        logoText="San_Dev"
        description="Frontend developer | Creative & Modern UI/UX. Building responsive and modern web applications."
        socials={[
          { icon: <FaTelegramPlane />, href: "https://t.me/Bek_8747_uzb" },
          {
            icon: <FaGithub />,
            href: "https://github.com/Shonazarov-Sanjarbek",
          },
          {
            icon: <FaInstagram />,
            href: "https://www.instagram.com/sanjarbek_8747/",
          },
        ]}
      />
    </>
  );
}

export default App;
