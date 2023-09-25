import React from 'react';
import './MyAccount.css';
export default function MyAccount() {
  return (
    <div className="myaccount-main-content">
      <div className="myaccount-welcome">
        <h1>Hey Mate !</h1>
        <p>
          Here, you can effortlessly manage your DIY projects, stay updated on
          recent activities, and access various tools and features to enhance
          your DIY experience.
        </p>
      </div>
      <div className="myaccount-user-details">
        <h2>User Detail</h2>
        <div className="myaccount-user-inner">
          <p>Sharan</p>
          <p>727821tuit135@skct.edu.in</p>
        </div>
        <input type="button" value="Edit" />
      </div>
      <div className="myaccount-social">
        <h2>Social</h2><br/>
        <div className="myaccount-social-inner">
          <div className="myaccount-social-links">
            <a className="myaccount-links" href='https://www.instagram.com/diyprojectsdotcom/?hl=en'>Instagram</a>
          </div>
          <div className="myaccount-social-links">
            <a className="myaccount-links" href='https://twitter.com/DIYProjectsCom'> X
            </a>
          </div>
          <div className="myaccount-social-links">
            <a className="myaccount-links" href='https://www.youtube.com/channel/UCjfI5ZL05t77eMbDcKuAjbw'>Youtube
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
