"use client";
import { motion, MotionValue } from "motion/react";
import Marquee from "react-fast-marquee";

export default function Projects({ y }: { y: MotionValue<number> }) {

    return (
        <motion.section style={{ y }} className="w-full h-fit py-36 bg-[#111] flex flex-col items-center justify-center gap-16 rounded-t-2xl z-20">
            <h2 className="text-5xl font-semibold text-white">
                My Works
            </h2>
            <Marquee gradient={false} speed={60} direction="left" autoFill pauseOnClick>
                <ProjectCard />
                <ProjectCard />
                <ProjectCard />
                <ProjectCard />
            </Marquee>
        </motion.section>
    )
}


const ProjectCard = () => {
    return (
        <div className="aspect-video h-72 rounded-2xl bg-neutral-800 border-white/20 border mr-12">
            
        </div>
    )
}