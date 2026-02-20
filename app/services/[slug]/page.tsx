import { services } from "@/data/services"
import Image from "next/image"
import Link from "next/link"
import { notFound } from "next/navigation"

export default async function ServicePage({ params }: any){

const { slug } = await params
const service = services.find(s=>s.slug===slug)

if(!service) return notFound()

const otherServices = services
.filter(s=>s.slug!==slug)
.sort(()=>0.5-Math.random())
.slice(0,3)

return(

<main data-builder-block="service_page" className="w-full bg-black text-white">

{/* HERO */}
<section
data-builder-block="service_hero"
className="w-full py-24"
>
<div
data-builder-block="service_container"
className="max-w-7xl mx-auto px-6 grid lg:grid-cols-3 gap-16"
>

{/* LEFT */}
<div data-builder-block="service_content" className="lg:col-span-2">

<div
data-builder-block="service_image_wrapper"
className="relative w-full h-[420px] rounded-2xl overflow-hidden mb-10"
>
<Image
data-builder-image="service_image"
src={service.image}
alt={service.title}
fill
className="object-cover"
/>
</div>

<h1
data-builder-text="service_title"
className="text-4xl mb-6"
>
{service.title}
</h1>

<p
data-builder-text="service_long_desc"
className="text-gray-400"
>
{service.longDesc}
</p>

</div>

{/* SIDEBAR */}
<div data-builder-block="service_sidebar" className="space-y-6">

{/* BOOK */}
<div
data-builder-block="booking_box"
className="
bg-[#0a0a0a]
p-6
rounded-2xl
border border-[#CD9A31]/30
space-y-4
"
>

<h4
data-builder-text="booking_title"
className="text-lg"
>
Book Your Transfer
</h4>

<button
data-builder-text="reserve_btn"
className="
w-full
py-3
bg-[#CD9A31]
text-black
rounded-lg
hover:scale-105
transition
"
>
Reserve Now
</button>

<a
data-builder-text="whatsapp_btn"
href="https://wa.me/123456789"
className="
block
w-full
text-center
py-3
border border-[#CD9A31]
text-[#CD9A31]
rounded-lg
hover:bg-[#CD9A31]
hover:text-black
transition
"
>
WhatsApp Booking
</a>

</div>

{/* OTHER SERVICES */}
<div
data-builder-block="other_services"
className="
bg-[#0a0a0a]
p-6
rounded-2xl
border border-[#CD9A31]/30
space-y-4
"
>

<h4
data-builder-text="other_services_title"
className="mb-3"
>
Other Services
</h4>

{otherServices.map((s,i)=>(

<Link
data-builder-block={`other_service_${i}`}
key={i}
href={`/services/${s.slug}`}
>

<div className="flex gap-4 mb-4 items-center cursor-pointer">

<div
data-builder-image={`other_service_img_${i}`}
className="relative w-20 h-16 rounded-lg overflow-hidden"
>
<Image
src={s.image}
alt={s.title}
fill
className="object-cover"
/>
</div>

<span
data-builder-text={`other_service_title_${i}`}
className="text-sm text-gray-300"
>
{s.title}
</span>

</div>

</Link>

))}

</div>

</div>

</div>
</section>

{/* ================== STEPS ================== */}
<section
data-builder-block="service_steps"
className="w-full py-32 bg-black text-white flex justify-center"
>

<div
data-builder-block="steps_container"
className="w-full max-w-6xl px-6 text-center"
>

<p
data-builder-text="steps_subtitle"
className="text-[#CD9A31] tracking-widest text-sm mb-3"
>
HOW IT WORKS
</p>

<h2
data-builder-text="steps_title"
className="text-4xl mb-20"
>
Booking Your Transfer Is
<span className="text-[#CD9A31]"> Easy</span>
</h2>

<div className="relative flex items-center justify-between mb-16">

<div className="absolute top-5 left-0 w-full h-[1px] bg-[#CD9A31]/30"/>

{["01","02","03"].map((n,i)=>(

<div
data-builder-block={`step_${i}`}
key={i}
className="relative z-10 flex flex-col items-center"
>

<div className="
w-10
h-10
rounded-full
border border-[#CD9A31]
flex
items-center
justify-center
bg-black
text-[#CD9A31]
text-sm
mb-6
">
✓
</div>

<span
data-builder-text={`step_number_${i}`}
className="
text-[90px]
md:text-[120px]
font-bold
text-transparent
stroke-text
leading-none
"
>
{n}
</span>

<h4
data-builder-text={`step_title_${i}`}
className="mt-4 text-lg"
>
{[
"Book Your Ride",
"Driver Assigned",
"Enjoy The Ride"
][i]}
</h4>

<p
data-builder-text={`step_desc_${i}`}
className="text-gray-400 text-sm max-w-[220px]"
>
{[
"Reserve your transfer online or via WhatsApp.",
"We send your chauffeur details before pickup.",
"Travel in complete comfort & luxury."
][i]}
</p>

</div>

))}

</div>

<button
data-builder-text="steps_cta"
className="
px-8
py-3
bg-[#CD9A31]
text-black
rounded-lg
hover:scale-105
transition
"
>
Reserve Now
</button>

</div>

</section>

</main>
)
}