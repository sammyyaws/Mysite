import { LsessionClass } from "../styles/LsessionClass"
import { Lsessionspan } from "../styles/Lsessionspan"
import { useTypewriter,Cursor } from "react-simple-typewriter"
function LandingSession() {
    const [text]=useTypewriter({
        words:["DEVELOPER","FOREX TRADER"],
        loop:true,
    })
  return (
    <div className={LsessionClass}>
       <div>
       <span className={Lsessionspan} >HI I'M </span> 
        <span className={Lsessionspan} >{text}</span> 
       </div>
    </div>
  )
}

export default LandingSession