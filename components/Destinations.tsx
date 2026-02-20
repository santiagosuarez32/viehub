"use client"

import { destinations } from "@/data/destinations"
import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"

export default function Destinations(){

return(
<section
data-builder-block
className="w-full py-32 bg-[#0a0a0a] text-white"
>

<div className="max-w-7xl mx-auto px-6">

{/* HEADER */}
<div
data-builder-block
className="mb-16 max-w-2xl"
>

<p
data-builder-block
className="text-[#CD9A31] text-sm tracking-widest mb-3"
>
POPULAR DESTINATIONS
</p>

<h2
data-builder-block
className="text-4xl leading-tight mb-4"
>
Travel in Style to
<span
data-builder-block
className="text-[#CD9A31]"
>
 Top Locations
</span>
</h2>

<p
data-builder-block
className="text-gray-400"
>
Explore our most requested private transfer destinations.
</p>

</div>

{/* GRID */}
<div
data-builder-block
className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
>

{destinations.map((dest,i)=>(

<motion.div
key={i}
initial={{opacity:0,y:40}}
whileInView={{opacity:1,y:0}}
viewport={{once:true}}
transition={{delay:i*0.1}}
data-builder-block
className="group relative bg-black border border-[#CD9A31]/20 rounded-2xl overflow-hidden"
>

{/* IMAGE */}
<div
data-builder-block
className="relative h-[220px] overflow-hidden"
>

<Image
src={dest.image}
alt={dest.title}
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
data-builder-block
className="p-6"
>

<h3
data-builder-block
className="text-lg mb-2"
>
{dest.title}
</h3>

<p
data-builder-block
className="text-sm text-gray-400 mb-5"
>
{dest.desc}
</p>

<Link href={`/destinations/${dest.slug}`}>
<button
data-builder-block
className="
w-full
py-2.5
bg-[#CD9A31]
text-black
rounded-lg
text-sm
hover:scale-105
transition
"
>
Explore
</button>
</Link>

</div>

</motion.div>

))}

</div>

</div>
</section>
)
}