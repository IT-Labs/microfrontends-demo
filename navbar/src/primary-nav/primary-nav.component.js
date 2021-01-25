import React from "react";
import "./primary-nav.css";
import { NavLink } from "react-router-dom";

export default function PrimaryNav(props) {
  return (
    <nav className='primaryNav'>
      <ul> 
        <li>
          <NavLink
            to="/settings"
            className='navLink'
            activeClassName='activeClassName'
          >
            Account settings
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/admin"
            className='navLink'
            activeClassName='activeClassName'
          >
            Admin
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/users"
            className='navLink'
            activeClassName='activeClassName'
          >
            Users
          </NavLink>
        </li>
      </ul> 
    </nav>
  );
}
