import React from 'react';
import './Carousel';
import Carouselportfolio from './Carousel';


function Portfolio() {

  


  return (
    <section id="portfolio" className="bg-white mt-0" >
     

      <div className='container jumbotron bg-white'>
         <h2 className='text-center'>Recent Projects</h2>

        <Carouselportfolio/>
        

      </div>
      
    </section>
  );
}

export default Portfolio;
