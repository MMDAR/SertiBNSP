import React from "react";

const PortfolioItem = ({ title, description, imgSrc }) => {
  return (
    <div className="card">
      <img src={imgSrc} className="card-img-top" alt={title} />
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <p className="card-text">{description}</p>
      </div>
    </div>
  );
};

export default PortfolioItem;
