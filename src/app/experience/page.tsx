"use client"

import { motion } from "framer-motion";

const ExperiencePage = () => {
    return (
        <motion.div
            className="h-full"
            initial={{ y: "-200vh" }}
            animate={{ y: "0%" }}
            transition={{ duration: 1 }}
        >
            <div className=''>Contact</div>
        </motion.div>
    )
}

export default ExperiencePage;