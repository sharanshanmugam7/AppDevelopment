import React from 'react';
import './MainPage.css';
import Project1 from './Project 1.jpg';
import Project2 from './Project 2.jpg';
import Project3 from './Project 3.jpg';
import Project4 from './Project 4.jpg';
import tiptrick1 from './tip&trick1.jpg';
import tiptrick2 from './tip&trick2.jpg';
import tiptrick3 from './tip&trick3.jpg';
import tiptrick4 from './tip&trick4.jpg';
import LoadingPage from '../LoadingPage/LoadingPage';
import { useNavigate } from 'react-router-dom';

function MainPage() {
  const navigate = useNavigate();

  return (
    <div className="main-page">
      <div className="header">
          <h1 className="wel">WELCOME TO Mr.DIY </h1> <br/> <h2 onClick={() => navigate('/')} className="log">Login to your DIY world !</h2><br/>
        <div className="para">
          Are you ready to unlock your inner DIY enthusiast and transform your living space into a haven of creativity and innovation? <br/> Welcome to DIY Home Improvement Hub, your one-stop destination for all things DIY!
        </div>
          <h1 className="wel">Discover Endless Possibilities</h1>
        <p className="para">
          Explore our extensive collection of DIY projects, from crafting bespoke furniture pieces to revamping your outdoor oasis. Our step-by-step tutorials, expert tips, and innovative ideas will fuel your imagination and help you turn your visions into reality.
        </p>
        <p className="para">
          <h2>Welcome to DIY Home Improvement Hub, where creativity knows no bounds. Let's get started!</h2>
        </p>
      </div>
      <div className="featured-projects">
        <h2>Featured Projects</h2>
        <div className="projects">
          <div className="project-card">
            <img src={Project1} alt="Project 1" />
            <h3>Wall Sconces</h3>
          </div>
          <div className="project-card">
            <img src={Project2} alt="Project 2" />
            <h3>TERRACOTTA POT</h3>
          </div>
          <div className="project-card">
            <img src={Project3} alt="Project 3" />
            <h3>Terracotta Paint Hack</h3>
          </div>
          <div className="project-card">
            <img src={Project4} alt="Project 4" />
            <h3>PLANT STAND</h3>
          </div>
        </div>
      </div>
      <div className="latest-articles">
        <h2>Tips and Tricks</h2>
        <div className="articles">
          <div className="article-card">
            <img src={tiptrick1} alt="Tip & Trick 1" />
            <h3>When and How to Use Primer</h3>
          </div>
          <div className="article-card">
            <img src={tiptrick2} alt="Tip & Trick 2" />
            <h3>4 Furniture Cleaning Tips</h3>
          </div>
          <div className="article-card">
            <img src={tiptrick3} alt="Tip & Trick 3" />
            <h3>Top Ten Wood Glues</h3>
          </div>
          <div className="article-card">
            <img src={tiptrick4} alt="Tip & Trick 4" />
            <h3>Top 7 Tips to Organize Your Wardrobe</h3>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LoadingPage(MainPage);
