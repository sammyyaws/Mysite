import Navbar from "./components/Navbar"
import Home from "./pages/Home"
import About from "./pages/About"
import Footer from "./components/Footer"
import Projects from "./pages/Projects"
import Contact from "./pages/Contact"
import Menubar from "./components/Menubar"
import { MenuProvider } from "./contexts/MenuContext"
function App() {


  return (
    <>
    <MenuProvider>
  <Menubar/>
    <Navbar/>
    </MenuProvider>
   
   {/*  <About/> */}
    <Home/> 
  {/*   <Contact/ >  */}
  {/*    <Projects/>
     */}
 <Footer></Footer>
    </>
  )
}

export default App
