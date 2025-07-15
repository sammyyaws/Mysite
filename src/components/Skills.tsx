import { skillsContainer,skillTitle, BoxContainer,aboutme} from "../styles/SkillsClass"
import SkillBox from "./SkillBox"
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";


function Skills() {

 useEffect(()=>{
AOS.init({
  duration:1000,
  once:true,
  easing:"easing-in-out"
});
 },[])


  return (
    <>
       
    <div className={skillsContainer}>
 <div data-aos="zoom-in" className={skillTitle}><span>SKILLS</span></div>

<div className={BoxContainer}>
  {/**icon 1 */}
<SkillBox >
  <div className="flex " >
<img src={`${import.meta.env.BASE_URL}assets/react.svg`}/>
</div>
</SkillBox>
{/**icon 2*/}

<SkillBox>
  <div className="flex ">
    <img src={`${import.meta.env.BASE_URL}assets/tailwind.svg`}/>
  </div>
</SkillBox>

{/**icon 3 */}
<SkillBox>
  <div className="flex ">
    <img  src={`${import.meta.env.BASE_URL}assets/html.svg`}/>
  </div>
</SkillBox>

{/**icon 4 */}
<SkillBox>
  <div className="flex ">
    <img src={`${import.meta.env.BASE_URL}assets/css.svg`}/>
  </div>
</SkillBox>

{/**icon 5 */}
<SkillBox>
  <div className="flex ">
    <img src={`${import.meta.env.BASE_URL}assets/c.svg`}/>
  </div>
</SkillBox>
{/**icon 6*/}
<SkillBox>
  <div className="flex ">
    <img src={`${import.meta.env.BASE_URL}assets/python.svg`}/>
  </div>
</SkillBox>

{/**icon 7*/}
<SkillBox>
  <div className="flex  ">
    <img src={`${import.meta.env.BASE_URL}assets/sql.svg`}/>
  </div>
</SkillBox>
{/**icon 8*/}
<SkillBox>
  <div className="flex  ">
    <img src={`${import.meta.env.BASE_URL}assets/git.svg`}/>
  </div>
</SkillBox>
{/**icon 9*/}


</div>

<div data-aos="fade-up-left" className={aboutme}>
   <a href={`${import.meta.env.BASE_URL}assets/mycv.pdf`} download="Adade_Samuel_Yawson_CV">DOWNLOAD CV</a>
             </div>
    </div>
    </>
  )
  
}

export default Skills