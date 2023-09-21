import React from 'react';
import './MyAccount.css';
export default function MyAccount() {
  return (
    <div className="myaccount-main-content">
      <div className="myaccount-welcome">
        <h1>Welcome</h1>
        <p>
          Here, you can effortlessly manage your DIY projects, stay updated on
          recent activities, and access various tools and features to enhance
          your DIY experience.
        </p>
      </div>
      <div className="myaccount-user-details">
        <h2>User Detail</h2>
        <div className="myaccount-user-inner">
          <p>user1</p>
          <p>user1@gmail.com</p>
        </div>
        <input type="button" value="Edit" />
      </div>
      <div className="myaccount-social">
        <h2>Social</h2>
        <div className="myaccount-social-inner">
          <div className="myaccount-social-links">
            <p>Instagram : </p>
            <p className="myaccount-links">
            </p>
          </div>
          <div className="myaccount-social-links">
            <p>X : </p>
            <p className="myaccount-links">
            </p>
          </div>
          <div className="myaccount-social-links">
            <p>Youtube : </p>
            <p className="myaccount-links">
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
