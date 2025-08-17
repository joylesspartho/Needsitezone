import React from 'react';
import { Player } from '@lottiefiles/react-lottie-player';
import './Hero.css';
import './Button.css'
import MaintenanceAnimation from './Maintenance-web.json'; // Lottie JSON in same folder


function Hero(props) {
  return (
    <section className="hero-section text-white" {...props}>
      {/* Background animated dots */}
      <div className="animated-bg"></div>

      <div className="container py-5">
        <div className="row align-items-center">
          
          {/* Left Column: Text + Button */}
          <div className="col-md-6 text-center text-md-left mb-4 mb-md-0">
            <h1 className="display-4 font-weight-bold">We Build Beautiful Websites</h1>
            <p className="lead">Designed with care for startups, schools, and local businesses</p>
           

        <div className='pt-3'>
             <a href="#contact" className="button">
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                Invoke
              </a>


        </div>
         





          </div>

          {/* Right Column: Lottie Animation */}
          <div className="col-md-6">
            <Player className='lottieimg'
              autoplay
              loop
              src={MaintenanceAnimation}
             
            />
          </div>

        </div>
      </div>
    </section>
  );
}

export default Hero;
