import React from "react";
import { motion } from "framer-motion";
import type { HexColor, ThemeColor } from "../../types/colors";

type ColorProp = ThemeColor | HexColor; // Can specify a specified Tailwind theme color or custom Hex color

interface OceanProps {
    width?: number | string;
    height?: number | string;
    color?: ColorProp;
}

const Ocean: React.FC<OceanProps> = ({
    width = 160,
    height = 160,
    color = "rgba(0, 123, 255, 1)",
}) => {
    // We use a wider viewBox (400) so we can animate a long path seamlessly
    const waves = [
        { duration: 10, strokeWidth: 2, yBase: 80, opacity: 0.9 },
        { duration: 14, strokeWidth: 1, yBase: 100, opacity: 0.7 },
        { duration: 18, strokeWidth: 3, yBase: 120, opacity: 0.5 },
    ];

    // This path is designed to be perfectly tileable
    // It repeats the wave pattern so when it slides, the start and end look identical
    const wavePath = "M0 0 Q50 -20 100 0 T200 0 T300 0 T400 0 T500 0 T600 0";

    const getColor = (colorString: string) => {
        return colorString.startsWith("#") || colorString === "none"
            ? colorString
            : `var(--color-${colorString})`;
    };

    return (
        <div
            style={{ width, height, overflow: "hidden" }}
            className="relative bg-transparent"
        >
            <svg
                viewBox="0 0 200 200"
                preserveAspectRatio="none"
                className="absolute inset-0 w-full h-full"
                xmlns="http://www.w3.org/2000/svg"
            >
                {/* <defs>
                    <linearGradient
                        id="oceanGradient"
                        x1="0%"
                        y1="0%"
                        x2="100%"
                        y2="0%"
                    >
                        <stop offset="0%" stopColor="rgba(0, 123, 255, 1)" />
                        <stop offset="25%" stopColor="rgba(0, 123, 255, 1)" />
                        <stop offset="75%" stopColor="rgba(0, 123, 255, 1)" />
                        <stop offset="100%" stopColor="rgba(0, 123, 255, 1)" />
                    </linearGradient>
                </defs> */}

                {waves.map((wave, i) => (
                    <motion.path
                        key={i}
                        d={wavePath}
                        fill="transparent"
                        // stroke="url(#oceanGradient)"
                        stroke={getColor(color)}
                        strokeWidth={wave.strokeWidth}
                        strokeLinecap="round"
                        style={{ opacity: wave.opacity }}
                        animate={{
                            x: [0, -200], // Move exactly two 'T' segments to loop perfectly
                            y: [wave.yBase - 5, wave.yBase + 5, wave.yBase - 5],
                        }}
                        transition={{
                            x: {
                                repeat: Infinity,
                                repeatType: "loop",
                                duration: wave.duration,
                                ease: "linear",
                            },
                            y: {
                                repeat: Infinity,
                                repeatType: "mirror",
                                duration: 3 + i,
                                ease: "easeInOut",
                            },
                        }}
                    />
                ))}
            </svg>
        </div>
    );
};

export default Ocean;
