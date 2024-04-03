"use client"

import { motion } from "framer-motion";

export default function Home() {
  return (

    <motion.div
      className="h-full"
      initial={{ y: "-200vh" }}
      animate={{ y: "0%" }}
      transition={{ duration: 1 }}
    >
      <main className="flex flex-col">
        <div className="1/2 relative"></div>
        <div className="1/2"></div>
      </main>
    </motion.div>
  );
}
