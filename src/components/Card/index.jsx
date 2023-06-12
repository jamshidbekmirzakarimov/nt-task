import React, { useState, useEffect } from "react";

const Card = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch("https://6422662d001cb9fc202622b2.mockapi.io/students/develop")
      .then(response => response.json())
      .then(data => setData(data))
    .catch(err => console.error(err))
  }, []);
  return (
    <>
      <div className="container">
        <div>
          {data.map(item => (
            <p>{ item.title}</p>
          ))}
        </div>
      </div>
    </>
  );
};

export default Card;
