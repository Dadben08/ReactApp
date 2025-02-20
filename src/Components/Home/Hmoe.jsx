import React from "react";
import { Link } from "react-router-dom";
import "./Home.css";

const Home = () => {
  return (
    <div className="home-container">
      <header className="hero-section">
        <h1>Welcome to My Portfolio</h1>
        <p>
          I'm <strong>DADA Benjamin</strong>, a passionate **Full-Stack Developer** dedicated to building 
          dynamic, scalable, and user-friendly web applications.
        </p>
        <Link to="/contact" className="cta-button">Let's Connect</Link>
      </header>

      <section className="about-preview">
        <h2>About Me</h2>
        <p>
          I specialize in **React.js, Node.js, MongoDB**, and modern web technologies. 
          My focus is on creating intuitive user interfaces and seamless user experiences.
        </p>
        <Link to="/about" className="secondary-button">Learn More</Link>
      </section>

      <section className="skills-preview">
        <h2>What I Do</h2>
        <div className="skills-list">
          <div className="skill-card">🚀 Frontend Development</div>
          <div className="skill-card">💻 Backend Development</div>
          <div className="skill-card">📱 Responsive Web Design</div>
          <div className="skill-card">🔗 API Integration</div>
          <div className="skill-card">⚡ Performance Optimization</div>
        </div>
      </section>

      <section className="projects-preview">
        <h2>My Recent Work</h2>
        <p>Check out some of the projects I've worked on.</p>
        <Link to="/projects" className="cta-button">View Projects</Link>
      </section>
    </div>
  );
};

export default Home;
