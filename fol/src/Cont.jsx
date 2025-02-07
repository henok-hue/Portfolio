import React from "react";
import { useState , useEffect } from "react";
import { Link, NavLink } from "react-router-dom";
import ra from './assets/icons8-facebook-logo-50.png'
import Gra from './assets/icons8-linkedin-50.png'
import Ga from './assets/icons8-github-24.png'
import Ar from './assets/icons8-arrow-50.png'
import Td from './assets/3d-render-software-testing-concept-with-computer.png'

import './Cont.css'

function Cont() {
     const [sticky , setSticky] = useState(false);
      useEffect(() => {
       window.addEventListener('scroll', ()=>{window.scrollY > 50 ? setSticky(true) : setSticky(false);
    
       })
    
      },[])
return (
<>
<body>

   


<div className="ho">
<a className="rese" href="https://web.facebook.com/henok.mohammed.549"><img className="look"    src= {ra} /><h20 className='po'>https://web.facebook.com/henok.mohammed.549</h20></a>
<a className="shoul" href="https://www.linkedin.com/in/henok-mohammed-9ab291314/"><img className="look"  src= {Gra} /><h20 className='po'>https://www.linkedin.com/in/henok-mohammed-9ab291314/</h20></a>
<a className="w" href="https://github.com/henok-hue"><img  className="look" src= {Ga} /><h20 className='po'>https://github.com/henok-hue</h20></a>
</div></body></>
)}
export default Cont