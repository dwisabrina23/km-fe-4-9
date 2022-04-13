import React from "react";
import { NavLink, useHistory } from "react-router-dom";
import './Navbar.css';
import logoYABB from "../../Assets/Images/logo-gigih.png";

export default function Navbar() {
  let history = useHistory();
  const handleClick = () => {
    history.push("/");
    history.push("/trending");
  };

  return (
    <div>
      <header className="bg-white mb-4">
        <nav className="navbar navbar-expand-lg navbar-light bg-white p-3 shadow">
          <div className="container-fluid">
            <a className="navbar-brand" href="/">
              <img
                src={logoYABB}
                alt="company logo"
              />
            </a>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNavAltMarkup"
              aria-controls="navbarNavAltMarkup"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
              <ul className="navbar-nav ms-auto">
                <li className="nav-item ">
                  <NavLink className="nav-link" onClick={handleClick} to="/">
                    HOME
                  </NavLink>
                </li>
                <li className="nav-item ">
                  <NavLink className="nav-link" onClick={handleClick} to="/trending">
                    TRENDING
                  </NavLink>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </header>
    </div>
  );
}