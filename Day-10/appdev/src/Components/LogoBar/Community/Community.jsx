import React from 'react'
import './Community.css';
export default function Community() {
    const openURLInNewTab = () => {
        window.open('https://blog.google/web-creators/hometalk-builds-diy-home-improvement-community/', '_blank');
      };
  return (
    <div className="community-page">
    <h1 className="community-title">Welcome to the DIY Home Improvement Hub Community</h1>
    <p className="community-introduction">
      At DIY Home Improvement Hub, we believe that the best ideas are born when creative minds come together.
      Our Community Page is the heart of our DIY family, where like-minded enthusiasts, builders, makers, and creators gather
      to share their passion for home improvement.
    </p>
    <h2>Why Join Our Community:</h2>
    <div className="feature-box">
      <h3>Connect and Collaborate</h3>
      <p>
        Join forces with others who share your interests, whether you're a seasoned pro or just starting out.
        Collaborate on projects, exchange ideas, and learn from each other.
      </p>
    </div>
    <div className="feature-box">
      <h3>Showcase Your Work</h3>
      <p>
        Our community is your platform to shine. Showcase your latest projects, renovations, and DIY masterpieces.
        Get feedback, tips, and recognition from fellow DIY enthusiasts.
      </p>
    </div>
    <button className="join-button" onClick={openURLInNewTab}>Join Our Community</button>
  </div>
  )
}
