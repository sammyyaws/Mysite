import Navbar from "./components/Navbar"
import Home from "./pages/Home"
import About from "./pages/About"
import Footer from "./components/Footer"
import Projects from "./pages/Projects"
import Contact from "./pages/Contact"
import Menubar from "./components/Menubar"
import { MenuProvider } from "./contexts/MenuContext"
import { Routes,Route } from "react-router-dom"

function App() {


  return (
    <>
    <MenuProvider>
  <Menubar/>
    <Navbar/>
    </MenuProvider>
  
   <Routes>
    <Route path="/" element={  <Home/>}/>
    <Route path="/About" element={    <About/>}/>
    <Route path="/Contact_me" element={     <Contact/> }/>
  <Route path="/Projects" element={     <Projects/> }/>
 
   </Routes>
  
   
   
    
    
 <Footer></Footer>
    </>
  )
}

export default App
