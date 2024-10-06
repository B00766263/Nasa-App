import React from "react";
import './FooterStyle.css';

export default function Footer() {
  return (
    <div className="main-content">
        <footer className="footer">
            <div className="footer-container">
                <div className="footer-links">
                <a href="https://api.nasa.gov/" target="_blank" rel="noopener noreferrer" className="footer-link">NASA APIs</a>
                <a href="https://www.nasa.gov/about/index.html" target="_blank" rel="noopener noreferrer" className="footer-link">About NASA</a>
                </div>
                <p className="footer-text">© 2024 NASA. All Rights Reserved.</p>
            </div>
        </footer>
    </div>
  );
}
