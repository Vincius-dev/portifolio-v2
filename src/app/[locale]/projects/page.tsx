"use client";

import ProjectComponent from "@/components/ProjectComponent";
import { motion } from "framer-motion";
import { useTranslations } from "next-intl";

const ProjectsPage = () => {
    const p = useTranslations('projects');

    return (
        <motion.div
            className="h-full"
            initial={{ x: "-200vw" }}
            animate={{ x: "0%" }}
            transition={{ duration: 1 }}
        >
            <main className="justify-center px-4 sm:px-8 md:px-12 lg:px-20 xl:px-48">
                <ProjectComponent
                    title={p('linear-system-title')} 
                    about={p('linear-system-description')} 
                    image="/projects/linear-system-calc.png" 
                    repoLink="https://github.com/Vincius-dev/linear-systems-calc"
                    prodLink="https://linear-systems-calc.vercel.app/calc/linear-system"
                    technologies={["/icons/ts.png", "/icons/next.png", "/icons/react.png"]}
                />
                
                <ProjectComponent 
                    title={p('party-manager-title')} 
                    about={p('party-manager-description')} 
                    image="/projects/imagem-exemplo.png" 
                    repoLink="https://github.com/Vincius-dev/linear-systems-calc"
                    prodLink="https://linear-systems-calc.vercel.app/calc/linear-system"
                    technologies={["/icons/java.png", "/icons/spring-boot.png", "/icons/react.png", "/icons/next.png",
                    "/icons/ts.png", "/icons/mongodb.png"]}
                />
            </main>
        </motion.div>
    );
};

export default ProjectsPage;
