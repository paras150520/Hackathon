import React from "react";

function Card({image,tittle,description}) {
  return (
    <>
      <div className="card bg-base-100 w-96 shadow-sm">
        <figure className="px-10 pt-10">
          <img
            src={image}
            alt="Shoes"
            className="rounded-xl"
          />
        </figure>
        <div className="card-body items-center text-center">
          <h2 className="card-title">{tittle}</h2>
          <p>{description}</p>
          <div className="card-actions">
            <button className="btn btn-primary">Explore</button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Card;
