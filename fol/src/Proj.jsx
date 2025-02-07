import React from "react";
import { useState , useEffect } from "react";
import ra from './assets/icons8-facebook-logo-50.png'
import Gra from './assets/icons8-instagram-50.png'
import Ga from './assets/icons8-linkedin-50.png'
import Ar from './assets/icons8-arrow-50.png'
import co from './assets/icons8-phone-50.png'
import { use, useRef } from 'react';
import screen from './assets/Screenshot_16-1-2025_7212_mellow-tartufo-5ec270.netlify.app.jpeg'
import Td from './assets/3d-render-software-testing-concept-with-computer.png'
import './proj.css'
function Proj() {
  const Slider = useRef();
  let tx = 0;
  const slideForward = ()=> {
if(tx > -100){
  tx -= 115;

}
Slider.current.style.transform = `translateX(${tx}%)`;

  }
  const slideBackward = ()=> {
    if(tx < 0){
      tx += 115;
    
    }
    Slider.current.style.transform = `translateX(${tx}%)`;
     
  }
  const [result, setResult] = React.useState("");
  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "447ed1dd-fbcc-4384-a5b3-6324711c53a1");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };
return (
<>
<section className="ibe" id="project">
<h8 className='ok'>Projects</h8>
<p className="ahh"><h9 className='here'>This Are Some Of My projects</h9><br />
<h10 className='we'> I Have Done This Year. Including A Realestate Booking Website
     <br /> </h10> </p>
   

 <div className="bn">
 <div className="when" ref={Slider}>
      <a href="https://mellow-tartufo-5ec270.netlify.app/" className="in"><div >  <h11 className='club'> Sweet Home </h11></div></a>
      <a href="https://chic-toffee-cc4874.netlify.app/" className="ik"> <div >  <h11 className='club'> H Quizes </h11></div></a>
      </div>
        
        </div>
        <img className="my" src={Ar} onClick={slideBackward}/> 
        <img className="hair"  src={Ar} onClick={slideForward}/>
</section>
  <form onSubmit={onSubmit}>
    <section className="house" id="Con">
<h15 className='buppin'>Contact</h15>
<div className="party">
 
</div>
<div className="girl">
  <img src={co}  className="back"/>
  <ul>
  <input type='name' name="name"  className="ts"placeholder="Name" /></ul>
  <ul>
<input type='email' name="email" className="ts" placeholder="Email"/></ul>

</div><textarea name='message'className="push" placeholder="Message"/>
 <button className="little" type='submit'>Send</button>
    </section>
 <span>{result}</span>
   </form>
       
       </>
       
       

       

)
};
export default Proj