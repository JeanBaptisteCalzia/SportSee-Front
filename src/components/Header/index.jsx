import React from "react";
import { userMainData } from "../../datas/dataMocked";
import { NavLink } from "react-router-dom";
import logo from "../../assets/logo.svg";
import "./nav.scss";

function Header() {
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
        {userMainData &&
          userMainData.map(({ id }) => (
            <li key={id}>
              <NavLink
                className={({ isActive }) => {
                  return isActive ? "active" : "";
                }}
                to={`/user/${id}`}
              >
                Profil
              </NavLink>
            </li>
          ))}
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
