import React from 'react';
import './Footer.css';
import { AiOutlinePhone, AiOutlineMessage, AiOutlineLinkedin, AiOutlineInstagram, AiOutlineWhatsApp, AiOutlineGithub } from "react-icons/ai";
import { Link } from 'react-scroll';

const Footer = () => {
  const socialMediaIcons = [
    { id: 1, icon: <AiOutlinePhone />, name: "Phone", url: 'tel:+919940496523' },
    { id: 2, icon: <AiOutlineMessage />, name: "Message", url: 'mailto:pukalpukal720@gmail.com' },
    { id: 3, icon: <AiOutlineLinkedin />, name: "LinkedIn", url: 'https://www.linkedin.com/in/pukalendhi-t-2186b9254/' },
    { id: 4, icon: <AiOutlineInstagram />, name: "Instagram", url: 'https://www.instagram.com/your-instagram-profile' },
    { id: 5, icon: <AiOutlineWhatsApp />, name: "WhatsApp", url: 'https://wa.me/9940496523' },
    { id: 6, icon: <AiOutlineGithub />, name: "GitHub", url: 'https://github.com/pugalendhi221' },
  ];

  return (
    <footer className="footer">
      <h3>Pugalendhi T</h3>
      <ul>
        <li><Link to="Home" smooth={true} duration={500}>Home</Link></li>
        <li><Link to="Skills" smooth={true} duration={500}>Skills</Link></li>
        <li><Link to="Projects" smooth={true} duration={500}>Projects</Link></li>
        <li><Link to="Education" smooth={true} duration={500}>Education</Link></li>
        <li><Link to="Contact" smooth={true} duration={500}>Contact</Link></li>
      </ul>
      <div className="overall-icon-container">
        {socialMediaIcons.map(icon => (
          <a key={icon.id} href={icon.url} target="_blank" rel="noopener noreferrer">
            <div className="icon-container" title={icon.name}>
              {icon.icon}
            </div>
          </a>
        ))}
      </div>
      <h6>"Empowering Your Digital Evolution!"</h6>
    </footer>
  );
};

export default Footer;
