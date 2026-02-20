"use client"

import { ShieldCheck, Clock, UserCheck, Sparkles } from "lucide-react"
import { motion } from "framer-motion"

export default function Highlights(){

const items = [
{
icon:<ShieldCheck size={34}/>,
title:"Maximum Safety",
desc:"All our executive vehicles are regularly inspected and maintained to ensure the highest safety standards on every journey."
},
{
icon:<UserCheck size={34}/>,
title:"Experienced Chauffeurs",
desc:"Our professional drivers provide a smooth, discreet and reliable transfer experience with deep local knowledge."
},
{
icon:<Clock size={34}/>,
title:"Always On Time",
desc:"We track your flight in real time to guarantee punctual airport pickups and stress-free drop-offs."
},
{
icon:<Sparkles size={34}/>,
title:"Premium Comfort",
desc:"Travel in luxurious interiors with spacious seating, climate control and complimentary amenities."
}
]

return(
<section
data-builder-block="highlights_section"
className="w-full py-28 bg-[#0a0a0a] text-white"
>

<div
data-builder-block="highlights_container"
className="max-w-7xl mx-auto px-6"
>

{/* HEADER */}
<div
data-builder-block="highlights_header"
className="text-center mb-16 max-w-2xl mx-auto"
>

<h2
data-builder-text="highlights_title"
className="text-4xl font-light mb-4"
>
Why Travel <span className="text-[#CD9A31]">With Us</span>
</h2>

<p
data-builder-text="highlights_desc"
className="text-gray-400"
>
Experience executive airport transfers designed for comfort,
punctuality and professionalism — every ride, every time.
</p>

</div>

{/* CARDS */}
<div
data-builder-block="highlights_cards"
className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
>

{items.map((item,i)=>(

<motion.div
key={i}
data-builder-block={`highlight_card_${i}`}
initial={{opacity:0,y:40}}
whileInView={{opacity:1,y:0}}
viewport={{once:true}}
transition={{delay:i*0.15}}
className="
bg-[#111]
border border-[#CD9A31]/20
rounded-2xl
p-6
text-left
hover:border-[#CD9A31]/60
transition
group
"
>

{/* ICON */}
<div
data-builder-block={`highlight_icon_${i}`}
className="
w-[60px]
h-[60px]
rounded-xl
bg-[#CD9A31]/10
flex
items-center
justify-center
text-[#CD9A31]
mb-5
group-hover:scale-110
transition
"
>
{item.icon}
</div>

{/* TITLE */}
<h4
data-builder-text={`highlight_title_${i}`}
className="text-lg mb-2"
>
{item.title}
</h4>

{/* DESC */}
<p
data-builder-text={`highlight_desc_${i}`}
className="text-sm text-gray-400 leading-relaxed"
>
{item.desc}
</p>

</motion.div>

))}

</div>

</div>

</section>
)
}