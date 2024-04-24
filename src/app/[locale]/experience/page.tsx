"use client"

import TimeCertCard from "@/components/timeline/TimeCertCard";
import TimeCourseCard from "@/components/timeline/TimeCourseCard";
import TimeJobCard from "@/components/timeline/TimeJobCard";
import TimeUniversityCard from "@/components/timeline/TimeUniversityCard";
import { motion } from "framer-motion";
import { useTranslations } from "next-intl";

const ExperiencePage = () => {
    const e = useTranslations("experience")
    
    return (
        <motion.div
            className="h-full"
            initial={{ x: "-200vw" }}
            animate={{ x: "0%" }}
            transition={{ duration: 1 }}
        >
            <main className=" mt-10 px-4 pb-4 sm:px-8 md:px-12 lg:px-20 xl:px-48">
                <ol className="relative lg:inset-x-40 md:lg:inset-x-44 inset-x-12 border-s-8 border-black dark:border-purple-800 rounded-sm">
                    <li>
                        <p className="p-4"> </p>
                    </li>
                    <motion.div
                        initial={{ opacity: 0, x: "-100vw" }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 1, delay: 1 }}
                    >
                        <TimeCertCard
                            title={e("cert-1-title")}
                            subtitle={e("cert-1-subtitle")}
                            icon="/icons/efset.png"
                            year="2024"
                            description={e("cert-1-description")}
                        />
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0, x: "-100vw" }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 1, delay: 1 }}
                    >
                        <TimeUniversityCard
                            title={e("university-1-title")}
                            subtitle={e("university-1-subtitle")}
                            icon="/icons/degree.png"
                            year="2024"
                            description={e("university-1-description")}
                        />
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0, x: "-100vw" }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 1, delay: 1 }}
                    >
                        <TimeJobCard
                            title={e("job-1-title")}
                            subtitle={e("job-1-subtitle")}
                            icon="/icons/java.png"
                            year="2023"
                            description={e("job-1-description")}
                            isFirst={true}
                        />
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0, x: "-100vw" }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 1, delay: 1.4 }}
                    >
                        <TimeJobCard
                            title={e("job-2-title")}
                            subtitle={e("job-2-subtitle")}
                            icon="/icons/linux.png"
                            year="2021"
                            description={e("job-2-description")}
                            isFirst={false}
                        />
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0, x: "-100vw" }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 1, delay: 1.6 }}
                    >
                        <TimeCourseCard
                            title={e("course-1-title")}
                            subtitle={e("course-1-subtitle")}
                            icon="/icons/networks.png"
                            year="2020"
                            description={e("course-1-description")}
                        />
                    </motion.div>
                    <li>
                        <p className="p-4"></p>
                    </li>
                </ol>
            </main>
        </motion.div>
    )
}

export default ExperiencePage;