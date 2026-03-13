export const getContainerVariants = (staggerChildren: number = 0.15) => ({
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: staggerChildren,
        },
    },
});

export const getContainerChildVariants = (duration: number = 0.5) => ({
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration } },
});
