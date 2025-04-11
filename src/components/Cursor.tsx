"use client"

import { frame, motion, useSpring } from "motion/react"
import { RefObject, useEffect, useRef, useState } from "react"

export default function Drag() {
    const ref = useRef<HTMLDivElement>(null)
    const { x, y, opacity } = useFollowPointer(ref)

    return <motion.div ref={ref} style={{ x, y, opacity }} className="size-[48px] rounded-full bg-white mix-blend-difference fixed z-[999999]" />
}

const spring = { damping: 10, stiffness: 100, restDelta: 0.001 }

export function useFollowPointer(ref: RefObject<HTMLDivElement | null>) {
    const x = useSpring(0, spring)
    const y = useSpring(0, spring)
    const [opacity, setOpacity] = useState(0)

    useEffect(() => {
        if (!ref.current) return;

        const handlePointerMove = ({ clientX, clientY }: MouseEvent) => {
            const element = ref.current!

            frame.read(() => {
                let xVal = clientX - element.offsetLeft - element.offsetWidth / 2;
                let yVal = clientY - element.offsetTop - element.offsetHeight / 2;
                x.set(xVal)
                y.set(yVal)
                if (opacity == 0 && xVal != 0 || yVal != 0) setOpacity(1);
            })
        }

        window.addEventListener("pointermove", handlePointerMove)

        return () => {
            window.removeEventListener("pointermove", handlePointerMove)
        }
    }, [])

    return { x, y, opacity }
}