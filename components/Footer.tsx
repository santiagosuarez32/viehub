"use client"

import { Phone, Mail, MapPin, Instagram, Facebook } from "lucide-react"

export default function Footer(){

return(
<footer
data-builder-block
className="w-full bg-black border-t border-[#CD9A31]/20 text-white pt-20 pb-10"
>

<div
data-builder-block
className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 lg:grid-cols-4 gap-12"
>

{/* LOGO */}
<div data-builder-block>

<h3
data-builder-block
className="text-2xl mb-4"
>
Vie<span data-builder-block className="text-[#CD9A31]">Hub</span>
</h3>

<p
data-builder-block
className="text-sm text-gray-400 mb-6"
>
Luxury private airport transfers across Europe.
Travel in comfort with our premium chauffeur service.
</p>

<div data-builder-block className="flex gap-4 text-[#CD9A31]">

<div
data-builder-block
className="w-9 h-9 rounded-full border border-[#CD9A31]/30 flex items-center justify-center hover:bg-[#CD9A31] hover:text-black transition cursor-pointer"
>
<Instagram size={16}/>
</div>

<div
data-builder-block
className="w-9 h-9 rounded-full border border-[#CD9A31]/30 flex items-center justify-center hover:bg-[#CD9A31] hover:text-black transition cursor-pointer"
>
<Facebook size={16}/>
</div>

</div>
</div>

{/* SERVICES */}
<div data-builder-block>

<h4 data-builder-block className="mb-5 text-lg">
Services
</h4>

<ul data-builder-block className="space-y-3 text-sm text-gray-400">

<li data-builder-block className="hover:text-[#CD9A31] cursor-pointer transition">
Airport Transfer
</li>

<li data-builder-block className="hover:text-[#CD9A31] cursor-pointer transition">
Business Travel
</li>

<li data-builder-block className="hover:text-[#CD9A31] cursor-pointer transition">
Event Chauffeur
</li>

<li data-builder-block className="hover:text-[#CD9A31] cursor-pointer transition">
Private City Tours
</li>

</ul>
</div>

{/* COMPANY */}
<div data-builder-block>

<h4 data-builder-block className="mb-5 text-lg">
Company
</h4>

<ul data-builder-block className="space-y-3 text-sm text-gray-400">

<li data-builder-block className="hover:text-[#CD9A31] cursor-pointer transition">
About Us
</li>

<li data-builder-block className="hover:text-[#CD9A31] cursor-pointer transition">
Fleet
</li>

<li data-builder-block className="hover:text-[#CD9A31] cursor-pointer transition">
Contact
</li>

<li data-builder-block className="hover:text-[#CD9A31] cursor-pointer transition">
Terms & Conditions
</li>

</ul>
</div>

{/* CONTACT */}
<div data-builder-block>

<h4 data-builder-block className="mb-5 text-lg">
Contact
</h4>

<div data-builder-block className="space-y-4 text-sm text-gray-400">

<div data-builder-block className="flex gap-3 items-center">
<Phone size={16} className="text-[#CD9A31]"/>
<span data-builder-block>+43 123 456 789</span>
</div>

<div data-builder-block className="flex gap-3 items-center">
<Mail size={16} className="text-[#CD9A31]"/>
<span data-builder-block>info@viehub.com</span>
</div>

<div data-builder-block className="flex gap-3 items-center">
<MapPin size={16} className="text-[#CD9A31]"/>
<span data-builder-block>Vienna, Austria</span>
</div>

</div>
</div>

</div>

{/* BOTTOM */}
<div
data-builder-block
className="border-t border-[#CD9A31]/10 mt-16 pt-6 text-center text-xs text-gray-500"
>
<span data-builder-block>
© {new Date().getFullYear()} VieHub. All rights reserved.
</span>
</div>

</footer>
)
}