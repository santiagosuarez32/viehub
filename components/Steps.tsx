"use client"

import { CalendarCheck, CarFront, CheckCircle } from "lucide-react"
import { motion } from "framer-motion"

export default function Steps(){

const steps = [
{
icon:<CalendarCheck size={20}/>,
number:"01",
title:"Book Your Ride",
desc:"Reserve your transfer in seconds using our online form or WhatsApp booking."
},
{
icon:<CarFront size={20}/>,
number:"02",
title:"Driver Assigned",
desc:"We track your flight and send you your chauffeur details before pickup."
},
{
icon:<CheckCircle size={20}/>,
number:"03",
title:"Enjoy The Ride",
desc:"Meet your driver on time and travel in complete comfort & luxury."
}
]

return(

<section
data-builder-block="steps_section"
className="w-full py-32 bg-black text-white relative overflow-hidden"
>

<div
data-builder-block="steps_container"
className="max-w-7xl mx-auto px-6 text-center"
>

{/* TITLE */}
<p
data-builder-text="steps_subtitle"
className="text-[#CD9A31] tracking-widest text-sm mb-3"
>
HOW IT WORKS
</p>

<h2
data-builder-text="steps_title"
className="text-4xl font-light mb-20"
>
Booking Your Transfer Is <span className="text-[#CD9A31]">Easy</span>
</h2>

{/* WRAPPER */}
<div
data-builder-block="steps_wrapper"
className="relative"
>

{/* DESKTOP LINE */}
<div
data-builder-block="steps_line_desktop"
className="
absolute
top-[40px]
left-1/2
-translate-x-1/2
w-full
h-[1px]
bg-[#CD9A31]/30
hidden md:block
"
/>

{/* MOBILE LINE */}
<div
data-builder-block="steps_line_mobile"
className="
absolute
top-0
left-1/2
-translate-x-1/2
w-[1px]
h-full
bg-[#CD9A31]/20
md:hidden
"
/>

{/* STEPS */}
<div
data-builder-block="steps_grid"
className="
flex
flex-col
md:flex-row
items-center
justify-between
gap-16
"
>

{steps.map((step,i)=>(

<motion.div
key={i}
initial={{opacity:0,y:40}}
whileInView={{opacity:1,y:0}}
viewport={{once:true}}
transition={{delay:i*0.2}}
data-builder-block={`step_${i}`}
className="relative flex flex-col items-center max-w-xs mx-auto z-10"
>

{/* ICON */}
<div
data-builder-block={`step_icon_${i}`}
className="
w-[42px]
h-[42px]
rounded-full
bg-[#111]
border border-[#CD9A31]/40
flex items-center justify-center
text-[#CD9A31]
mb-6
">
{step.icon}
</div>

{/* NUMBER */}
<span
data-builder-text={`step_number_${i}`}
className="
text-[70px]
md:text-[110px]
font-bold
text-transparent
stroke-text
leading-none
mb-2
">
{step.number}
</span>

{/* TITLE */}
<h4
data-builder-text={`step_title_${i}`}
className="mb-2 text-lg">
{step.title}
</h4>

{/* DESC */}
<p
data-builder-text={`step_desc_${i}`}
className="text-sm text-gray-400 max-w-[220px]">
{step.desc}
</p>

</motion.div>

))}

</div>

</div>

{/* CTA */}
<div
data-builder-block="steps_cta_wrapper"
>
<button
data-builder-text="steps_cta"
className="
mt-16
px-8
py-3
bg-[#CD9A31]
text-black
rounded-xl
text-sm
hover:scale-105
transition
">
Reserve Now
</button>
</div>

</div>

</section>

)
}