import { NavbarClass } from "../styles/NavbarClass"
import { Navitems } from "../styles/Navitems"
import { Navul } from "../styles/Navul"
function Navbar() {
  return (
    <nav className={NavbarClass}>
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