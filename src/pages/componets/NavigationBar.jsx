import React from "react";
import { Link, NavLink } from "react-router-dom";

export const NavigationBar = () => {
  return (
    <div>
      <nav>
        <ul>
          <li>
            <NavLink to="">home</NavLink>
            {/* <a href="">home</a> */}
          </li>
          <li>
            <NavLink to="contact">contact</NavLink>
          </li>
          <li>
            <NavLink to="about">about</NavLink>
          </li>
          <li>
            <NavLink to="service">services</NavLink>
          </li>
          <li>
            <NavLink to="content">Content</NavLink>
          </li>
          <li>
            <NavLink to="books">Books</NavLink>
          </li>
        </ul>
      </nav>
    </div>
  );
};
