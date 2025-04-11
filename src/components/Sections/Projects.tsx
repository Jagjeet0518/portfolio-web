"use client";
import { motion, MotionValue } from "motion/react";
import Marquee from "react-fast-marquee";
import { ProjectsData } from "@/data/projects";

export default function Projects({ y }: { y: MotionValue<number> }) {

    return (
        <motion.section style={{ y }} className="w-full h-fit py-36 bg-[#111] flex flex-col items-center justify-center gap-16 rounded-t-2xl z-20">
            <h2 className="text-5xl font-semibold text-white">
                My Works
            </h2>
            <Marquee gradient={false} speed={60} direction="left" autoFill pauseOnClick>
                {
                    ProjectsData
                        .map((project, idx) => <ProjectCard project={project} idx={idx} />)
                }
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
        <div className="flex flex-col w-96 h-fit gap-6 items-center justify-center mr-12">
            <div className="aspect-video w-full rounded-2xl bg-neutral-800 border-white/20 border overflow-hidden">
                <img src={project.img} alt={project.name} className="w-full h-full object-cover" />
            </div>
            <div className="flex flex-col items-center">
                <h4 className="text-xl font-semibold text-white">
                    {project.name}
                </h4>
                <p className="text-sm text-white">
                    {project.desc}
                </p>
            </div>
        </div>
    )
}