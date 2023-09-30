import React, { useEffect, useState } from "react";

export const ApiCalls = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/todos")
      .then((res) => res.json())
      .then((json) => {
        setData(json);
      })
      .catch(() => {
        alert("something went wrong");
      });
  }, []);
  console.log(data);

  return (
    <div>
      <h1>todos data</h1>
      {data.map((value) => {
        return <p key={value.id}>{value.title}</p>;
      })}
    </div>
  );
};
