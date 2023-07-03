import {
  faBars,
  faStaffSnake,
  faTimes,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "./Button";
import "./Navbar.css";

function Navbar() {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);
  const showButton = () => {
    if (window.innerWidth <= 960) setButton(false);
    else setButton(true);
  };
  useEffect(() => {
    showButton();
  }, []);
  window.addEventListener("resize", showButton);

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <Link to="/" className="navbar-logo" onClick={closeMobileMenu}>
          PyCodeX
          <FontAwesomeIcon className="fa-staff-snake" icon={faStaffSnake} />
        </Link>
        <div className="menu-icon" onClick={handleClick}>
          <FontAwesomeIcon
            icon={click ? faTimes : faBars}
            className={click ? "fas fa-times" : "fas fa-bars"}
          />
        </div>
        <ul className={click ? "nav-menu active" : "nav-menu"}>
          <li className="nav-item">
            <Link to="/" className="nav-links" onClick={closeMobileMenu}>
              Home
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/lessons" className="nav-links" onClick={closeMobileMenu}>
              Lessons
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to="/challenges"
              className="nav-links"
              onClick={closeMobileMenu}
            >
              Challenges
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/discuss" className="nav-links" onClick={closeMobileMenu}>
              Discuss
            </Link>
          </li>
          <li className="nav-item button">
            <Link
              to="/sign-up"
              className="nav-links-mobile"
              onClick={closeMobileMenu}
            >
              Sign Up
            </Link>
          </li>
        </ul>
        {button && <Button buttonStyle={"btn--outline"}>SIGN UP</Button>}
      </div>
    </nav>
  );
}

export default Navbar;
