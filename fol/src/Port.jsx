import React from "react";
import { useState , useEffect } from "react";
import { Link, NavLink } from "react-router-dom";
import ra from './assets/icons8-facebook-logo-50.png'
import Gra from './assets/icons8-instagram-50.png'
import Ga from './assets/icons8-linkedin-50.png'
import Ar from './assets/icons8-arrow-50.png'
import Td from './assets/3d-render-software-testing-concept-with-computer.png'
import Cont from "./Cont";
import Proj from "./Proj";

function Port() {
     const [sticky , setSticky] = useState(false);
      useEffect(() => {
       window.addEventListener('scroll', ()=>{window.scrollY > 50 ? setSticky(true) : setSticky(false);
    
       })
    
      },[])
      
return (
<>
<body>
<div className= {`av ${sticky? 'avdark' : ''}`}>
    <div className="rf"> <h7 className='g'>LOGO </h7>
 
   <a className="m" href="#Home" >Home</a>
<a className='abc' href="#project">Projects
</a>
 <a className="be" href="#Con">Contacts</a>
 <div className="so">

<Link to='/Cont' className="l">Lets Connect</Link></div>
</div>
 </div>
 <div className="yu"><div>
 <div className="hea">
   
    <header>Welcome To My Portfolio</header>
     
    </div>  <h1>I'M Henok</h1>
       <h2>I Have Been Learning Front-End Development For The Past Year.
       I'm Well Exprienced In React.JS. And I Can Help You Design A Unique And Well Funtioning Website</h2>
          <Link to='/Cont'><h3>Let's Connect <img className="rr" src={Ar} /></h3></Link>
    </div><img className="co" src={Td} />

    </div>
 <div className="per">
 <div>
   <h5 className="cen">97%</h5>
   <h6 className="ui">React</h6>
 </div>
 <div>
   <h5 className="cen" >99%</h5>
   <h6 className="ui" >Java</h6>
 </div>
 <div>
   <h5  className="cen">99%</h5>
   <h6  className="ui">CSS</h6>
 </div>
 
 </div>
<Proj />
 </body>
</>
)
};
export default Port
