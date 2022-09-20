import React from "react";
import { useState } from "react";

const Tour = ({ id, image, info, name, price, removeTour }) => {
  const [readMore, setReadMore] = useState(true);
  return (
    <>
      <article id={id} className="app-container">
        <img className="image" src={image} alt="image" />
        <div className="container-div">
          <div className="first__controll">
            <h2 className="titel">{name}</h2>
            <p className="price"> $ {price}</p>
          </div>

          <p>
            {readMore === false ? info : `${info.substring(0, 250)}...`}
            <button
              className="read__more"
              onClick={() => {
                setReadMore(!readMore);
              }}
            >
              {!readMore ? "Show less" : "Read More"}
            </button>
          </p>
        </div>

        <button
          type="button"
          className="btn"
          onClick={() => {
            removeTour(id);
          }}
        >
          Not interested
        </button>
      </article>
    </>
  );
};

export default Tour;
