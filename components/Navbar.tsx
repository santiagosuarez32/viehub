"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import { Menu, X } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"

export default function Navbar(){

const [scrolled,setScrolled] = useState(false)
const [open,setOpen] = useState(false)

useEffect(()=>{

const handleScroll = ()=>{
setScrolled(window.scrollY > 40)
}

window.addEventListener("scroll",handleScroll)
return()=>window.removeEventListener("scroll",handleScroll)

},[])

return(

<motion.nav
data-builder-block="navbar"
initial={{y:-80}}
animate={{y:0}}
transition={{duration:0.6,ease:"easeOut"}}
className={`
fixed top-0 left-0 w-full z-50
transition-all duration-500
${scrolled
?`backdrop-blur-xl bg-black/60 border-b border-[#CD9A31]/20 shadow-[0_8px_40px_rgba(0,0,0,0.6)]`
:`bg-transparent`
}
`}
>

<motion.div
data-builder-block="navbar_container"
animate={{
y: scrolled ? 0 : 5,
scale: scrolled ? 0.98 : 1
}}
transition={{
duration:0.6,
ease:[0.22,1,0.36,1]
}}
className="
max-w-7xl
mx-auto
flex
justify-between
items-center
px-6
py-4
"
>

{/* LOGO */}
<h1
data-builder-text="navbar_logo"
className="text-white text-xl tracking-wide"
>
Vie<span className="text-[#CD9A31]">Hub</span>
</h1>

{/* DESKTOP MENU */}
<div
data-builder-block="navbar_links"
className="hidden md:flex gap-10 text-sm"
>

<Link data-builder-text="nav_home" href="/">Home</Link>
<Link data-builder-text="nav_services" href="/services">Services</Link>
<Link data-builder-text="nav_fleet" href="/fleet">Fleet</Link>
<Link data-builder-text="nav_contact" href="/contact">Contact</Link>

</div>

{/* MOBILE BTN */}
<button
data-builder-block="navbar_mobile_btn"
onClick={()=>setOpen(!open)}
className="md:hidden text-white"
>
{open?<X/>:<Menu/>}
</button>

</motion.div>

{/* MOBILE MENU */}
<AnimatePresence>

{open &&(

<motion.div
data-builder-block="navbar_mobile_menu"
initial={{opacity:0,y:-20}}
animate={{opacity:1,y:0}}
exit={{opacity:0,y:-20}}
transition={{duration:0.3}}
className="
md:hidden
bg-black/80
backdrop-blur-xl
px-6
py-6
flex
flex-col
gap-4
text-sm
"
>

<Link data-builder-text="nav_home_mobile" href="/">Home</Link>
<Link data-builder-text="nav_services_mobile" href="/services">Services</Link>
<Link data-builder-text="nav_fleet_mobile" href="/fleet">Fleet</Link>
<Link data-builder-text="nav_contact_mobile" href="/contact">Contact</Link>

</motion.div>

)}

</AnimatePresence>

</motion.nav>

)
}