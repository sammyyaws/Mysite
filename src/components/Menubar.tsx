import { MenuCont,ul,li } from "../styles/MenubarClassr"
import { useMenu } from "../contexts/MenuContext"
import clsx from "clsx";
import { Link } from "react-router-dom";

function Menubar() {
  const {menuOpen}=useMenu();
  return (
    <div className={clsx(MenuCont, menuOpen?"-left-[100dvw]":"left-[4dvw]")}>
        <ul className={ul}>
          <li className={li} >
           <Link to="/"> HOME</Link>   
               </li>
        
            <li className={li}>
             <Link to="/About">ABOUT </Link>    
             </li>
        
            <li className={li}>
             <Link to="/Projects">PROJECTS </Link>
        
            </li>
            <li className={li}>
           <Link to="/Contact_me">CONTACT </Link>
              
              </li>
        </ul>

    </div>
  )
}

export default Menubar