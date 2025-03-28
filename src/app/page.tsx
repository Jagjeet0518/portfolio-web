"use client";

import Navbar from "@/components/Navbar";
import Hero from "@/components/Sections/Hero";
import Projects from "@/components/Sections/Projects";
import { useEffect, useRef, useState } from "react";
import { useScroll, useTransform } from "motion/react";
import { usePathname } from "next/navigation";

export default function Home() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [totalHeight, setTotalHeight] = useState(0);
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

  useEffect(() => {
    function updateHeight() {
      if (containerRef.current) {
        setTotalHeight(containerRef.current.scrollHeight);
      }
    }

    updateHeight();

    window.addEventListener("resize", updateHeight);
    return () => window.removeEventListener("resize", updateHeight);
  }, []);

  return (
    <main className="flex flex-col w-screen bg-[#FDF0D5] relative" style={{ height: totalHeight }}>
      <Navbar />
      <div ref={containerRef} className="fixed top-0 left-0 w-screen will-change-transform z-0">
        <Hero y={heroSectionY} />
        <Projects y={projectsSectionY} />
      </div>
    </main>
  );
}
