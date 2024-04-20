"use client"

import { Button, buttonVariants } from "@/components/ui/button";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <motion.div
      className="h-full"
      initial={{ y: "-200vh" }}
      animate={{ y: "0%" }}
      transition={{ duration: 1 }}
    >
      <main className="flex justify-center flex-col items-center mt-10 px-4 sm:px-8 md:px-12 lg:px-20 xl:px-48">
        <div className="w-full flex flex-col sm:flex-row justify-center items-center">
          <div className="w-2/5 items-center sm:w-full">
            <Image src="/perfil.jpeg" alt="Profile Picture" width={450} height={450} className="rounded-2xl lg:mx-auto md:lg:mx-auto sm:n-2" /> {/* Add mx-auto class to center the image */}
          </div>
          <div className="w-4/5 sm:w-4/5 text-lg md:text-xl xl:text-2xl sm:text-sm">
            <h1 className="xl:text-5xl sm:text-lg md:text-2xl font-bold m-4 text-left">Vinícius Gabriel</h1>
            <h3 className="m-4 text-left"><b className="underline dark:text-purple-600">Back-End Developer</b> - Java / Spring Boot</h3>
            <h3 className="m-4 text-left">Sou um <b className="underline dark:text-purple-600">profissional completo</b>, além de back-end<p></p> possuo conhecimentos em <b className="underline dark:text-purple-600">Front</b>, <b className="underline dark:text-purple-600">Redes</b> e <b className="underline dark:text-purple-600">Devops</b></h3>
            <h3 className="m-4 text-left">Conheça meus projetos: <Button><Link href="/projects">Projetos</Link></Button>
          </h3>
        </div>
      </div>
    </main>
    </motion.div >
  );
}
