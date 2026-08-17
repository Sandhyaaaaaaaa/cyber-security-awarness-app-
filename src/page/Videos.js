import React from "react";
import "./videos.css";


const videos = () => {
  return (
    <div style={{ textAlign: "center", padding: "20px" }}>
      <h1>🎥 Cybersecurity Videos</h1>
      <video width="480" controls>
        <source src="/videos/strong-passwords.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  );
};

export default videos;


//const videos = [
  //{
    //title: "How to Create Strong Passwords",
   // description: "Learn why strong passwords matter and how to create them.",
    //file: "/videos/strong-passwords.mp4",
  //},
  //{
    //title: "Social Media Safety Tips",
    //description: "Simple steps to stay safe on social media platforms.",
    //file: "/videos/social-media-safety.mp4",
  //},
  //{
    //title: "Safe Mobile & Internet Usage",
   // description: "Best practices to protect your devices and privacy online.",
    //file: "/videos/mobile-internet-usage.mp4",
  //},
///];

//const Videos = () => {
  //return (
    //<div className="videos-container">
      //<h1 className="videos-title">🎥 Cybersecurity Video Lessons</h1>
      //<p className="videos-subtitle">These videos are available even without internet!</p>

      //<div className="videos-grid">
        //{videos.map((video, idx) => (
          //<div key={idx} className="video-card">
           // <video controls width="100%">
             // <source src={video.file} type="video/mp4" />
            //  Your browser does not support the video tag.
           // </video>
           // <h3>{video.title}</h3>
           // <p>{video.description}</p>
         // </div>
       // ))}
      //</div>
   // </div>
  //);
//};

//export default Videos;
