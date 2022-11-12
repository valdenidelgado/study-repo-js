import React from "react";
import "./header.css";

export default function Header() {
  return (
    <header className="header">
      <nav className="nav container">
        <a href="#" className="nav__logo">Valdeni</a>

        <div className="nav__menu" id="nav-menu">
          <ul className="nav__list grid">
            <li className="nav__item">
              <a href="#home" className="nav__link active-link">
                <i className="uil uil-estate nav__icon"></i> 
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
};