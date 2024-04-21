"use client";

import ProjectComponent from "@/components/ProjectComponent";
import { motion } from "framer-motion";

const ProjectsPage = () => {

    return (
        <motion.div
            className="h-full"
            initial={{ x: "-200vw" }}
            animate={{ x: "0%" }}
            transition={{ duration: 1 }}
        >
            <main className="justify-center px-4 sm:px-8 md:px-12 lg:px-20 xl:px-48">
                <ProjectComponent
                    title="Calculadora de Sistemas Lineares" 
                    about="Uma calculadora que resolve sistemas lineares de n variaveis. O usuário pode inserir os coeficientes das equações e o programa retorna a solução do sistema."
                    image="/projects/linear-system-calc.png" 
                    repoLink="https://github.com/Vincius-dev/linear-systems-calc"
                    prodLink="https://linear-systems-calc.vercel.app/calc/linear-system"
                    technologies={["/icons/ts.png", "/icons/next.png", "/icons/react.png"]}
                />
                
                <ProjectComponent 
                    title="Projeto Gerenciador de festas de aniversários"
                    about="Um projeto de gerenciamento de festas de aniversário. O usuário pode criar, editar e excluir festas, além de visualizar as festas já criadas."
                    image="/projects/imagem-exemplo.png" 
                    prodLink="prodLink"
                    repoLink=""
                    technologies={["/icons/java.png", "/icons/spring-boot.png", "/icons/react.png", "/icons/next.png",
                    "/icons/ts.png", "/icons/mongodb.png"]}
                />
            </main>
        </motion.div>
    );
};

export default ProjectsPage;
