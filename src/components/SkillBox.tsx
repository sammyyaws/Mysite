import { skillBox } from "../styles/SkillsClass"
import type { skillsBoxProps } from "../types/skillboxProps"

function SkillBox({children}:skillsBoxProps) {
  return (
    <div className={skillBox} >
   {children}

    </div>
  )
}

export default SkillBox