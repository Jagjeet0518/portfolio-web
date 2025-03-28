"use client";

import { motion, MotionValue } from "motion/react";

export default function About({ y }: { y: MotionValue<number> }) {

    return (
        <motion.section style={{ y }} className="w-full h-fit py-24 px-12 flex flex-col justify-center bg-[#FDF0D5] z-30">
            <h2 className="text-5xl font-semibold text-[#C1121F]">
                Who Am I?
            </h2>
            <p className="text-2xl font-semibold text-neutral-700">
                I'm Jagjeet aka Snippy, a passionate web developer with a knack for turning ideas into responsive, dynamic, and user-friendly websites.
            </p>
        </motion.section>
    )
}