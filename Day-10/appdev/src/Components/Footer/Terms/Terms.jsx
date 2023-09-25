import React from 'react';
import './Terms.css';

export default function Terms() {
  return (
    <div className="terms-container">
    <div className="terms-conditions-container">
    <h1>Terms and Conditions</h1>

    <div className="feature-box">
      <h2>1. Acceptance of Terms</h2>
      <p>
        By accessing this website, we assume you accept these terms and conditions. Do not continue
        to use DIY Home Improvement Hub if you do not agree to take all of the terms and conditions
        stated on this page.
      </p>
    </div>

    <div className="feature-box">
      <h2>2. Use License</h2>
      <p>
        Permission is granted to temporarily download one copy of the materials (information or
        software) on DIY Home Improvement Hub's website for personal, non-commercial transitory
        viewing only.
      </p>
    </div>

    <div className="feature-box">
      <h2>3. Disclaimer</h2>
      <p>
        The materials on DIY Home Improvement Hub's website are provided on an 'as is' basis. DIY Home
        Improvement Hub makes no warranties, expressed or implied, and hereby disclaims and negates
        all other warranties including, without limitation, implied warranties or conditions of
        merchantability, fitness for a particular purpose, or non-infringement of intellectual property
        or other violation of rights.
      </p>
    </div>

    <div className="feature-box">
      <h2>4. Limitations</h2>
      <p>
        In no event shall DIY Home Improvement Hub or its suppliers be liable for any damages
        (including, without limitation, damages for loss of data or profit, or due to business
        interruption) arising out of the use or inability to use the materials on DIY Home Improvement
        Hub's website.
      </p>
    </div>

    <div className="feature-box">
      <h2>5. Revisions</h2>
      <p>
        The materials appearing on DIY Home Improvement Hub's website could include technical,
        typographical, or photographic errors. DIY Home Improvement Hub does not warrant that any of
        the materials on its website are accurate, complete, or current.
      </p>
    </div>

    {/* Additional Feature Boxes */}
    <div className="feature-box">
      <h2>6. User Account</h2>
      <p>
        You may need to create an account to use certain features of this website. You are responsible
        for maintaining the confidentiality of your account and password and for restricting access to
        your computer.
      </p>
    </div>

    <div className="feature-box">
      <h2>7. External Links</h2>
      <p>
        This website may contain links to external websites that are not provided or maintained by us.
        We do not guarantee the accuracy, relevance, or completeness of any information on these external
        websites.
      </p>
    </div>

    {/* Add more feature boxes as needed */}
  </div>

      <div className="join-button-container">
        <a
          href="https://blog.google/web-creators/hometalk-builds-diy-home-improvement-community/"
          target="_blank"
          rel="noopener noreferrer"
          className="join-button"
        >
          Join Now
        </a>
      </div>


      <p>
        Thank you for being a part of our DIY family. We look forward to
        seeing your projects come to life and being a part of your incredible
        journey in the world of home improvement.
      </p>

      <p>
        Welcome to DIY Home Improvement Hub, where creativity knows no bounds.
        Let's get started!
      </p>
    </div>
  );
}
