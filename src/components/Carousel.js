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
        <ExampleCarouselImage src="/slide1.png" alt="First slide" />
        <Carousel.Caption>
          <h3><a href="slide1.com">slide1</a></h3>
         
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
        <ExampleCarouselImage src="./images/slide2.jpg" alt="Second slide" />
        <Carousel.Caption>
          <h3><a href="slide2.com">slide2</a></h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
        <ExampleCarouselImage src="/images/slide3.jpg" alt="Third slide" />
        <Carousel.Caption>
          <h3><a href="slide3.com">slide3</a></h3>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default Carouselportfolio;
