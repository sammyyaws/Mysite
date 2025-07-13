import { WhoDivClass,WhoSpan1 } from "../styles/WhoDivClass"
import { WhoSpan2 } from "../styles/WhoDivClass"
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

function WhoIMI() {

   useEffect(()=>{
  AOS.init({
    duration:1000,
    once:true,
    easing:"easing-in-out"
  });
   },[])
  return (
    <div className={WhoDivClass}>
        <div  data-aos="fade-up-right"> <span className={WhoSpan1}>WHO I AM</span></div>
    
        <div   data-aos="fade-up-left">
            <span className={WhoSpan2}>
     Hi, I’m Sammy Yaws — a  computer engineering student  and aspiring full-stack Fintech developer with a deep curiosity for how technology shapes the world.
     I thrive on learning new things, whether it's building web applications, exploring emerging technologies, or understanding how financial markets operate.
        </span>
        </div>
<div data-aos="fade-up-right">
                <span className={WhoSpan2}>
   Outside of writing code, I enjoy diving into finance and trading — analyzing charts, studying market movements, and connecting patterns between tech and money. Whether it’s mastering a new JavaScript framework or breaking down how blockchain impacts global finance, I’m always excited to learn and grow.

I'm not just building a career in tech — I'm building a mindset of continuous improvement, innovation, and impact.   </span>
        </div>
        
        
    </div>
  )
}

export default WhoIMI