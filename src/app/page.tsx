"use client";

import Model from "@/components/Model";
import { OrbitControls, Stage } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col w-screen">
      <section className="w-screen h-screen bg-[#FDF0D5] flex flex-col items-center justify-center py-24">
        <div className="flex flex-col items-end">
          <h4 className="text-[#780000] text-[3.2rem] font-semibold">
            Hi, I'm
          </h4>
          <h1 className="text-[#C1121F] text-[21rem] leading-[12rem] tracking-tight -mr-[2rem] -mt-[1rem] byte">
            SNIPPY
          </h1>
          <h2 className="text-[#780000] text-[2rem] font-medium leading-[2.5rem] place-self-start">
            Bringing designs to life, one pixel at a time.
          </h2>
        </div>
        <Canvas shadows dpr={[1, 2]} camera={{ fov: 50 }}>
          <Suspense fallback={null}>
            <Stage preset="soft" intensity={2} environment="city">
              <Model />
            </Stage>
          </Suspense>
        </Canvas>
      </section>
    </main>
  );
}
