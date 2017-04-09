import React from 'react';
import './Header.css';

export default function Header() {
  return (
    <div className="site-header">
      <div className="container">
        <a href="index.html" className="branding">
          <img src="images/logo.png" alt="" className="logo" />
          <div className="logo-type">
            <h1 className="site-title">SkyCast</h1>
            <small className="site-description">Weather at your finger tip</small>
          </div>
        </a>
      </div>
    </div>
  );
}
