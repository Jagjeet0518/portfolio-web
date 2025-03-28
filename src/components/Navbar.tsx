import { motion } from "motion/react"
import Link from "next/link"

const links = [
    { name: "Services", href: "#about" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" },
]

export default function Navbar() {
    return (
        <motion.nav
        initial={{ opacity: 0, y: "-100%" }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: [0.83, 0, 0.17, 1] }}
        className="fixed w-screen h-20 bg-transparent backdrop-blur-sm px-20 py-4 flex items-center justify-center gap-16 z-[999]">
            {links.map((link) => (
                <NavbarItem key={link.name} {...link} />
            ))}
        </motion.nav>
    )
}

const NavbarItem = ({ name, href }: { name: string, href: string }) => {
    return (
        <Link href={href}>
            <button className="text-black text-lg font-medium">
                {name}
            </button>
        </Link>
    )
}