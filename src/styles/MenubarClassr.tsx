import clsx from "clsx";

export const MenuCont=clsx(
      "flex",
        "flex-col",
    "place-items-center",
    "md:w-[100dvh]",
    "w-[35dvh]",
    "h-[45dvh]",
    
   
    "rounded-md",
    "shadow-sm",
    "bg-mygreen-100/60",
    "backdrop-blur-lg",
    "pt-4",
    "text-white",
    'font-bold',
    "font-serif",
    "fixed",
    "z-90",
    "top-[12dvh]",
    "transition-all",
    "duration-400",
    "md:hidden"
   
    
)

export const ul=clsx(
  "my-4",
  "w-45",
  "flex",
  "flex-col",
  "gap-2",
 
)
export const li=clsx(
  "flex",
  "text-lg",
  "border-b-1",
  "w-full",
  "mx-auto",
  "px-[7dvh]",
  "hover:border-mygreen-400",
  "hover:border-b-2"
)