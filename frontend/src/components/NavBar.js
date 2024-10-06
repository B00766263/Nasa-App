import React from "react";
import { Link } from "react-router-dom";
import './NavBarStyle.css';

export default function Navbar() {
  return (
    <div className="main-content">
        <nav className="navbar">
        <div className="navbar-container">
            <div className="navbar-title">NASA</div>
            <ul className="nav-menu">
                <li className="nav-item">
                <Link to="/" className="nav-link">Home</Link>
            </li>
            <li className="nav-item">
                <Link to="/nasaphoto" className="nav-link">Photo Of The Day</Link>
            </li>
            <li className="nav-item">
                <Link to="/barchart" className="nav-link">Asteroids NeoWs Chart</Link>
            </li>
            <li className="nav-item">
                <Link to="/fetchimage" className="nav-link">Special</Link>
            </li>
            </ul>
        </div>
        </nav>
    </div>
  );
}
