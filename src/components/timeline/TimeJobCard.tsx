"use client"

import { useTranslations } from "next-intl";
import Image from "next/image";

interface CardProps {
    title: string;
    subtitle: string;
    icon: string;
    year: string;
    description: string;
    isFirst: boolean;
}

const TimeJobCard: React.FC<CardProps> = ({ title, subtitle, icon, year, description, isFirst }) => {

    const e = useTranslations('experience');

    return (
        <li className="mb-10 w-5/6 sm:w-5/6 md:w-4/6 lg:w-4/6 p-3 rounded-e-2xl bg-slate-600 dark:bg-purple-900">
            <span className="absolute flex items-center justify-center w-8 h-8 bg-blue-100 rounded-full -start-5 ring-8 ring-black dark:ring-purple-800 dark:bg-purple-300">
                <Image src={icon} alt="tech-image" width={64} height={64} />
                <p className="absolute text-md mr-96 sm:mr-28 md:mr-28 lg:mr-28 font-semibold text-white bg-black dark:text-white dark:bg-purple-700 rounded-xl p-2">{year}</p>
            </span>
            <h3 className="ml-4 mb-1 text-lg  font-extrabold dark:text-purple-600">
                <div className="flex justify-between items-center w-full">
                    <span>
                        {title}
                        {isFirst && (
                            <span className="bg-black text-white text-sm font-medium me-2 px-2.5 py-0.5 rounded dark:bg-purple-700 dark:text-white ms-3">
                                {e('current')}
                            </span>
                        )}
                    </span>
                    <div className="relative flex justify-between items-end">

                        <span className="bg-black text-white text-sm font-medium me-2 px-2.5 py-0.5 rounded dark:bg-purple-700 dark:text-white ms-3">
                            {e('job')}
                        </span>
                    </div>
                </div>
            </h3>
            <time className="block mb-2 ml-4 text-sm font-normal leading-none text-gray-400 dark:text-gray-300">
                {subtitle}
            </time>
            <p className="mb-4 ml-4 text-justify text-md font-normal text-white dark:text-white">
                {description}
            </p>
        </li>
    )
}

export default TimeJobCard;