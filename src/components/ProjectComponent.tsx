"use client"

import Image from "next/image";
import Link from "next/link";
import { Reveal } from "./Reveal";
import { useTranslations } from "next-intl";

interface ProjectProps {
    image: string;
    title: string;
    repoLink: string;
    prodLink: string;
    about: string;
    technologies: string[];
}

const ProjectComponent: React.FC<ProjectProps> = ({ image, title, repoLink, prodLink, about, technologies }) => {

    const p = useTranslations('projects');

    return (
        <div className="lg:ml-24 m-4">
            <Reveal>
                <h1 className="text-2xl hover:underline p-2 font-bold text-black dark:text-purple-700  ">
                    {title}
                </h1>
            </Reveal>
            <div className="w-5/6 h-72 rounded-3xl shadow-md shadow-black dark:shadow-purple-600 inline-flex">
                <div className="lg:w-2/4 md:w-2/4 sm:w-1/4 rounded-l-3xl bg-slate-800 " style={{ backgroundImage: `url(${image})`, backgroundSize: 'cover', backgroundPosition: 'center', boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.25)' }}>
                    <p></p>
                </div>
                <div className="lg:w-2/4 md:w-2/4 sm:w-3/4 p-4 sm:text-sm rounded-l-3xl sm:rounded-l-none md:rounded-l-none lg:rounded-l-none  rounded-r-3xl  bg-gray-800 dark:black text-white">
                    <Reveal>
                        <p className="mt-4 text-blue-500 dark:text-purple-600 hover:underline"><Link href={repoLink}> {p('repository-title')} </Link></p>
                    </Reveal>
                    <Reveal>
                        <p className="mt-4 text-blue-500 dark:text-purple-600 hover:underline"><Link href={prodLink}> {p('project-execution-title')} </Link></p>
                    </Reveal>
                    <Reveal>
                        <p className="mt-4">{about}</p>
                    </Reveal>
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