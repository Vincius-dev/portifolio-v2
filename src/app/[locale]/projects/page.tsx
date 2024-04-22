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
                    title={p('bot-notification-title')} 
                    about={p('bot-notification-description')} 
                    image="/projects/bot-notification.png" 
                    repoLink="https://github.com/Vincius-dev/bot-notification"
                    prodLink=""
                    technologies={["/icons/python.png", "/icons/docker.png", "/icons/mongodb.png"]}
                />
                <ProjectComponent
                    title={p('uno-java-title')} 
                    about={p('uno-java-description')} 
                    image="/projects/uno-java.png" 
                    repoLink="https://github.com/Vincius-dev/uno-java"
                    prodLink=""
                    technologies={["/icons/java.png", "/icons/linux.png"]}
                />
                <ProjectComponent
                    title={p('portifolio-v2-title')} 
                    about={p('portifolio-v2-description')} 
                    image="/projects/portfolio-v2.png" 
                    repoLink="https://github.com/Vincius-dev/portifolio-v2/"
                    prodLink="https://www.vinicius-dev.com/"
                    technologies={["/icons/next.png", "/icons/react.png", "/icons/ts.png", "/icons/tailwind.png"]}
                />
                <ProjectComponent
                    title={p('portifolio-v1-title')} 
                    about={p('portifolio-v1-description')} 
                    image="/projects/portfolio-v1.png" 
                    repoLink="https://github.com/Vincius-dev/site-portifolio"
                    prodLink="portifolio-viniciusg.vercel.app/"
                    technologies={["/icons/js.png", "/icons/react.png"]}
                />
                <ProjectComponent
                    title={p('corona-vapo-title')} 
                    about={p('corona-vapo-description')} 
                    image="/projects/corona-vapo.jpeg" 
                    repoLink="https://github.com/Vincius-dev/Game-CoronaVapo"
                    prodLink="https://github.com/Vincius-dev/Game-CoronaVapo/tree/Main1/Executaveis"
                    technologies={[]}
                />
                <ProjectComponent
                    title={p('medplus-title')} 
                    about={p('medplus-description')} 
                    image="/projects/medplus.png" 
                    repoLink="https://github.com/Vincius-dev/usjt_medplus_project_frontend"
                    prodLink="https://www.youtube.com/watch?v=gfEEJ9Umv1Q"
                    technologies={["/icons/node.png", "/icons/ts.png", "/icons/angular.png", "/icons/postgress.png"]}
                />
                <ProjectComponent 
                    title={p('party-manager-title')} 
                    about={p('party-manager-description')} 
                    image="/projects/festa-aniversario.png" 
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
