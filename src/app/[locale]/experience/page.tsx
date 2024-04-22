"use client"

import TimeCertCard from "@/components/timeline/TimeCertCard";
import TimeCourseCard from "@/components/timeline/TimeCourseCard";
import TimeJobCard from "@/components/timeline/TimeJobCard";
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
            <main className=" mt-10 px-4 pb-4 sm:px-8 md:px-12 lg:px-20 xl:px-48">
                <ol className="relative lg:inset-x-40 md:lg:inset-x-44 inset-x-12 border-s-8 border-black dark:border-purple-800 rounded-lg">
                    <TimeJobCard
                        title="Java Developer - Jr"
                        subtitle="JGM Empresarial - 2024"
                        icon="/icons/java.png"
                        year="2024"
                        description="Certificação de especialista em Azure, com foco em desenvolvimento de aplicações e integrações."
                        isFirst={true}
                    />
                    <TimeCertCard
                        title="Azure Expert XXX"
                        subtitle="Azure - 2024"
                        icon="/icons/azure.png"
                        year="2024"
                        description="Certificação de especialista em Azure, com foco em desenvolvimento de aplicações e integrações." 
                        isFirst={false}
                    />
                    <TimeJobCard
                        title="Java Developer - Jr"
                        subtitle="JGM Empresarial - 2024"
                        icon="/icons/java.png"
                        year="2024"
                        description="Certificação de especialista em Azure, com foco em desenvolvimento de aplicações e integrações."
                        isFirst={false}
                    />
                    <TimeCourseCard 
                        title="Azure Expert XXX"
                        subtitle="Azure - 2024"
                        icon="/icons/azure.png"
                        year="2024"
                        description="Certificação de especialista em Azure, com foco em desenvolvimento de aplicações e integrações." 
                        isFirst={false}
                    />
                </ol>
            </main>
        </motion.div>
    )
}

export default ExperiencePage;