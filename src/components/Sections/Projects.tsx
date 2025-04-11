"use client";
import { motion, MotionValue } from "motion/react";
import Marquee from "react-fast-marquee";
import { ProjectsData } from "@/data/projects";

export default function Projects({ y }: { y: MotionValue<number> }) {

    return (
        <motion.section style={{ y }} className="w-full h-screen py-36 bg-[#111] flex flex-col items-center justify-center gap-24 rounded-t-2xl z-20">
            <h2 className="text-5xl font-semibold text-white">
                My Works
            </h2>
            <Marquee gradient={false} speed={80} direction="left" autoFill pauseOnClick>
                <div className="grid grid-cols-7 gap-12 mr-12">

                {
                    ProjectsData
                    .map((project, idx) => <ProjectCard project={project} idx={idx} />)
                }
                </div>
            </Marquee>
        </motion.section>
    )
}


const ProjectCard = ({ project, idx }: {
    project: {
        name: string,
        desc: string,
        img: string,
        link: string
    }, idx: number
}) => {
    return (
        <div className="flex flex-col w-[33vw] h-fit gap-6 items-center justify-center">
            <div className="aspect-video w-full rounded-2xl bg-neutral-800 border-white/20 border-2 overflow-hidden shadow-lg shadow-red-500/20">
                <img src={project.img} alt={project.name} className="w-full h-full object-cover" />
            </div>
            <div className="flex flex-col items-center gap-2">
                <h4 className="text-xl font-semibold text-white">
                    {project.name}
                </h4>
                <p className="text-sm text-white text-center w-full px-4">
                    {project.desc}
                </p>
            </div>
        </div>
    )
}