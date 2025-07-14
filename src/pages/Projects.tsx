import { projectsCont, SliderContainer } from "../styles/ProjectClass"
import ProjectCard from "../components/ProjectCard"
import { Swiper,SwiperSlide } from "swiper/react"
import 'swiper/swiper-bundle.css'
import { Pagination,Autoplay, Mousewheel, Keyboard } from "swiper/modules"
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect,  } from "react"

function Projects() {
 useEffect(()=>{
AOS.init({
  duration:1000,
  once:true,
  easing:"easing-in-out"
});
 },[])



  return (
    <div  className={projectsCont}>
      
{/*       projects in progress session*/}  
      <div data-aos="fade-up-right">Projects In Progress</div>
<div data-aos="fade-up-left"className={SliderContainer}>
{/*   swiper slide*/} 
 <Swiper modules={[Autoplay,Mousewheel,Pagination,Keyboard]}
 loop={true}
mousewheel
pagination
keyboard
 autoplay={{
  delay:5500,
   disableOnInteraction:false
 }}
  spaceBetween={20}  slidesPerView={1}
 >
    {/*  slide content */}
   
   <SwiperSlide><ProjectCard ProTitle="BackTrace" image="assets/back.png" 
   Description="An all in one charting web app,
    being developed with lightweight charts, react js and tailwind for frontend, 
   And Django for the backend"/></SwiperSlide>
<SwiperSlide><ProjectCard ProTitle="Vididy " image="assets/vididy.svg" 
   Description="An outstanding youtube video downloader web app,
    being developed  with react js and tailwind for frontend, 
   And Django for the backend, Inspired by the stress i go in to download courses from youtube to my device storage"/></SwiperSlide>
    


  </Swiper>
  
      </div>
 
 {/*       projects in progress session*/}  
        <div data-aos="fade-up-right">Completed Projects </div>

<div data-aos="fade-up-left"className={SliderContainer}>
{/*   swiper slide*/} 
 <Swiper modules={[Autoplay,Mousewheel,Pagination,Keyboard]}
 loop={true}
mousewheel
pagination
keyboard
 autoplay={{
  delay:5500,
   disableOnInteraction:true
 }}
  spaceBetween={20}  slidesPerView={1}
 >
    {/*  slide content */}
   
   <SwiperSlide><ProjectCard ProTitle="Not Completed" image="" 
   Description="All completed projects will be shown here, This is just the beginning of the journey"/></SwiperSlide>

   <SwiperSlide><ProjectCard ProTitle="Not Completed" image="" 
   Description="All completed projects will be shown here, This is just the beginning of the journey"/></SwiperSlide>
<SwiperSlide><ProjectCard ProTitle="Not Completed" image="" 
   Description="All completed projects will be shown here, This is just the beginning of the journey"/></SwiperSlide>



  </Swiper>
  
      </div>
    
    </div>
  )
}

export default Projects