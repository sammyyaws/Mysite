import clsx from "clsx";

export const skillsContainer= clsx(
    "w-full",
    "flex-col",
  "bg-myDark-400",
    "h-fit",
    "flex",
  "items-center",
 "justify-center",
  "p-3",
  "md:p-6"
 
)
export const skillTitle=clsx(
    "text-white",
    "text-xl",
    "md:text-2xl",
    "transistion",
    "delay-100",
    "ease-in-out",
    "flex",
   "items-center",
 "justify-center",
   "md:-mt-14",
    "-mt-8",
   "border-1",
   "border-white",
   "rounded-full",
    "w-[16dvh]",
    "h-[16dvh]",
    "font-bold",
    "font-serif",
     "bg-mygreen-100/25",
     "backdrop-blur-lg",
     "shadow-md",
     "hover:shadow-lg",
     "shadow-mygreen-100"

)

export const  BoxContainer=clsx(
"grid",
 "w-fit",
 "h-[70%]",
"items-center",
"justify-center",
"md:flex-row",
"flex-col",
 "my-3",
 "md:my-6",
 "p-10",
 "grid-cols-2",
 "md:grid-cols-4",
 "gap-5",


)
export const BoxWrapper=clsx(
  "flex",
  "flex-col",
  "place-content-center",
  "p-2",
  "md:p-4",
  "w-[22dvw]",
  "h-[22dvh]"
)

export const Progress=clsx(
"flex",

)

export const skillBox=clsx(
  "flex",
  "place-content-center",
    "p-2",
    "md:p-5",
    "shadow-md",
    "hover:shadow-lg",
    "transition",
    "delay-100",
    "h-[20dvh]",
    "w-[18dvh]",
    "flex",
    "text-white",
    "border-1",
    "rounded-md",
   "bg-mygreen-100/40",
    "backdrop-blur-lg",
    "shadow-md",
    "shadow-mygreen-100",
     
)

export const aboutme=clsx(
  "flex",
  "text-white",
  "rounded-xl",
  "p-3",
  "text-lg",
  "md:text-xl",
  "font-bold",
  "font-serif",
  "bg-mygreen-100",
  "shadow-sm",
  "hover:shadow-md",
  "shadow-gray-300"
)
