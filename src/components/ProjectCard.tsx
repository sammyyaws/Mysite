import type { ProjectSlidesProps } from "../types/ProjectTypes"
import { imageCard,pDescription,Ptext,ptitle,slideContent  } from "../styles/ProjectClass"


function ProjectCard({image,ProTitle,Description}:ProjectSlidesProps) {
  return (
    <div className={slideContent} >

 <div >
  <img src={image} className={imageCard}/>
        </div>

    <div className={Ptext}>

      <div className={ptitle}>
{ProTitle}
      </div>


      <div className={pDescription}>
      {Description}
      </div>

    </div>
    </div>
  )
}

export default ProjectCard