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
      <main className="flex justify-center flex-col items-center mt-4">
          <div className="w-6/6 flex"> {/* Add the "flex" class here */}
            <div className="w-3/6">
              <h1 className="text-2xl font-bold mb-4 text-left">Vinícius Gabriel</h1>
            </div>
            <div className="w-3/6">
              teste
            </div>
          </div>

          <div>
            <h3 className="mt-4"><b className="underline">Back-End Developer</b> - Um profissional completo. Com conhecimentos em <b className="underline">Front</b>, <b className="underline">Redes</b> e <b className="underline">Devops</b></h3>
          </div>
      </main>
    </motion.div>
  );
}