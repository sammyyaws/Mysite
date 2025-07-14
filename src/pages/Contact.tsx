import { ContactCard, ContactCont, Contactbutton} from "../styles/ContactClass"
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

function Contact() {
   useEffect(()=>{
  AOS.init({
    duration:1000,
    once:true,
    easing:"easing-in-out"
  });
   },[])
  
  return (
    <div data-aos="zoom-in" className={ContactCont}>
     
        <div data-aos="fade-up-right" className={ContactCard}>
        <div data-aos="fade-up-left" className={Contactbutton}><a href="tel:+233257284846">Call Me</a></div>
         <div data-aos="fade-up-right" className={Contactbutton}><a href="mailto:sammyyawsnana1@gmail.com"> Email Me</a></div>
          <div data-aos="fade-up-left" className={Contactbutton}><a href="https://wa.me/233257284846">Whatsapp Me</a></div>

        </div>

</div>
  )
}

export default Contact