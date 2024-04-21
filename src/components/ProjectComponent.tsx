"use client"

import Image from "next/image";
import Link from "next/link";

interface ProjectProps {
    image: string;
    title: string;
    repoLink: string;
    prodLink: string;
    about: string;
    technologies: string[];
}

const ProjectComponent: React.FC<ProjectProps> = ({ image, title, repoLink, prodLink, about, technologies }) => {
    return (
        <div className="ml-24">
            <h1 className="text-2xl hover:underline p-2 font-bold text-black dark:text-purple-700  ">
                {title}
            </h1>
            <div className="w-5/6 h-72 rounded-3xl shadow-md shadow-black dark:shadow-purple-600 inline-flex">
                <div className="w-2/4 rounded-l-3xl bg-slate-800 " style={{ backgroundImage: `url(${image})`, backgroundSize: 'cover', backgroundPosition: 'center', boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.25)' }}>
                    <p></p>
                </div>
                <div className="w-2/4 p-4 rounded-r-3xl bg-black dark:black text-white">
                    <p className="mt-4 text-blue-500 dark:text-purple-600 hover:underline"><Link href={repoLink}> Repositório do projeto. </Link></p>
                    <p className="mt-4 text-blue-500 dark:text-purple-600 hover:underline"><Link href={prodLink}> Projeto em execução. </Link></p>
                    <p className="mt-4">{about}</p>
                    <div className="mt-6 inline-flex">
                        {technologies.map(tech =>
                            <Image key={tech} src={tech} alt="tech-image" width={44} height={44} />
                        )}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProjectComponent;