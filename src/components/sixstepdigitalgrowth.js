import React from "react";
import './timeline'
import MyTimeline from "./timeline";

function Sixstepdigitalgrowth(props){

  


    return (

        <section className="bg-primary-subtle border" {...props}>
            <div className="container jumbotron bg-primary-subtle pb-4">

                  <h2 className="text-center">your quick 6 step to digital growth</h2>
                    <p>supercharge your online growth with our proven process. as a trusted website development company, we guide your brand through every phase of business success.</p>
                    <MyTimeline/>
            </div>
          
        </section>


    );
}

export default Sixstepdigitalgrowth;