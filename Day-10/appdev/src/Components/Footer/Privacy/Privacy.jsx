import React from 'react'
import './Privacy.css';
export default function Privacy() {
  return (
    <div className="privacy-container">
      <h1>Privacy Policy</h1>

      <h2>Your Privacy Matters</h2>
      <p>
        At DIY Home Improvement Hub, we are committed to protecting your privacy. This Privacy Policy outlines how your personal information is collected, used, and shared when you use our website.
      </p>

      <h2>Information We Collect</h2>
      <p>
        We may collect personal information that you provide when using our website, including your name, email address, and any other information you choose to share with us.
      </p>

      <h2>How We Use Your Information</h2>
      <p>
        We use the information collected to provide and improve our services, communicate with you, and customize your experience. We do not sell or share your personal information with third parties.
      </p>

      <h2>Security</h2>
      <p>
        We prioritize the security of your personal information and take appropriate measures to protect it. However, no method of transmission over the internet or electronic storage is 100% secure.
      </p>

      <h2>Changes to This Policy</h2>
      <p>
        We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page.
      </p>

      <div className="contact-button-container">
        <a href="/contact" className="contact-button">Contact Us</a>
      </div>
    </div>
  )
}
