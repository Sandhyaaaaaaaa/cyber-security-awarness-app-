import React, { useState } from "react";
import "./aboutus.css"; // We'll style it here

const teamMembers = [
  {
    name: "Sandhya A",
    info: "Passionate about cybersecurity education in rural communities.",
  },
  {
    name: "Priyadarshini P",
    info: "Ensures tech works smoothly for all users.",
  },
];

const sections = [
  {
    title: "Our Mission",
    content:
      "To make rural students digitally safe by providing engaging, simple, and effective cybersecurity awareness modules.",
  },
  {
    title: "Why Cybersecurity?",
    content:
      "With increased internet access, rural youth are exposed to threats. Our platform ensures they are aware, alert, and protected.",
  },
  {
    title: "Future Plans",
    content:
      "We plan to launch modules in regional languages and gamify more sections for deeper engagement.",
  },
];

const AboutUs = () => {
  const [expanded, setExpanded] = useState(null);

  return (
    <div className="aboutus-container">
      <h1>About Our Cybersecurity Awareness Project</h1>
      <p className="intro-text">
        Empowering rural communities through digital safety education.
      </p>

      <div className="sections">
        {sections.map((sec, index) => (
          <div
            className={`section ${expanded === index ? "expanded" : ""}`}
            key={index}
            onClick={() => setExpanded(expanded === index ? null : index)}
          >
            <h2>{sec.title}</h2>
            {expanded === index && <p>{sec.content}</p>}
          </div>
        ))}
      </div>

      <h2>Meet Our Team</h2>
      <div className="team-grid">
        {teamMembers.map((member, index) => (
          <div className="team-card" key={index}>
            <div className="card-content">
              <h3>{member.name}</h3>
              <p><strong>{member.role}</strong></p>
              <p>{member.info}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AboutUs;
