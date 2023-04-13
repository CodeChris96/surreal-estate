import React, { useState } from "react";
import "../styles/navbar.css";
import quickmoveLogo from "../styles/images/quickmoveLogo.png";

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

  const handleCloseKeyDown = (event) => {
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
        <div className="signin-color-block" />
        <button
          type="button"
          className="close-menu"
          onClick={toggleMenu}
          onKeyDown={handleCloseKeyDown}
        >
          &times;
        </button>
        <li className="navbar-subheading">Buy</li>
        <li className="navbar-links-item">View Properties</li>
        <li className="navbar-links-item">Property Valuation</li>
        <li className="navbar-links-item">Mortgages</li>
        <span className="burger-menu-line burger-menu-line-3" />
        <li className="navbar-subheading">Sell</li>
        <li className="navbar-links-item">Sell a Property</li>
        <span className="burger-menu-line burger-menu-line-3" />
        <li className="navbar-subheading">Rent</li>
        <li className="navbar-links-item">Property to rent</li>
        <li className="navbar-links-item">Student property to rent</li>
      </ul>
    </div>
  );
};

export default Navbar;
