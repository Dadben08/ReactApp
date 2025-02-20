import React from "react";
import "./About.css";

const About = () => {
  return (
    <div className="about-container">
      <h1>About Me</h1>
      <p>
        Hi! I'm <strong>DADA Benjamin</strong>, a passionate **Full-Stack Developer** with a strong background in building 
        dynamic and user-friendly web applications. I specialize in React.js for the frontend and Node.js for the backend.
      </p>

      <h2>My Skills</h2>
      <ul className="skills-list">
        <li>⚡ HTML, CSS and JavaScript (ES6+)</li>
        <li>⚡ React.js, Next.js</li>
        <li>⚡ Node.js, Express.js</li>
        <li>⚡ MongoDB, Mongoose</li>
        <li>⚡ Tailwind CSS, Bootstrap</li>
        <li>⚡ RESTful APIs</li>
        <li>⚡ Git, GitHub</li>
      </ul>

      <h2>My Experience</h2>
      <p>
        Over the years, I have built and contributed to several web applications, working on both frontend and backend 
        technologies. I enjoy problem-solving and turning complex ideas into elegant solutions. 
      </p>

      <h2>Interests & Hobbies</h2>
      <p>
        Beyond coding, I love **learning new technologies, contributing to open-source projects, 
        and mentoring beginners in web development**. When I'm not at my desk, you’ll find me **playing video games, 
        exploring tech trends, or networking with fellow developers.**
      </p>
    </div>
  );
};

export default About;
