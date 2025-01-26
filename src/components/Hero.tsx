import React from "react";
import "./Hero.css";
import {
  FaLinkedin,
  FaGithub,
  FaDiscord,
  FaCode,
  FaArrowDown,
} from "react-icons/fa";

const Hero: React.FC = () => {
  const handleScroll = () => {
    const projectsSection = document.getElementById("projects");
    if (projectsSection) {
      projectsSection.scrollIntoView();
      console.log("Testing");
    }
  };

  return (
    <section className="heroSection">
      <div className="profileContainer fade-in falling">
        <div className="profileWrapper">
          <span className="greenSymbolLeft">{`{`}</span>
          <img
            src="https://avatars.githubusercontent.com/u/69118918?v=4"
            alt="Profile"
            className="profileImage"
          />
          <span className="greenSymbolRight">{`}`}</span>
        </div>
        <h1 className="heroText">Hi, I'm Ethan!</h1>
        <h3>Software Developer - Computer Programming Student</h3>
        <p className="intro">
          Proficient in Java, MySQL & Git
          <br /> Experienced in C#, ASP.NET, C++, React, JavaScript, TypeScript,
          MongoDB
          <br /> Familiar with tools such as Docker, Redis, and Jenkins.
        </p>
        <div className="socialIcons fadein">
          <a
            href="https://www.linkedin.com/in/ethan-keating-7b672b297/"
            target="_blank"
            aria-label="LinkedIn"
          >
            <FaLinkedin size={60} />
          </a>
          <a
            href="https://github.com/EthanKeating"
            target="_blank"
            aria-label="GitHub"
          >
            <FaGithub size={60} />
          </a>
          <a
            href="https://discord.com/users/your-discord-username"
            target="_blank"
            aria-label="Discord"
          >
            <FaDiscord size={60} />
          </a>
          <a
            href="https://leetcode.com/EthanKeating/"
            target="_blank"
            aria-label="LeetCode"
          >
            <FaCode size={60} />
          </a>
        </div>
        <div className="scrollButtonContainer">
          <button
            onClick={handleScroll}
            style={{ fontSize: "36px", background: "none", border: "none" }}
          >
            <FaArrowDown />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
