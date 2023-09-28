import React from "react";
import { useNavigate, Link, Outlet } from "react-router-dom";

export const Services = () => {
  const nav = useNavigate();
  const click = () => {
    nav("/");
  };
  return (
    <div>
      <h1>Services</h1>
      <ul>
        <li>
          <Link to="car">car service</Link>
        </li>
        <li>
          <Link to="bike">bike service</Link>
        </li>
      </ul>
      <Outlet />
      <button onClick={click}>go to home</button>
    </div>
  );
};
