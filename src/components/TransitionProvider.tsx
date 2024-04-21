"use client"


import { AnimatePresence, motion } from "framer-motion"
import Navbar from "./NavBar";
import { usePathname } from "next/navigation";
import { useTranslations } from "next-intl";

interface TransitionProviderProps {
    children: React.ReactNode;
    locale: string;
}

const TransitionProvider: React.FC<TransitionProviderProps> = ({ children, locale }) => {

    const pathName = usePathname();
    const trimmedPathName = pathName.substring(pathName.lastIndexOf('/') + 1);
    const c = useTranslations('commons');

    return (
        <AnimatePresence mode="wait">
            <div key={pathName} className="w-screen h-screen">
                <motion.div
                    className="w-screen h-screen fixed bg-black dark:bg-purple-700 rounded-b-[100px] z-40"
                    animate={{ height: "0vh" }}
                    exit={{ height: "140vh" }}
                    transition={{ duration: 1, ease: "easeOut" }}
                />

                <motion.div
                    className="fixed m-auto top-0 bottom-0 left-0 right-0 text-white text-8xl cursor-default z-50 w-fit h-fit"
                    initial={{ opacity:1 }}
                    animate={{ opacity:0 }}
                    exit={{ opacity:0 }}
                    transition={{ duration: 1, ease: "easeOut" }}
                >
                    {c(trimmedPathName)}
                </motion.div>

                <motion.div
                    className="w-screen h-screen fixed dark:bg-purple-700 rounded-t-[100px] bottom-0 z-30"
                    initial={{ height: "140vh" }}
                    animate={{ height:"0vh"}}
                    transition={{ duration: 1, delay:0.5, ease: "easeOut" }}
                />
                <div className="h-24">
                    <Navbar locale={locale}/>
                </div>
                <div className="h-[calc(100vh-6rem)]">{children}</div>
            </div>
        </AnimatePresence>
    )
}

export default TransitionProvider;