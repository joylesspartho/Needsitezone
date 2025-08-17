import React from "react";
import Card3 from "./Card3.js";

function Services(props) {
 

  return (
    <section id="services"  className="jumbotron" {...props}>
      <div className="container" >
        <h2 className="text-center mb-4">Digital Experiences That Connect, Inspire, and Deliver Results</h2>
        <p className="text-justify mb-5">
          We craft digital solutions designed to empower your brand, energize your audience, and drive measurable success.
          Lay the groundwork for lasting growth with our cutting-edge digital services.
        </p>
        <div className="row">
          <div className="col-md">
            <Card3 
              bg="grc-1"
              title="Business Website"
              badge="Clean. Responsive. Built for Growth."
              description="We create sleek, high-performing websites tailored for small businesses that want to make a big impact. Whether you’re just starting out or scaling up, our business websites are designed to reflect your brand, engage your audience, and support your goals."
              symbool="fas fa-briefcase"
            />
          </div>
          <div className="col-md" >
            <Card3 
              bg="grc-2"
              title="School Website"
              badge="Clean. Responsive. Built for Education."
              description="We design and develop custom websites for schools, colleges, and educational institutions that are easy to navigate, informative, and visually engaging. Our school websites are built to support communication, showcase achievements, and keep students and parents informed — all in one place."
              symbool="fas fa-graduation-cap"
            />
          </div>
          <div className="col-md" >
            <Card3 
              bg="grc-3"
              title="Website Maintenance"
              badge="Relable. Security. Up-to-Date"
              description="A great website doesn’t end at launch — it needs regular care to keep running smoothly. Our website maintenance service ensures your site stays secure, fast, and fully functional at all times. We take care of the technical side so you can focus on growing your business."
              symbool="fas fa-wrench"
            />
          </div>

         
        </div>
        <div className="row">

            <div className="col-md" >
            <Card3 
              bg="grc-4"
              title="E-Commerce Website Development"
              badge="Sell Smarter. Grow Faster."
              description="Launch a powerful online store that not only looks great but drives real sales. We build custom e-commerce websites that are secure, scalable, and designed to turn visitors into loyal customers."
              symbool="fas fa-shopping-cart"
            />
          </div>

        </div>
       
      </div>
    </section>
  );
}

export default Services;
