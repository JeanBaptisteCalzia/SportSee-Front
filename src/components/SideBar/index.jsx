import React from "react";
import { NavLink } from "react-router-dom";
import iconMeditation from "../../assets/icon/meditation.svg";
import iconSwimming from "../../assets/icon/swimming.svg";
import iconCycling from "../../assets/icon/cycling.svg";
import iconDumbbell from "../../assets/icon/dumbbell.svg";
import "./sideBar.scss";

function SideBar() {
  return (
    <aside>
      <ul>
        <li>
          <NavLink to="#">
            <img src={iconMeditation} alt="Meditation" />
          </NavLink>
        </li>
        <li>
          <NavLink to="#">
            <img src={iconSwimming} alt="Swimming" />
          </NavLink>
        </li>
        <li>
          <NavLink to="#">
            <img src={iconCycling} alt="Cycling" />
          </NavLink>
        </li>
        <li>
          <NavLink to="#">
            <img src={iconDumbbell} alt="Dumbbell" />
          </NavLink>
        </li>
      </ul>
      <small>Copyright, SportSee 2020</small>
    </aside>
  );
}

export default SideBar;
