"use client"

import Image from "next/image";
import Link from "next/link";
import { Reveal } from "./Reveal";
import { useTranslations } from "next-intl";
import { Button } from "./ui/button";

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
        <div className="lg:ml-24 m-4 text-justify">
            <Reveal>
                <h1 className="text-2xl hover:underline p-2 font-bold text-black dark:text-purple-700  ">
                    {title}
                </h1>
            </Reveal>
            <div className="w-5/6 h-80 sm:h-72 md:h-72 lg:h-72 rounded-3xl shadow-md shadow-black dark:shadow-purple-600 inline-flex">
                <div className="lg:w-2/4 md:w-2/4 sm:w-1/4 rounded-l-3xl bg-slate-800 " style={{ backgroundImage: `url(${image})`, backgroundSize: 'cover', backgroundPosition: 'center', boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.25)' }}>
                    <p></p>
                </div>
                <div className="lg:w-2/4 md:w-2/4 sm:w-3/4 p-4 sm:text-sm rounded-l-3xl sm:rounded-l-none md:rounded-l-none lg:rounded-l-none  rounded-r-3xl  bg-slate-600 dark:black text-white">
                    <Reveal>
                        <Link href={repoLink}> <Button className="mt-4 text-white text-lg dark:text-white dark:bg-purple-700 rounded-xl p-2 hover:underline"> {p('repository-title')} </Button></Link>
                    </Reveal>
                    <Reveal>
                        <Link href={prodLink}> <Button className="mt-4 text-white text-lg dark:text-white dark:bg-purple-700 rounded-xl p-2 hover:underline"> {p('project-execution-title')}  </Button></Link>
                    </Reveal>
                    <Reveal>
                        <p className="mt-4">{about}</p>
                    </Reveal>
                    <div className="mt-2 inline-flex bottom">
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