import { useEffect } from "react";
import { NavbarClass } from "../styles/NavbarClass"
import { Navitems } from "../styles/Navitems"
import { Navul } from "../styles/Navul"
import AOS from "aos";
import "aos/dist/aos.css";
function Navbar() {

useEffect(()=>{

  AOS.init(
    {
      duration:1000,
      once:true,
      easing:"ease-in-out",
    }
  )
}
  ,[]
)




  return (
    <nav data-aos="flip-right" className={NavbarClass}>
  <ul className={Navul}>
    <li className={Navitems} >HOME</li>
    <li className={Navitems}>ABOUT</li>
    <li className={Navitems}>PROJECT</li>
    <li className={Navitems}>CONTACT ME</li>
  
    </ul>
    </nav>
  )
}

export default Navbar