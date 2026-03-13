import { motion, useMotionValue, useSpring } from "framer-motion";
import { useRef } from "react";

interface InteractiveHoverProps {
    size: number;
    children: React.ReactNode;
}

const InteractiveHover: React.FC<InteractiveHoverProps> = ({
    size,
    children,
}) => {
    const ref = useRef<HTMLDivElement>(null);

    const rotateX = useMotionValue(0);
    const rotateY = useMotionValue(0);

    const springX = useSpring(rotateX, { stiffness: 200, damping: 20 });
    const springY = useSpring(rotateY, { stiffness: 200, damping: 20 });

    const handleMouseMove = (e: React.MouseEvent) => {
        if (!ref.current) return;

        const rect = ref.current.getBoundingClientRect();
        const centerX = rect.left + rect.width / 2;
        const centerY = rect.top + rect.height / 2;

        const offsetX = e.clientX - centerX;
        const offsetY = e.clientY - centerY;

        const strength = 20;

        rotateX.set((-offsetY / rect.height) * strength);
        rotateY.set((offsetX / rect.width) * strength);
    };

    const reset = () => {
        rotateX.set(0);
        rotateY.set(0);
    };

    return (
        <div
            className="perspective-[800px]"
            style={{ width: size, height: size }}
        >
            <motion.div
                ref={ref}
                onMouseMove={handleMouseMove}
                onMouseLeave={reset}
                style={{
                    rotateX: springX,
                    rotateY: springY,
                    transformStyle: "preserve-3d",
                }}
                whileHover={{ scale: 1.03 }}
                className="w-full h-full"
            >
                {children}
            </motion.div>
        </div>
    );
};

export default InteractiveHover;
