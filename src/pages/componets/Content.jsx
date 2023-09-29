import React from "react";
import { carDetails } from "../../constnt";
import { Link } from "react-router-dom";

export const Content = () => {

    //car-detail/civic
  return (
    <div>
      <ul>
        {carDetails.map((car,index) => {
          return (
            <li>
              <Link to={`/car-detail/${index}`}>{car.model}</Link>{" "}
            </li>
          );
        })}
      </ul>
    </div>
  );
};
