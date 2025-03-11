import React from "react";
import { NavLink } from "react-router-dom";
import "./navbar.css";

const Navbar = () => {
  return (
    <nav>
      <div className="searchbtn">
        
        <input type="text" id="inp" placeholder="Search...."/>
        <label htmlFor="inp" >search</label>
      </div>
      <ul>
        <li>
          <NavLink
            to="/"
            className={({isActive}) => isActive ? "navclass" : ""}
          >
            Home
          </NavLink>
        </li>

        <li>
          <NavLink
            to="/about"
            className={({isActive}) => isActive ? "navclass" : ""}
          >
            About
          </NavLink>
        </li>

        <li>
          <NavLink
            to="/questions"
            className={({isActive}) => isActive ? "navclass" : ""}
          >
            Questions
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
