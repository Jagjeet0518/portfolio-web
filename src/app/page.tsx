"use client";

import Navbar from "@/components/Navbar";
import Hero from "@/components/Sections/Hero";
import Projects from "@/components/Sections/Projects";
import { useEffect, useRef } from "react";
import { motion, useScroll, useTransform } from "motion/react";
import { usePathname } from "next/navigation";
import About from "@/components/Sections/About";
export default function Home() {
  const containerRef = useRef<HTMLDivElement>(null);
  const pathname = usePathname();

  useEffect(() => {
    if (typeof window !== "undefined") {
      window.scrollTo(0, 0);
    }
  }, [pathname]);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end end'],
  });

  const heroSectionY = useTransform(scrollYProgress, [0, 1], [0, -40]);
  const projectsSectionY = useTransform(scrollYProgress, [0, 1], [0, -320]);
  const aboutSectionY = useTransform(scrollYProgress, [0, 1], [0, -200]);

  return (
    <motion.main style={{ marginBottom: projectsSectionY }} className="flex flex-col w-screen bg-[#FDF0D5] relative overflow-hidden min-h-screen" ref={containerRef}>
      <Navbar />
      <Hero y={heroSectionY} />
      <Projects y={projectsSectionY} />
      <About y={aboutSectionY} />
      <Projects y={projectsSectionY} />
    </motion.main>
  );
}
