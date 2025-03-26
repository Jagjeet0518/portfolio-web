"use client";

import { usePathname } from "next/navigation";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import ScrollSmoother from "gsap/ScrollSmoother";

if (typeof window !== 'undefined') {
    gsap.registerPlugin(ScrollSmoother, useGSAP);
}

export default function Gsap({ children }: { children: React.ReactNode }) {
    const pathname = usePathname();

    useGSAP(
        () => {
            ScrollSmoother.create({
                smooth: 2,
                effects: true,
            });
        },
        {
            dependencies: [pathname],
            revertOnUpdate: true,
        }
    );


    return (
        <div id="smooth-wrapper">
            <div id="smooth-content">{children}</div>
        </div>
    );
}