import React, { useState } from "react";
import "../styles/navbar.css";
// eslint-disable-next-line import/no-extraneous-dependencies
import { Link } from "react-router-dom";
import quickmoveLogo from "../styles/images/quickmoveLogo.png";
import loginIcon from "../styles/images/loginIconWhite.png";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const handleKeyDown = (event) => {
    if (event.key === "Enter" || event.key === " ") {
      toggleMenu();
    }
  };

  return (
    <div className="navbar-container">
      <div
        className={`burger-menu${menuOpen ? " open" : ""}`}
        onClick={toggleMenu}
        onKeyDown={handleKeyDown}
        role="button"
        tabIndex={0}
      >
        <span className="burger-menu-line burger-menu-line-1" />
        <span className="burger-menu-line burger-menu-line-2" />
        <span className="burger-menu-line burger-menu-line-3" />
      </div>
      <img
        src={quickmoveLogo}
        alt="Logo for QuickMove"
        className="quickmove-logo"
      />
      <ul className={`navbar-links${menuOpen ? " open" : ""}`}>
        <div className="logo-container">
          <img
            src={quickmoveLogo}
            alt="Logo for QuickMove"
            className="quickmove-logo-small"
          />
        </div>
        <div className="signin-color-block">
          <img src={loginIcon} alt="Login Icon" className="loginIcon" />
          <p>sign in</p>
        </div>
        <li className="navbar-subheading">Buy</li>
        <li className="navbar-links-item">
          <Link to="/">View Properties</Link>
        </li>
        <li className="navbar-links-item">
          <Link to="/property-valuation">Property Valuation</Link>
        </li>
        <li className="navbar-links-item">
          <Link to="/mortgages">Mortgages</Link>
        </li>
        <li className="navbar-subheading">Sell</li>
        <li className="navbar-links-item">
          <Link to="/sell-properties">Sell a Property</Link>
        </li>
        <li className="navbar-subheading">Rent</li>
        <li className="navbar-links-item">
          <Link to="/property-to-rent">Property to rent</Link>
        </li>
        <li className="navbar-links-item">
          <Link to="/student-property-to-rent">Student property to rent</Link>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
