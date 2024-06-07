import React from 'react';
import './Footer.css';

import { AiOutlinePhone, AiOutlineMessage, AiOutlineLinkedin, AiOutlineInstagram, AiOutlineWhatsApp, AiOutlineGithub } from "react-icons/ai";




const Footer = () => {

  const socialMediaIcons = [
    { id: 1, image: "" },
    { id: 2, image: "" },
    { id: 3, image: "" },
    { id: 4, image: "" },
    { id: 5, image: "" },
    { id: 6, image: "" },
  ]

  return (
    <footer className="footer">
      <h3>Pugalendhi T</h3>
      <ul>
        <li>Home</li>
        <li>Skills</li>
        <li>Projects</li>
        <li>Education</li>
        <li>Contact</li>
      </ul>
      <div className="overall-icon-container">
        <div className="icon-container">
          <AiOutlinePhone />
        </div>

        <div className="icon-container">
          <AiOutlineMessage />
        </div>

        <div className="icon-container">
          <AiOutlineLinkedin />
        </div>

        <div className="icon-container">
          <AiOutlineInstagram />
        </div>

        <div className="icon-container">
          <AiOutlineWhatsApp />
        </div>

        <div className="icon-container">
          <AiOutlineGithub />
        </div>
      </div>
      <h6>"Empowering Your Digital Evolution!"</h6>
    </footer>
  );
};

export default Footer;
