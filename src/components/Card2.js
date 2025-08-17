import React from "react";
import './card2.css';

function Card2({ title, description, bgClass,symbool }) {
  return (
    <div className="container">
      <div className="row">
        <div className="col column">
          <div className={`card ${bgClass}`}>
            <div className="txt">
              <h1 className="card-title">{title}</h1>
              <p className="card-text">{description}</p>
            </div>
            <div className="ico-card">
              <i className={symbool}></i>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card2;
