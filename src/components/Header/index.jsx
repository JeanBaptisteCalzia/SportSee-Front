import React from "react";
import logo from "../../assets/logo.svg";
import { NavLink } from "react-router-dom";
import { useContext } from "react";
import { ThemeContext } from "../../utils/Context";

import "./nav.scss";

function Header() {
  const { toggleId, swithToggleId } = useContext(ThemeContext);
  const userId = toggleId ? "12" : "18";

  return (
    <nav>
      <ul>
        <li>
          <NavLink to="/" className="logo">
            <img src={logo} alt="logo SportSee" />
          </NavLink>
        </li>
        <li>
          <NavLink
            className={({ isActive }) => {
              return isActive ? "active" : "";
            }}
            to="/"
          >
            Accueil
          </NavLink>
        </li>

        <li>
          <NavLink
            className={({ isActive }) => {
              return isActive ? "active" : "";
            }}
            to={`/user/${userId}`}
          >
            Profil
          </NavLink>
        </li>

        <li>
          <NavLink
            className={({ isActive }) => {
              return isActive ? "active" : "";
            }}
            to="/settings"
          >
            Réglage
          </NavLink>
        </li>
        <li>
          <NavLink
            className={({ isActive }) => {
              return isActive ? "active" : "";
            }}
            to="/social"
          >
            Communauté
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default Header;
