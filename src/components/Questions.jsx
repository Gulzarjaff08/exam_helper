import React from 'react'
import { NavLink } from "react-router-dom";
import {useNavigate} from 'react-router-dom'
import { Outlet } from 'react-router-dom'
function Questions() {
  return (
    <div>
      <h2>Questions:</h2>
      <ul>
        <li>
          <NavLink
            to="math"
            className={({isActive}) => isActive ? "navclass" : ""}
          >
            Math
          </NavLink>
        </li>

        <li>
          <NavLink
            to="physics"
            className={({isActive}) => isActive ? "navclass" : ""}
          >
            Physics
          </NavLink>
        </li>

        <li>
          <NavLink
            to="chemistry"
            className={({isActive}) => isActive ? "navclass" : ""}
          >
            Chemistry
          </NavLink>
        </li>
      </ul>
      <Outlet/>
    </div>
  )
}

export default Questions
