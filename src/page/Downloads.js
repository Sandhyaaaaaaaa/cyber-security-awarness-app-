import React from "react";
import "./Downloads.css";

const pdfs = [
  {
    name: "Password Safety Guide",
    file: "introduction_to_cybersecurity.pdf",
    description: "How to create and manage strong, safe passwords.",
  },
  {
    name: "Social Media Safety Tips",
    file: "ACT_Digital_Security_Guidelines_2019.pdf",
    description: "Best practices to stay safe on social platforms.",
  },
  {
    name: "Safe Internet Usage",
    file: "cybersecuirty_sb_factsheets_all.pdf",
    description: "Learn safe practices for browsing and using the internet.",
  },
  {
    name: "Phishing Awareness",
    file: "Security Awareness Cheat Sheet.pdf",
    description: "Recognize and avoid phishing scams.",
  },
];

const Downloads = () => {
  return (
    <div className="downloads-container">
      <h1 className="downloads-title">📄 Download Learning Modules</h1>
      <p className="downloads-subtitle">
        Click below to download guides & tips about cybersecurity.
      </p>

      <div className="downloads-grid">
        {pdfs.map((pdf, idx) => (
          <div key={idx} className="download-card">
            <h3>{pdf.name}</h3>
            <p>{pdf.description}</p>
            <a
              href={`/downloads/${encodeURIComponent(pdf.file)}`}
              download
              className="download-link"
            >
              <button className="download-button">⬇ Download</button>
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Downloads;
