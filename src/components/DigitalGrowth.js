import React from "react";
import Card2 from "./Card2";

function DigitalGrowth(props){
    return (

        <section className="bg-body-white" {...props}>


  <     div className="container jumbotron bg-white">
            <h2 className="text-center">Why trust our team to build the perfect website for your business?</h2>
            <p>Each of our websites is responsive modren. we don't cookies cutter tamplates. each of our sites has clearly distibguishing characteristics and attention to detail. in a nutshell, your website will be as unique as you are and it will be not overloded with hundreds of unnecessary features that you don't need</p>
       
          <div className="row">

            <div className="col-md-4 mb-4">

                <Card2

                title='Responsive, modern built for your business'
                description='Your business is unique, and your website should be too, we tailor every website to fit your brand, industry, and audience, just a perfect fit for your goals.'
                bgClass= 'gr-1'
                symbool='fas fa-desktop'

            />

              

            </div>


            <div className="col-md-4 mb-4">

              
             <Card2

                title='High performance, fast & secure'
                description='A slow or outdated websites can drive visitors away. we ensure your site is lightning-fast, fully optimized for SEO, and secure against cyber threats- so you stat ahaed of the competitention.'
                bgClass= 'gr-2'
                symbool='fas fa-rocket'



            />


            </div>
                


            <div className="col-md-4 mb-4">
                
               <Card2

                title='Afordable pricing, no hidden costs'
                description='Quality doesnt have to break the bank. we offer transparent pricing with no hidden fees, ensuruing you get an exceptional website at a price that works for you'
                bgClass= 'gr-3'
                symbool='fas fa-check-circle'



            />



            </div>

          </div>
       
       
        </div>






        </section>
      



    );
}
export default DigitalGrowth;