import { useEffect,  } from "react"
import { LsessionClass1, lsessionDiv, lsessionDiv1, } from "../styles/LsessionClass"
import { Lsessionspan1,Lsessionspan2, Lsessionspan3,div1Text } from "../styles/Lsessionspan"
import { useTypewriter,Cursor } from "react-simple-typewriter"
import AOS from "aos";
import "aos/dist/aos.css";


function LandingSession() {
    const [text1]=useTypewriter({
        words:["DEVELOPER","FOREX TRADER"],
        loop:true,
    })

    /**typing the css style */
    

 useEffect(()=>{
AOS.init({
  duration:1000,
  once:true,
  easing:"easing-in-out"
});
 },[])
 



  return (
    <div className={LsessionClass1}>
      {/**Division1 */}
      <div data-aos="fade-up-right" className={lsessionDiv}>
       <div>
       <span className={Lsessionspan1} >HEY I'M </span> 
        <span className={Lsessionspan2} >SAMUEL YAWSON</span> 
       </div>
         <div>
       <span className={Lsessionspan1} > I'M  A </span> 
        <span className={Lsessionspan3} >{text1}</span> 
       </div>
       <div className={div1Text}>
        <span>
        Problem solving,buidling  and learning geared towards changing lives is the only way 
        to keep the soul and mind alive and active.
        </span>
       </div>
       </div>
    {/**Division2 */}
      <div>
        

      </div>
    </div>
  )
}

export default LandingSession