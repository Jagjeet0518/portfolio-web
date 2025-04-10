import { motion, MotionValue, useMotionValueEvent, useScroll } from "motion/react"
import Link from "next/link"
import { useState } from "react";

const links = [
    { name: "Services", href: "#about" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" },
]

export default function Navbar() {

    const [scrollDirection, setScrollDirection] = useState<"up" | "down">("down");

    const { scrollY } = useScroll();

    useMotionValueEvent(scrollY, "change", (current) => {
        const diff = current - (scrollY.getPrevious() ?? current);
        setScrollDirection(diff > 0 ? "down" : "up");
    })

    return (
        <motion.nav
            initial={{ opacity: 0, y: "-100%" }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.45, 0, 0.55, 1] }}
            className="fixed w-screen h-20 bg-transparent backdrop-blur-sm px-12 py-4 flex items-center justify-center z-[999]"
        >
            <div className="flex items-center justify-center gap-16">
                {links.map((link) => (
                    <NavbarItem key={link.name} {...link} />
                ))}
            </div>
        </motion.nav>
    )
}

const NavbarItem = ({ name, href }: { name: string, href: string }) => {
    return (
        <Link href={href}>
            <button className="text-white text-lg font-medium">
                {name}
            </button>
        </Link>
    )
}