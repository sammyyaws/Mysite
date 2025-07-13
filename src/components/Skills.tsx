import { skillsContainer,skillTitle, BoxContainer,aboutme} from "../styles/SkillsClass"
import SkillBox from "./SkillBox"

function Skills() {
  return (
    <>
       
    <div className={skillsContainer}>
 <div className={skillTitle}><span>SKILLS</span></div>

<div className={BoxContainer}>
  {/**icon 1 */}
<SkillBox>
  <div className="flex " >
<img src="./assets/react.svg"/>
</div>
</SkillBox>
{/**icon 2*/}

<SkillBox>
  <div className="flex ">
    <img src="./assets/tailwind.svg"/>
  </div>
</SkillBox>

{/**icon 3 */}
<SkillBox>
  <div className="flex ">
    <img  src="./assets/html.svg"/>
  </div>
</SkillBox>

{/**icon 4 */}
<SkillBox>
  <div className="flex ">
    <img src="./assets/css.svg"/>
  </div>
</SkillBox>

{/**icon 5 */}
<SkillBox>
  <div className="flex ">
    <img src="./assets/c.svg"/>
  </div>
</SkillBox>
{/**icon 6*/}
<SkillBox>
  <div className="flex ">
    <img src="./assets/python.svg"/>
  </div>
</SkillBox>

{/**icon 7*/}
<SkillBox>
  <div className="flex  ">
    <img src="./assets/sql.svg"/>
  </div>
</SkillBox>
{/**icon 8*/}
<SkillBox>
  <div className="flex  ">
    <img src="./assets/cctv.svg"/>
  </div>
</SkillBox>

</div>

<div className={aboutme}>ABOUT ME</div>
    </div>
    </>
  )
  
}

export default Skills