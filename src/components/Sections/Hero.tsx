"use client";
import { motion, MotionProps, MotionValue } from "motion/react";
import { DetailedHTMLProps, HTMLAttributes, useEffect, useRef, useState } from "react";
import { PiMouseScroll } from "react-icons/pi";

export default function Hero({ y }: { y: MotionValue<number> }) {

    return (
        <motion.section style={{ y }} className="w-screen min-h-screen bg-[url('/bg.webp')] flex flex-col items-center justify-center py-24 z-10">
            <div className="flex flex-col items-end">
                <motion.h4
                    initial={{ opacity: 0, x: 50, filter: "blur(4px)" }}
                    animate={{ opacity: 1, x: 0, filter: "blur(0)" }}
                    transition={{ duration: .5, ease: [0.45, 0, 0.55, 1], delay: 2.5 }}
                    className="text-[#F6E8EA] text-[2.5rem] font-semibold">
                    Hi, I'm
                </motion.h4>
                <ScrambleText targetText="SniPPY"
                    initial={{ opacity: 0, scale: 0.5, filter: "blur(4px)" }}
                    animate={{ opacity: 1, scale: 1, filter: "blur(0)" }}
                    transition={{ duration: .75, ease: [0.45, 0, 0.55, 1], delay: 2.75 }}
                    className="text-[#F6E8EA] text-[16rem] leading-[12rem] tracking-tight -mr-[2rem] -mt-[1rem] byte"
                />
                <motion.p
                    initial={{ opacity: 0, x: -50, filter: "blur(4px)" }}
                    animate={{ opacity: 1, x: 0, filter: "blur(0)" }}
                    transition={{ duration: 1, ease: [0.45, 0, 0.55, 1], delay: 3 }}
                    className="text-[#F6E8EA] text-[1.5rem] font-medium leading-[2.5rem] place-self-start">
                    Bringing designs to life, one pixel at a time.
                </motion.p>
            </div>
            <motion.div
                animate={{ y: -20, transition: { repeat: Infinity, repeatType: "mirror", duration: 1, ease: "easeInOut", delay: 2.5 } }}
                className="absolute bottom-8">
                <PiMouseScroll size={40} color="#F6E8EA" />
            </motion.div>
        </motion.section>
    )
}

const ScrambleText = ({ targetText, ...props }: { targetText: string } & MotionProps & DetailedHTMLProps<HTMLAttributes<HTMLHeadingElement>, HTMLHeadingElement>) => {
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
        <motion.h1 {...props}>
            {text}
        </motion.h1>
    )
}