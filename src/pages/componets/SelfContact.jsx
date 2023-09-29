import React from "react";
import { Link, Outlet } from "react-router-dom";

export const SelfContact = () => {
  return (
    <div>
      <ul>
        <li>
          <Link to="tab1"> tab 1</Link>
        </li>
        <li>
          <Link to="tab2">tab 2</Link>
        </li>
      </ul>
      <Outlet />
    </div>
  );
};
