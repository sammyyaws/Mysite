import { MenuCont,ul,li } from "../styles/MenubarClassr"
import { useMenu } from "../contexts/MenuContext"
import clsx from "clsx";


function Menubar() {
  const {menuOpen}=useMenu();
  return (
    <div className={clsx(MenuCont, menuOpen?"-left-[100dvw]":"left-[4dvw]")}>
        <ul className={ul}>
            <li className={li}>HOME</li>
             <li className={li}>ABOUT</li>
             <li className={li}>PROJECT</li>
              <li className={li}>CONTACT</li>
        </ul>

    </div>
  )
}

export default Menubar