import { useEffect } from "react";
import { NavbarClass } from "../styles/NavbarClass"
import { Navitems ,Breadcrump} from "../styles/Navitems"
import { Navul } from "../styles/Navul"
import { FaBarsStaggered } from "react-icons/fa6";
import AOS from "aos";
import "aos/dist/aos.css";
import { useMenu } from "../contexts/MenuContext";
import { Link } from "react-router-dom";



function Navbar() {
const {toggleMenu}=useMenu();
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
    <li className={Navitems} >
   <Link to="/"> HOME</Link>   
       </li>

    <li className={Navitems}>
     <Link to="/About">ABOUT </Link>    
     </li>

    <li className={Navitems}>
     <Link to="/Projects">PROJECTS </Link>

    </li>
    <li className={Navitems}>
   <Link to="/Contact_me">CONTACT </Link>
      
      </li>
  
    </ul>
    <span onClick={toggleMenu} className={Breadcrump}><FaBarsStaggered/></span>
    </nav>
  )
}

export default Navbar