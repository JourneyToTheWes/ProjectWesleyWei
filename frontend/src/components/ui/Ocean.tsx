import { motion } from "framer-motion";

interface OceanProps {
    width?: number | string;
    height?: number | string;
}

const Ocean: React.FC<OceanProps> = ({ width = 160, height = 160 }) => {
    return (
        <div style={{ width, height }} className="relative">
            <svg
                viewBox="0 0 200 200"
                className="absolute inset-0 w-full h-full"
                xmlns="http://www.w3.org/2000/svg"
            >
                {[0, 1, 2].map((i) => (
                    <motion.path
                        key={i}
                        d={`M0 ${80 + i * 10} Q50 ${70 + i * 10} 100 ${
                            80 + i * 10
                        } T200 ${80 + i * 10}`}
                        stroke="rgba(0,123,255,0.4)"
                        strokeWidth="2"
                        fill="transparent"
                        animate={{ x: [0, -20, 0] }} // horizontal loop
                        transition={{
                            repeat: Infinity,
                            repeatType: "loop",
                            duration: 4 + i,
                            ease: "easeInOut",
                        }}
                    />
                ))}
            </svg>
        </div>
    );
};

export default Ocean;
