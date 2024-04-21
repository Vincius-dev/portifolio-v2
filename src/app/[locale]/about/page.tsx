"use client"

import { Reveal } from "@/components/Reveal";
import { motion } from "framer-motion";
import { useTranslations } from "next-intl";

const AboutPage = () => {

    const a = useTranslations('about');

    return (
        <motion.div
            className="h-full"
            initial={{ x: "-200vw" }}
            animate={{ x: "0%" }}
            transition={{ duration: 1 }}
        >
            <div className='justify-center text-justify text-xl px-4 m-4 pb-4 sm:px-8 md:px-12 lg:px-20 xl:px-48'>
                <Reveal><p className="mt-2 text-4xl font-bold"> {a('title')} </p></Reveal>
                <Reveal><p className="mt-2">{a('text-1')}</p></Reveal>
                <Reveal><p className="mt-2">{a('text-2')}</p></Reveal>
                <Reveal><p className="mt-2">{a('text-3')}</p></Reveal>
                <Reveal><p className="mt-2">{a('text-4')}</p></Reveal>
                <Reveal><p className="mt-2">{a('text-5')}</p></Reveal>
                <Reveal><p className="mt-2">{a('text-6')}</p></Reveal>
            </div>
        </motion.div>
    )
}

export default AboutPage;