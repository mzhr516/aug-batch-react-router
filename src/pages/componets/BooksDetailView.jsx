import React from "react";
import { useParams } from "react-router-dom";
import { booksDetails } from "../../constnt";

export const BooksDetailView = () => {
  const { ind } = useParams();
  const book = booksDetails[ind];

  return (
    <div>
      <h1>Title: {book.title}</h1>
      <h3>Author: {book.author}</h3>
      <p>Number of Pages: {book.pages}</p>
      <a href={book.link} target="__blank">
        {" "}
        view more
      </a>
    </div>
  );
};
