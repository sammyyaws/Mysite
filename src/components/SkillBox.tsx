import { skillBox } from "../styles/SkillsClass"
import type { skillsBoxProps } from "../types/skillboxProps"
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";


function SkillBox({children}:skillsBoxProps) {
 
 
  useEffect(()=>{
  AOS.init({
    duration:1000,
    once:true,
    easing:"easing-in-out"
  });
   },[])
   
  
  
  return (
    <div data-aos="fade-up-right" className={skillBox} >
   {children}

    </div>
  )
}

export default SkillBox