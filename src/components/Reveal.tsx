
import { motion, useAnimation, useInView } from "framer-motion";
import { useEffect, useRef } from "react";

interface Props {
    children: JSX.Element;
    width?: "fit-content" | "100%";
}

export const Reveal = ({ children, width = "fit-content"}: Props) => {
    const ref = useRef(null);
    const isInView = useInView(ref, {once: true});

    const mainControls = useAnimation();
    const slideControls = useAnimation();

    useEffect(() => {
        if (isInView) {
            mainControls.start("visible");
            slideControls.start("visible");
        }
    }, [isInView]);

    return (
    <div ref={ref} style={{position: "relative", width, overflow: "hidden"}}>
        <motion.div
            variants={{
                hidden: {opacity: 0, y: 75},
                visible: {opacity: 1, y: 0},
            }}
            initial="hidden"
            animate={mainControls}
            transition={{duration: 0.5, delay:1}}
        >
            {children}
        </motion.div>
        <motion.div
            variants={{
                hidden: {left: 0 },
                visible: {left: "100%" }
            }}
            initial="hidden"
            animate={slideControls}
            transition={{duration: 0.5, delay:0.7, ease: "easeInOut"}}
            className="z-20 absolute top-0 left-0 w-full h-full bg-black dark:bg-purple-700"
        >
        </motion.div>
    </div>
    );
};