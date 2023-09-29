import React from "react";
import { useParams } from "react-router-dom";
import { carDetails } from "../../constnt";

export const CarDetail = () => {
  const { index } = useParams();
  const car = carDetails[index];
  console.log(car);
  return (
    <div>
      <h1>{car.model}</h1>
      <p>{car.make}</p>
      <p>{car.price}</p>
    </div>
  );
};
