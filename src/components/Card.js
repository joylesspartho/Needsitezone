import React from 'react';
import './card.css';

function Card({ image, title, description }) {
  return (
    <div className="card custom-card shadow-sm border-0 overflow-hidden">
      <div className="card-img-wrapper">
        <img
          src={image}
          className="card-img-top"
          style={{ height: "400px" }}
          alt={title}
        />
        <div className="overlay">
          <h5 className="card-title">{title}</h5>
          <p className="card-text">{description}</p>
        </div>
      </div>
    </div>
  );
}

export default Card;
