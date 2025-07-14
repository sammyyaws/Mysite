import { useContext,createContext, useState, type ReactNode } from "react";
import type{ MenuContextType } from "../types/MenuContext";


const MenuContext=createContext<MenuContextType | undefined>(undefined);

export const MenuProvider=({children}:{children:ReactNode})=>{
 const [menuOpen,setmenuOpen]=useState(true);
 const toggleMenu=()=>setmenuOpen(prevState=>!prevState);


    return(
        
        <MenuContext.Provider value={{ menuOpen, toggleMenu }}>
    {children}
  </MenuContext.Provider>

    );
}

export const useMenu=()=>{
  const context=useContext(MenuContext);

if (!context){
  throw new Error("useMenu must be in a context provider")
}
return context;
}