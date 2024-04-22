"use client"

import { motion } from "framer-motion";
import Image from "next/image";

const ExperiencePage = () => {
    return (
        <motion.div
            className="h-full"
            initial={{ y: "-200vh" }}
            animate={{ y: "0%" }}
            transition={{ duration: 1 }}
        >
            <main className="flex justify-center flex-col items-center mt-10 px-4 sm:px-8 md:px-12 lg:px-20 xl:px-48">
                <ol className="relative lg:inset-x-40 md:lg:inset-x-40 inset-x-12 border-s  border-gray-200 dark:border-gray-700 rounded-lg">
                    <li className="mb-10 border-x-y-4 ms-6">
                        <span className="absolute flex items-center justify-center w-8 h-8 bg-blue-100 rounded-full -start-3 ring-8 ring-dark dark:ring-purple-800 dark:bg-purple-300">
                            <Image src="/icons/java.png" alt="tech-image" width={64} height={64} />
                        </span>
                        <h3 className="flex ml-4 items-center mb-1 text-md font-semibold text-gray-900 dark:text-white">
                            Desenvolvedor Java Jr
                            <span className="bg-blue-100 text-blue-800 text-sm font-medium me-2 px-2.5 py-0.5 rounded dark:bg-purple-700 dark:text-white ms-3">
                                Atual
                            </span>
                        </h3>
                        <time className="block mb-2 ml-4 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
                            JGM Contabil - 2024 até o momento
                        </time>
                        <p className="mb-4 text-justify w-3/6 font-normal text-gray-500 dark:text-gray-400">
                            Desenvolvimento de aplicações Java, manutenção de sistemas, desenvolvimento de relatórios e integrações.
                        </p>
                    </li>
                    <li className="mb-10  ms-6">
                        <span className="absolute flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full -start-3 ring-8 ring-white dark:ring-purple-800 dark:bg-purple-600"></span>
                        <h3 className="mb-1 text-lg font-semibold text-gray-900 dark:text-white">Analista de Suporte</h3>
                        <time className="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">GinfoWork Informatica - 2022 - 2023</time>
                        <p className="text-justify font-normal w-3/6 text-gray-500 dark:text-gray-400">All of the pages and components are first designed in Figma and we keep a parity between the two versions even as we update the project.</p>
                    </li>
                    <li className="ms-6">
                        <span className="absolute flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full -start-3 ring-8 ring-white dark:ring-purple-800 dark:bg-purple-600">
                            <svg className="w-2.5 h-2.5 text-blue-800 dark:text-blue-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                            </svg>
                        </span>
                        <h3 className="mb-1 text-lg font-semibold text-gray-900 dark:text-white">Flowbite Library v1.2.2</h3>
                        <time className="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">Released on December 2nd, 2021</time>
                        <p className="text-justify font-normal w-3/6 text-gray-500 dark:text-gray-400">Get started with dozens of web components and interactive elements built on top of Tailwind CSS.</p>
                    </li>
                    
                </ol>
            </main>
        </motion.div>
    )
}

export default ExperiencePage;