import React from "react";
import './Card3.css'

function Card3({ bg, title, badge, description, symbool }) {
  return (
    <div className={`card text-white ${bg} shadow-lg mb-4 card-custom`}>
      <div className="card-body card-body-custom">
        <h4 className="card-title d-flex align-items-center justify-content-between">
          {title}
          <span className="badge badge-secondary badge-custom">{badge}</span>
        </h4>
        <p className="card-text mt-3">{description}</p>
        <div className="icon-position">
          <i className={symbool}></i>
        </div>
      </div>
    </div>
  );
}

export default Card3;
