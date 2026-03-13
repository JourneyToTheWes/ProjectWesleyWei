import { motion, type Variants } from "framer-motion";
import type { HexColor, ThemeColor } from "../../types/colors";

type ColorProp = ThemeColor | HexColor; // Can specify a specified Tailwind theme color or custom Hex color

interface CompassProps {
    size?: number; // diameter
    faceColor?: ColorProp;
    borderColor?: ColorProp;
    centerPinColor?: ColorProp; // west-filled
    needleColor?: ColorProp; // color of the "primary" needle pointing west
    needleOutlineColor?: ColorProp; // color of the other half of the needle
    tickColor?: ColorProp; // color of the minor ticks
    majorTickColor?: ColorProp; // color of the major ticks (every 5)
    labelColor?: ColorProp; // color of the N, E, S, W labels
}

const Compass: React.FC<CompassProps> = ({
    size = 150,
    faceColor = "white",
    borderColor = "#9CA3AF",
    centerPinColor = "#2563EB",
    needleColor = "#4f46e5", // default bg-primary
    needleOutlineColor = "#000",
    tickColor = "#6B7280",
    majorTickColor = "#111827",
    labelColor = "#111827",
}) => {
    const center = size / 2;
    const radius = size * 0.45;
    const needleWidth = 8;

    // Tick marks
    const totalTicks = 72; // every 5 degrees
    const tickLengthMajor = 12;
    const tickLengthMinor = 6;

    const tickMarks = Array.from({ length: totalTicks }, (_, i) => {
        const angle = (i * 360) / totalTicks; // 0 to <360
        const angleRad = (angle * Math.PI) / 180;

        const isMajor = i % 18 === 0; // 72 / 4 = 18 → every 90deg for cardinal
        const tickLength = isMajor ? tickLengthMajor : tickLengthMinor;

        const x1 = center + (radius - tickLength) * Math.cos(angleRad);
        const y1 = center + (radius - tickLength) * Math.sin(angleRad);
        const x2 = center + radius * Math.cos(angleRad);
        const y2 = center + radius * Math.sin(angleRad);

        return { x1, y1, x2, y2, isMajor };
    });

    // Cardinal directions
    const labels = [
        { label: "N", angle: 0 },
        { label: "E", angle: 90 },
        { label: "S", angle: 180 },
        { label: "W", angle: 270 },
    ];

    const getColor = (colorString: string) => {
        return colorString.startsWith("#") || colorString === "none"
            ? colorString
            : `var(--color-${colorString})`;
    };

    // Needle animation variants
    const needleVariants: Variants = {
        idle: {
            rotate: [-20, -10, -5, 5, 0],
            transition: {
                duration: 2,
                ease: [0, 1, 0.71, 0.13],
                repeat: Infinity,
                repeatType: "mirror",
            },
        },
        hover: {
            rotate: [-5, 0, 5, -5, 0],
            transition: {
                duration: 0.5,
                ease: [0, 1, 0.71, 0.13],
                repeat: Infinity,
                repeatType: "mirror",
            },
        },
    };

    return (
        <motion.svg
            width={size}
            height={size}
            viewBox={`0 0 ${size} ${size}`}
            initial="idle"
            animate="idle"
            whileHover="hover"
        >
            {/* Compass face */}
            <motion.circle
                cx={center}
                cy={center}
                r={radius}
                fill={getColor(faceColor)}
                stroke={getColor(borderColor)}
                strokeWidth={2}
            />

            {/* Tick marks */}
            {tickMarks.map((tick, i) => (
                <motion.line
                    key={i}
                    x1={tick.x1}
                    y1={tick.y1}
                    x2={tick.x2}
                    y2={tick.y2}
                    stroke={
                        tick.isMajor
                            ? getColor(majorTickColor)
                            : getColor(tickColor)
                    }
                    strokeWidth={tick.isMajor ? 2 : 1}
                />
            ))}

            {/* Cardinal labels */}
            {labels.map((l, i) => {
                const angleRad = ((l.angle - 90) * Math.PI) / 180; // rotate -90deg
                const labelR = radius - 20;
                const x = center + labelR * Math.cos(angleRad);
                const y = center + labelR * Math.sin(angleRad) + 5;
                return (
                    <motion.text
                        key={i}
                        x={x}
                        y={y}
                        textAnchor="middle"
                        fontSize={size * 0.08}
                        fill={getColor(labelColor)}
                        fontWeight="bold"
                    >
                        {l.label}
                    </motion.text>
                );
            })}

            {/* Needle */}
            <motion.g
                style={{ transformOrigin: `${center}px ${center}px` }}
                // animate={onHover ? "hover" : "idle"}
                variants={needleVariants}
            >
                {/* West side filled */}
                <polygon
                    points={`
            ${center},${center - needleWidth / 2} 
            ${center - radius},${center} 
            ${center},${center + needleWidth / 2}
          `}
                    fill={getColor(needleColor)}
                />

                {/* East side outlined */}
                <polygon
                    points={`
            ${center},${center - needleWidth / 2} 
            ${center + radius},${center} 
            ${center},${center + needleWidth / 2}
          `}
                    fill="none"
                    stroke={getColor(needleOutlineColor)}
                    strokeWidth={2}
                />

                {/* Center pin */}
                <circle
                    cx={center}
                    cy={center}
                    r={6}
                    fill={getColor(centerPinColor)}
                    stroke="white"
                    strokeWidth={1}
                />
            </motion.g>
        </motion.svg>
    );
};

export default Compass;
