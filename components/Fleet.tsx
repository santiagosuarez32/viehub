"use client"

import Image from "next/image"
import { Swiper, SwiperSlide } from "swiper/react"
import { Autoplay } from "swiper/modules"
import { Users, Briefcase } from "lucide-react"

import "swiper/css"

import { fleet as fleetData } from "@/data/fleet"

// 🔥 FAKE LOOP
const fleet = [...fleetData, ...fleetData, ...fleetData]

export default function Fleet(){

return(
<section
data-builder-block
className="w-full py-28 bg-black text-white overflow-hidden"
>

<div
data-builder-block
className="max-w-7xl mx-auto text-center mb-20"
>
<h2
data-builder-block
className="text-4xl md:text-5xl font-light"
>
Our
<span
data-builder-block
className="text-[#CD9A31]"
>
 Fleet
</span>
</h2>
</div>

<Swiper
modules={[Autoplay]}
centeredSlides={true}
loop={true}
slidesPerView={3}
spaceBetween={40}
speed={800}
autoplay={{
delay:2500,
disableOnInteraction:false
}}
breakpoints={{
320:{slidesPerView:1.2},
640:{slidesPerView:1.6},
768:{slidesPerView:2.2},
1024:{slidesPerView:3}
}}
className="fleetSwiper px-6"
>

{fleet.map((car,index)=>(

<SwiperSlide key={index} data-builder-block>

<div
data-builder-block
className="
relative
bg-[#0a0a0a]
rounded-3xl
border border-[#CD9A31]/30
pt-12
pb-10
px-10
flex flex-col items-center
text-center
transition-all duration-500
hover:border-[#CD9A31]
"
>

{/* 🔥 BADGE SOLO E-CLASS */}
{car.name === "Mercedes E-Class" && (
<span
data-builder-block
className="
absolute
-translate-x-1/2
left-1/2
-top-4
text-[11px]
tracking-widest
px-5
py-1.5
bg-black
text-[#CD9A31]
rounded-full
border border-[#CD9A31]
shadow-[0_0_20px_#CD9A31]
"
>
PROFESSIONAL
</span>
)}

{/* IMAGE */}
<div
data-builder-block
className="w-full h-[170px] relative flex items-center justify-center mb-5"
>
<Image
src={car.image}
alt={car.name}
fill
className="
object-contain
scale-105
transition
duration-500
hover:scale-110
"
/>
</div>

{/* STARS */}
<div
data-builder-block
className="flex mb-2 text-[#CD9A31] text-sm"
>
★★★★★
</div>

<h3
data-builder-block
className="text-xl mb-3 font-medium"
>
{car.name}
</h3>

<div
data-builder-block
className="flex gap-8 text-sm text-gray-400 mb-4"
>

<div
data-builder-block
className="flex items-center gap-2"
>
<Users size={16}/>
<span data-builder-block>{car.passengers}</span>
</div>

<div
data-builder-block
className="flex items-center gap-2"
>
<Briefcase size={16}/>
<span data-builder-block>{car.luggage}</span>
</div>

</div>

<p
data-builder-block
className="text-[#CD9A31] text-lg mb-6"
>
{car.price}
</p>

<button
data-builder-block
className="
bg-gradient-to-r
from-[#CD9A31]
to-[#f1c55e]
text-black
px-8
py-3
rounded-lg
text-sm
font-semibold
hover:scale-105
transition
"
>
Book Now
</button>

</div>

</SwiperSlide>

))}

</Swiper>

</section>
)
}