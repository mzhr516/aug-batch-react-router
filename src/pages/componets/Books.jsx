import React from "react";
import { booksDetails } from "../../constnt";
import { useNavigate } from "react-router-dom";

export const Books = () => {
  const navigate = useNavigate();
  const click = (index) => {
    navigate(`/bookDetail/${index}`);
  };
  return (
    <div>
      <h1>Books view</h1>

      {booksDetails.map((book, index) => {
        return <p onClick={() => click(index)}>{book.title}</p>;
      })}
    </div>
  );
};
