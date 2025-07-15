
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { AboutContanier,AboutText,Aboutskill,progSkillTitle } from "../styles/AboutClass"
import ProgSkills from "../components/ProgSkills"
function About() {
   useEffect(()=>{
  AOS.init({
    duration:1000,
    once:true,
    easing:"easing-in-out"
  });
   },[])
   
  
  
  return (






    <div className={AboutContanier} >

      <div data-aos="fade-up-right" className={AboutText} >
<div >
            
    Hi, I’m Samuel Yawson Adade — a computer engineering student with a growing passion for full-stack fintech development. I'm currently learning to build reliable, high-uptime applications for stock and forex platforms, with a strong interest in how real-time data and automation can improve trading experiences. While I’m still gaining hands-on skills in web technologies and financial systems, 
    I’m deeply committed to building fintech tools that are fast, stable, and impactful.
     Every project I take on brings me one step closer to that goal.    </div>

</div>
{/*       second dv*/}      
  <div data-aos="fade-up-right"className={progSkillTitle}>MY SKILLS</div>
 <div className={Aboutskill}>
 
<ProgSkills Progvalue={60} Max={100} Title="React" image={`${import.meta.env.BASE_URL}assets/react.svg`} />
<ProgSkills Progvalue={50} Max={100} Title="Tailwind" image={`${import.meta.env.BASE_URL}assets/tailwind.svg`} />
<ProgSkills Progvalue={40} Max={100} Title="Django" image={`${import.meta.env.BASE_URL}assets/django2.svg`} />
<ProgSkills Progvalue={35} Max={100} Title="C++" image={`${import.meta.env.BASE_URL}assets/c.svg`} />
<ProgSkills Progvalue={55} Max={100} Title="Python" image={`${import.meta.env.BASE_URL}assets/python.svg`} />
<ProgSkills Progvalue={40} Max={100} Title="SQL" image={`${import.meta.env.BASE_URL}assets/sql.svg`} />
<ProgSkills Progvalue={80} Max={100} Title="HTML" image={`${import.meta.env.BASE_URL}assets/html.svg`} />
<ProgSkills Progvalue={88} Max={100} Title="CSS" image={`${import.meta.env.BASE_URL}assets/css.svg`} />
<ProgSkills Progvalue={88} Max={100} Title="GIT" image={`${import.meta.env.BASE_URL}assets/git.svg`} />
<ProgSkills Progvalue={88} Max={100} Title="JAVASCRIPT" image={`${import.meta.env.BASE_URL}assets/js.svg`} />

      
  </div>

  {/*       other skills dv*/}      
  <div className={progSkillTitle}>OTHER SKILLS</div>
 <div className={Aboutskill}>
 
<ProgSkills Progvalue={60} Max={100} Title="CCTV Installation and maintenance" image={`${import.meta.env.BASE_URL}assets/cctv.svg`} />
<ProgSkills Progvalue={90} Max={100} Title="Problem Solving" image={`${import.meta.env.BASE_URL}assets/psolve.svg`} />
      
  </div>

    </div>
  )
}

export default About