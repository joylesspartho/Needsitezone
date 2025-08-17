import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../App.css';

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-secondary sticky-top border-bottom ">
      <div className='container'>
        <a className="navbar-brand text-secondary d-flex align-items-center text-light" href="/">
          <img 
            src="/logo.png" 
            alt="NeedSite Logo" 
            style={{ height: '40px', marginRight: '10px' }} 
          />
          NeedSite <span className='baby-green'>Zone</span>
        </a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ml-auto ">
             <li className="nav-item "><a className="nav-link text-light" href="/">Home</a></li>
            <li className="nav-item"><a className="text-light nav-link" href="#services">Services</a></li>
            <li className="nav-item"><a className="text-light nav-link" href="#portfolio">Portfolio</a></li>
            <li className="nav-item"><a className="text-light nav-link" href="#contact">Contact</a></li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
