import clsx from "clsx";
export const AboutContanier=clsx(
"flex",
"flex-col",
"w-full",
"overflow-y-scroll",
"min-h-screen",
"bg-gradient-to-b",
"from-myDark-900","items-center",
"to-mygreen-100",



);

export const AboutText=clsx(
    "flex",
    "md:w-[40%]",
    "items-center",
  
   
"text-white",
"border-1",
"border-mygreen-400",
"mx-4",
"my-7",
"md:my-12",
"p-4"


)

export const Aboutskill=clsx(
     "h-fit",
    "text-white",
   "grid",
   "sm:grid-cols-2",
   "gap-3",
    "w-[100dvh]",
    "p-1",
    "md:p-4",
    "place-content-center"
    
   
   
 
)

export const ProgSkillsCont=clsx(
    "flex",
    "m-2"
   
    
    
    
    
)
export const ProgImageCont=clsx(
"flex",
"bg-mygreen-400/20",
"backdrop-blur-xl",
"m-2",
 "border-l-3",
 "border-mygreen-400",
  "p-1"
)
export const Progimage=clsx(
"max-w-13",
"min-h-15",
"md:max-w-18",
"md:max-h-20",

)
export const Progress=clsx(
    "flex",
    "flex-col"
)
export const progSkillTitle=clsx(
"text-white",
"font-serif",
"font-bold",
"text-lg",
"md:text-xl",
"p-2",
"bg-mygreen-100",
"rounded-md"
)