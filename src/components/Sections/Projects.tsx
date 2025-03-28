"use client";
import { motion, MotionValue } from "motion/react";
import Marquee from "react-fast-marquee";

export default function Projects({ y }: { y: MotionValue<number> }) {

    return (
        <motion.section style={{ y }} className="w-full h-fit py-24 bg-[#003049] flex flex-col items-center justify-center rounded-t-2xl z-20">
            <Marquee gradient={false} speed={50} direction="left" pauseOnHover autoFill>
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
        <div className="aspect-video h-80 rounded-2xl bg-neutral-800 border-white/20 border mr-12">

        </div>
    )
}