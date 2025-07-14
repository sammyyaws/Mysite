import clsx from "clsx";

export const ContactCont=clsx(
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
    "bg-gradient-to-b",
    "from-myDark-900",
    "to-mygreen-100",
    

)

export const ContactCard=clsx(
        "flex",
        "flex-col",
    "items-center",
    "justify-center",
    "md:w-[100dvh]",
    "w-[50dvh]",
    "h-[60dvh]",
    "p-2",
    "md:p-4",
    "rounded-md",
    "shadow-sm",
    "bg-mygreen-100/30",
    "backdrop-blur-lg",
    "hover:shadow-lg",
    "shadow-mygreen-100",
    "transition",
    "delay-300"
)
export const Contactbutton=clsx(
    "p-2",
    "md:p-4",
    "rounded-md",
    "border-1",
    "my-2",
    "shadow-md",
    "shadow-mygreen-100",
    "hover:shadow-lg"
)