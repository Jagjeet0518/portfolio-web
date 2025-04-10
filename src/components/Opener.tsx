"use client";

import { motion, useAnimate } from "motion/react";
import { useEffect, useState } from "react";

const Opener = () => {

    const [fillScope, fillAnimate] = useAnimate();
    const [contScope, contAnimate] = useAnimate();
    const [view, setView] = useState(true)

    useEffect(() => {
        const animation = async () => {
            await fillAnimate(fillScope.current, { width: "100dvw" }, { ease: "easeInOut", duration: .5 })
            await fillAnimate(fillScope.current, { height: "100dvh" }, { ease: "easeInOut", duration: .75 })
            window.scrollTo(0, 0)
            await contAnimate(contScope.current, { y: "-100%" }, { ease: "easeInOut", duration: 1 })
            setView(false)
        }
        setTimeout(() => {
            animation()
        }, 500)
    }, [])

    if (!view)
        return null;

    return (
        <motion.div ref={contScope} className="fixed top-0 left-0 w-screen h-screen z-[99999] bg-black flex flex-col items-center justify-center">
            <motion.div
                ref={fillScope}
                className="bg-[#711d03] h-2 w-0 relative"
            >

            </motion.div>
        </motion.div>
    )
}

export default Opener;