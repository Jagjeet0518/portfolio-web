"use client";

import Navbar from "@/components/Navbar";
import Hero from "@/components/Sections/Hero";
import Projects from "@/components/Sections/Projects";
import { useEffect, useRef } from "react";
import { motion, useScroll, useTransform } from "motion/react";
import { usePathname } from "next/navigation";
import About from "@/components/Sections/About";
import Opener from "@/components/Opener";
import Cursor from "@/components/Cursor";
import Connect from "@/components/Sections/Connect";
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

  const heroSectionY = useTransform(scrollYProgress, [0, 1], [0, -80]);
  const projectsSectionY = useTransform(scrollYProgress, [0, 1], [0, -600]);
  const aboutSectionY = useTransform(scrollYProgress, [0, 1], [0, -600]);
  const connectSectionY = useTransform(scrollYProgress, [0, 1], [0, -600]);

  return (
    <motion.main style={{ marginBottom: connectSectionY }} className="flex flex-col w-screen bg-[#111] relative overflow-hidden min-h-screen" ref={containerRef}>
      <Cursor />
      <Opener />
      <Navbar />
      <Hero y={heroSectionY} />
      <Projects y={projectsSectionY} />
      <About y={aboutSectionY} />
      <Connect y={connectSectionY} />
    </motion.main>
  );
}
