"use client"

import { services } from "@/data/services"
import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"

export default function Services(){

return(

<section
data-builder-block="services_section"
className="w-full py-32 bg-[#0a0a0a] text-white"
>

<div
data-builder-block="services_container"
className="max-w-7xl mx-auto px-6"
>

{/* HEADER */}
<div
data-builder-block="services_header"
className="mb-16 max-w-2xl"
>

<p
data-builder-text="services_subtitle"
className="text-[#CD9A31] text-sm tracking-widest mb-3"
>
OUR SERVICES
</p>

<h2
data-builder-text="services_title"
className="text-4xl leading-tight mb-4"
>
Premium Transfer
<span className="text-[#CD9A31]"> Solutions</span>
</h2>

<p
data-builder-text="services_desc"
className="text-gray-400"
>
Explore our wide range of chauffeur and airport transfer services.
</p>

</div>

{/* GRID */}
<div
data-builder-block="services_grid"
className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
>

{services.map((service,i)=>(

<motion.div
key={i}
initial={{opacity:0,y:40}}
whileInView={{opacity:1,y:0}}
viewport={{once:true}}
transition={{delay:i*0.1}}
>

<div
data-builder-block={`service_card_${i}`}
className="
group
relative
bg-black
border border-[#CD9A31]/20
rounded-2xl
overflow-hidden
hover:border-[#CD9A31]
transition
"
>

<Link href={`/services/${service.slug}`}>

{/* IMAGE */}
<div
data-builder-image={`service_image_${i}`}
className="relative h-[220px] overflow-hidden"
>

<Image
src={service.image}
alt={service.title}
fill
className="
object-cover
group-hover:scale-110
transition duration-700
"
/>

<div className="absolute inset-0 bg-black/40 group-hover:bg-black/60 transition"/>

</div>

{/* CONTENT */}
<div
data-builder-block={`service_content_${i}`}
className="p-6"
>

<h3
data-builder-text={`service_title_${i}`}
className="text-lg mb-2"
>
{service.title}
</h3>

<p
data-builder-text={`service_desc_${i}`}
className="text-sm text-gray-400 mb-5"
>
{service.desc}
</p>

<div
data-builder-block={`service_button_wrapper_${i}`}
>

<div
data-builder-text={`service_btn_${i}`}
className="
w-full
py-2.5
bg-[#CD9A31]
text-black
rounded-lg
text-sm
text-center
hover:scale-105
transition
"
>
See More
</div>

</div>

</div>

</Link>

</div>

</motion.div>

))}

</div>

</div>

</section>

)
}