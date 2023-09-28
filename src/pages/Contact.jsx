import React from "react";
import { useNavigate, Link, Outlet } from "react-router-dom";

export const Contact = () => {
  const navigate = useNavigate();

  const click = () => {
    navigate(-2);
  };

  return (
    <div>
      <button onClick={click}>back</button>
      <ul>
        <li>
          <Link to="self-contact">self contact</Link>
        </li>
        <li>
          <Link to="company-contact">company contact</Link>
        </li>
      </ul>
      <Outlet/>
    </div>
  );
};
