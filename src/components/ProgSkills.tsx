import { ProgImageCont,ProgSkillsCont,Progress,Progimage} from "../styles/AboutClass"
import type { skillProgsProps } from "../types/skillProg"
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
function ProgSkills({image,Title,Progvalue,Max}:skillProgsProps) {
 useEffect(()=>{
  AOS.init({
    duration:1000,
    once:true,
    easing:"easing-in-out"
  });
   },[])




  return (


    <div  className={ProgSkillsCont}>
        <div data-aos="fade-up-right"className={ProgImageCont}>
       <img src={image} className={Progimage}/>
      </div>
           <div data-aos="fade-up-left" className={Progress}>
      <label>{Title} </label>
      <progress max={Max} value={Progvalue}/>
        </div>

    </div>
  )
}

export default ProgSkills