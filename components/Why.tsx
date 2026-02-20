"use client"

import { ShieldCheck, Clock, Star, BadgeDollarSign } from "lucide-react"
import { motion } from "framer-motion"

export default function Why(){

const items = [
{
icon:<ShieldCheck size={26}/>,
title:"Prestigious Vehicles",
desc:"Our fleet includes top-tier executive vehicles offering maximum comfort and performance."
},
{
icon:<Star size={26}/>,
title:"Elite Chauffeurs",
desc:"Professional drivers with local expertise ensuring a seamless luxury journey."
},
{
icon:<Clock size={26}/>,
title:"24/7 Availability",
desc:"Available anytime for airport transfers, business travel or private events."
},
{
icon:<BadgeDollarSign size={26}/>,
title:"Transparent Pricing",
desc:"No hidden fees. Fixed rates with full clarity before you book."
}
]

return(
<section
data-builder-block="why_section"
className="w-full py-28 bg-black text-white overflow-hidden"
>

<div
data-builder-block="why_container"
className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center"
>

{/* LEFT */}
<div data-builder-block="why_left">

<h2
data-builder-text="why_title"
className="text-4xl mb-6"
>
Why <span className="text-[#CD9A31]">Choose Us</span>
</h2>

<p
data-builder-text="why_desc"
className="text-gray-400 mb-12 max-w-md"
>
Experience a new standard in private transportation.
We deliver discretion, comfort and dependability
on every journey.
</p>

<div
data-builder-block="why_grid"
className="grid sm:grid-cols-2 gap-10"
>

{items.map((item,i)=>(

<motion.div
key={i}
initial={{opacity:0,y:30}}
whileInView={{opacity:1,y:0}}
viewport={{once:true}}
transition={{delay:i*0.2}}
data-builder-block={`why_item_${i}`}
className="flex gap-4"
>

<div
data-builder-block={`why_icon_${i}`}
className="
min-w-[48px]
h-[48px]
rounded-full
bg-[#111]
border border-[#CD9A31]/30
flex items-center justify-center
text-[#CD9A31]
">
{item.icon}
</div>

<div>

<h4
data-builder-text={`why_item_title_${i}`}
className="mb-1 text-white"
>
{item.title}
</h4>

<p
data-builder-text={`why_item_desc_${i}`}
className="text-sm text-gray-400"
>
{item.desc}
</p>

</div>

</motion.div>

))}

</div>

</div>

{/* RIGHT */}
<motion.div
initial={{opacity:0,x:60}}
whileInView={{opacity:1,x:0}}
viewport={{once:true}}
transition={{duration:0.6}}
data-builder-block="why_image_wrapper"
className="relative flex justify-center"
>

<div
data-builder-block="why_image_container"
className="relative rounded-3xl overflow-hidden border border-[#CD9A31]/30"
>

<img
data-builder-image="why_image"
src="/why.webp"
className="relative z-10 max-w-lg w-full rounded-3xl"
/>

</div>

<div
data-builder-block="why_glow"
className="
absolute
w-[350px]
h-[350px]
bg-[#CD9A31]/20
blur-[120px]
rounded-full
bottom-10
"
/>

</motion.div>

</div>

</section>
)
}