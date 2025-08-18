import React from "react";
import Carousel from "react-bootstrap/Carousel";
import "./Carousel.css";  // external css import

function ExampleCarouselImage({ src, alt }) {
  return (
    <img
      className="d-block w-100 carousel-image"
      src={src}
      alt={alt}
    />
  );
}

function Carouselportfolio() {
  return (
    <Carousel>
      <Carousel.Item>
        <a href="https://measabgroup.com/">

         <ExampleCarouselImage src="/businesssite.png" alt="business site" />

        </a>
       
        <Carousel.Caption>
          <h3><a href="https://measabgroup.com/">Business Website</a></h3>
         
        </Carousel.Caption>
      </Carousel.Item>

       <Carousel.Item>
        <a href="https://daarbd.com/">

            <ExampleCarouselImage src="/realestate.png" alt="real estate" />

        </a>
      
        <Carousel.Caption>
          <h3><a href="https://daarbd.com/">Daar Real Estate</a></h3>
         
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
        <a href="https://measabacademy.org/">

            <ExampleCarouselImage src="/academy.png" alt="academy site" />

        </a>
      
        <Carousel.Caption>
          <h3><a href="https://measabacademy.org/">Academy Website</a></h3>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default Carouselportfolio;
