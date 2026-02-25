"use client";

import Image from "next/image";
import { Users, Briefcase } from "lucide-react";
import { useI18n } from "@/lib/i18n/i18n";

export default function Fleet(){

const { t } = useI18n();

const cars = [
{
title:"Standard",
subtitle:"Mercedes E-Class",
pax:3,
bags:2,
price:42,
img:"/sta.webp",
features:["child_seats","wifi","air_conditioning","leather_seats"]
},
{
title:"Station Wagon",
subtitle:"Mercedes E-Class T-Model",
pax:4,
bags:3,
price:46,
img:"/wa.webp",
popular:true,
features:["extra_luggage","child_seats","premium_comfort","wifi"]
},
{
title:"V-Class",
subtitle:"Mercedes V-Class",
pax:7,
bags:7,
price:65,
img:"/v.webp",
features:["group_travel","business_teams","family_trips","maximum_comfort"]
}
]

return(

<section className="w-full py-24 bg-black flex justify-center builder-">

<div className="max-w-7xl w-full px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

{cars.map((car,i)=>(

<div
key={i}
className="
relative
bg-[#0a0a0a]
border border-[#CD9A31]/40
rounded-2xl
overflow-hidden
transition
hover:scale-[1.02]
hover:shadow-[0_0_45px_rgba(205,154,49,0.35)]
"
>

{/* BADGE */}
{car.popular && (
<div className="absolute z-20 top-3 right-3">
<span className="text-[11px] px-3 py-1 bg-gradient-to-r from-[#fff2c9] via-[#CD9A31] to-[#8f640f] text-black rounded-md builder-">
{t("common", "most_popular").toUpperCase()}
</span>
</div>
)}

{/* IMAGE FULL */}
<div className="relative w-full h-[220px] overflow-hidden">

<Image
src={car.img}
alt={car.title}
fill
sizes="(max-width:768px) 100vw, 33vw"
className="object-cover scale-[1.05]"
/>

{/* LUXURY OVERLAY */}
<div className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-transparent"/>

</div>

{/* CONTENT */}
<div className="px-6 py-5 space-y-3">

<h3 className="text-xl text-white builder-">
{car.title}
</h3>

<p className="text-gray-400 text-sm builder-">
{car.subtitle}
</p>

<div className="flex gap-6 text-[#CD9A31] text-sm pt-1 builder-">

<div className="flex items-center gap-1">
<Users size={15}/>
{car.pax} {t("common", "pax")}
</div>

<div className="flex items-center gap-1">
<Briefcase size={15}/>
{car.bags} {t("common", "bags")}
</div>

</div>

<ul className="text-gray-400 text-sm space-y-1 pt-2 builder-">
{car.features.map((f,idx)=>(
<li key={idx}>
• {t("common", f as any)}
</li>
))}
</ul>

<div className="flex items-center justify-between pt-4">

<p className="text-[#CD9A31] text-lg builder-">
{t("common", "from_price")} €{car.price}
</p>

<a
href="#booking-form"
className="
px-5
py-2
rounded-lg
text-black
text-sm
font-bold
bg-gradient-to-r
from-[#fff2c9]
via-[#CD9A31]
to-[#8f640f]
hover:scale-105
transition
 builder-
">
{t("common", "book")}
</a>

</div>

</div>

</div>

))}

</div>

</section>

)
}