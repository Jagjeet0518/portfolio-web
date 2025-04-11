import { MotionValue } from "motion";
import { motion } from "motion/react";

export default function Connect({ y }: { y: MotionValue<number> }) {
    return (
        <motion.section style={{ y }} className="w-screen bg-black py-16 flex flex-col items-start">
            <h4 className="text-white text-2xl font-semibold ml-[calc(100vw/17.5)]">
                Want a custom website for your business?
            </h4>
            <h2 className="text-[calc(100vw/7)] -my-[calc(100vw/21)] text-red-500 text-center w-full">
                let's connect
            </h2>
        </motion.section>
    )
}