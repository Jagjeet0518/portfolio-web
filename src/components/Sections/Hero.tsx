"use client";
import { motion, MotionValue } from "motion/react";
import { useEffect, useRef, useState } from "react";
import { PiMouseScroll } from "react-icons/pi";

// import Model from "@/components/Model";
// import { OrbitControls, Stage } from "@react-three/drei";
// import { Canvas } from "@react-three/fiber";
// import { Suspense } from "react";

export default function Hero({ y }: { y: MotionValue<number> }) {

    return (
        <motion.section style={{ y }} className="w-screen min-h-screen bg-[#FDF0D5] flex flex-col items-center justify-center py-24 z-10">
            <div className="flex flex-col items-end">
                <motion.h4
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 1, ease: [0.83, 0, 0.17, 1] }}
                    className="text-[#C1121F] text-[3.2rem] font-semibold">
                    Hi, I'm
                </motion.h4>
                <ScrambleText targetText="SniPPY" />
                <motion.p
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 1, ease: [0.83, 0, 0.17, 1] }}
                    className="text-[#C1121F] text-[2rem] font-medium leading-[2.5rem] place-self-start">
                    Bringing designs to life, one pixel at a time.
                </motion.p>
            </div>
            <motion.div
                animate={{ y: -20, transition: { repeat: Infinity, repeatType: "mirror", duration: 1, ease: "easeInOut" } }}
                className="absolute bottom-8">
                <PiMouseScroll size={40} color="#C1121F" />
            </motion.div>
        </motion.section>
    )
}

const ScrambleText = ({ targetText }: { targetText: string }) => {
    const CYCLES_PER_LETTER = 5;
    const SHUFFLE_TIME = 50;
    const CHARS = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const intervalRef = useRef<NodeJS.Timeout | null>(null);
    const TARGET_TEXT = targetText;

    const [text, setText] = useState(TARGET_TEXT);

    const scramble = () => {
        let pos = 0;

        intervalRef.current = setInterval(() => {
            const scrambled = TARGET_TEXT.split("")
                .map((char, index) => {
                    if (pos / CYCLES_PER_LETTER > index) {
                        return char;
                    }

                    const randomCharIndex = Math.floor(Math.random() * CHARS.length);
                    const randomChar = CHARS[randomCharIndex];

                    return randomChar;
                })
                .join("");

            setText(scrambled);
            pos++;

            if (pos >= TARGET_TEXT.length * CYCLES_PER_LETTER) {
                stopScramble();
            }
        }, SHUFFLE_TIME);
    };

    const stopScramble = () => {
        clearInterval(intervalRef.current as NodeJS.Timeout);
        setText(TARGET_TEXT);
    };

    useEffect(() => {
        scramble();

        return () => {
            stopScramble();
        };
    }, []);

    return (
        <motion.h1
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: .5, ease: [0.83, 0, 0.17, 1] }}
            className="text-[#C1121F] text-[21rem] leading-[12rem] tracking-tight -mr-[2rem] -mt-[1rem] byte">
            {text}
        </motion.h1>
    )
}




/* <Canvas shadows dpr={[1, 2]} camera={{ fov: 50 }}>
         <Suspense fallback={null}>
           <Stage preset="soft" intensity={2} environment="city">
             <Model />
           </Stage>
         </Suspense>
       </Canvas> */