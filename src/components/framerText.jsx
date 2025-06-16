"use client"
import React from 'react'
import { motion } from "framer-motion"

const container = {
    hidden: { opacity: 0 },
    visible: (i = 1) => ({
        opacity: 1,
        transition: { staggerChildren: 0.12, delayChildren: 0.04 * i },
    }),
}

const child = {
    visible: {
        opacity: 1,
        x: 0,
        transition: {
            type: "spring",
            damping: 12,
            stiffness: 100,
        },
    },
    hidden: {
        opacity: 0,
        x: -20,
        transition: {
            type: "spring",
            damping: 12,
            stiffness: 100,
        },
    },
}

export default function FramerText() {
    const texts = [
        "Welcome to My Portfolio",
        "I'm a Full Stack Developer",
        "Building Amazing Web Experiences",
        "Let's Create Something Great Together"
    ]

    return (
        <div className="pt-8">
            {texts.map((text, index) => (
                <motion.div
                    key={index}
                    style={{ overflow: "hidden", display: "flex", fontSize: "1.5rem", marginBottom: "1rem" }}
                    variants={container}
                    initial="hidden"
                    animate="visible"
                    custom={index}
                    className="text-slate-800 font-bold text-center"
                >
                    {text.split("").map((letter, letterIndex) => (
                        <motion.span
                            key={letterIndex}
                            variants={child}
                            style={{ marginRight: letter === " " ? "0.5rem" : "0" }}
                        >
                            {letter === " " ? "\u00A0" : letter}
                        </motion.span>
                    ))}
                </motion.div>
            ))}
        </div>
    )
}
