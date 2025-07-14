import clsx from "clsx";


export const projectsCont=clsx(
   "p-3",
   "md:p-6",
    "flex",
    "flex-col",  
    "w-full",
    "gap-3",
    "min-h-screen",
    "items-center",
    "justify-center",
    "text-white",
    "mt-9",
    "md:mt-14",
    "bg-gradient-to-b",
    "from-myDark-900",
    "to-mygreen-100",
)
export const SliderContainer=clsx(
    "flex",
    "items-center",
    "justify-center",
    "md:w-[100dvh]",
    "w-[60dvh]",
    "h-fit",
    "p-2",
    "md:p-4",
    "rounded-md",
    "shadow-lg",
    "bg-mygreen-100/30",
    "backdrop-blur-lg"
   

)
export const slideContent=clsx(
"flex",
"flex-row",
"gap-3"
)


export const Ptext=clsx(
"flex",
 "flex-col",
 "my-13",
 "w-full",
 "md:w-[50dvh]"
)
export const ptitle=clsx(
    "flex",
    "text-mygreen-100",
    'text-md',
    "mx-auto",
    "font-bold",
    "font-serif"
)
export const pDescription=clsx(
"text-sm",
"md:text-md"
)


export const imageCard=clsx(
 "w-[65dvh]",
 "h-50",
 "p-1",
 "border-1",
 "rounded-md",
 "mt-6"
)