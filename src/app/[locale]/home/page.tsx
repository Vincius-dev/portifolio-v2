"use client"

import { Reveal } from "@/components/Reveal";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import {useTranslations} from 'next-intl';
import Image from "next/image";
import Link from "next/link";

export default function Home() {

  const t = useTranslations('home');
  const c = useTranslations('commons');

  return (
    <motion.div
      className="h-full"
      initial={{ x: "-200vw" }}
      animate={{ x: "0%" }}
      transition={{ duration: 1 }}
    >
      <main className="flex justify-center flex-col items-center mt-10 px-4 sm:px-8 md:px-12 lg:px-20 xl:px-48">
        <div className="w-full flex flex-col sm:flex-row justify-center items-center">
          <div className="w-2/5 items-center sm:w-full">
            <Image src="/perfil.jpeg" alt="Profile Picture" width={450} height={450} className="rounded-2xl lg:mx-auto md:lg:mx-auto sm:n-2" /> {/* Add mx-auto class to center the image */}
          </div>
          <div className="w-4/5 sm:w-4/5 text-lg md:text-xl xl:text-2xl sm:text-sm">
            <Reveal>
              <div>
                <h1 className="xl:text-5xl sm:text-lg md:text-2xl font-bold m-4 text-left">Vinícius Gabriel</h1>
              </div>
            </Reveal>
            <Reveal>
              <div>
                <h3 className="m-4 text-left"><b className="underline dark:text-purple-600">{t('text-1-p1')}</b> {t('text-1-p2')}</h3>
              </div>
            </Reveal>
            <Reveal>
              <div>
                <h3 className="m-4 text-pretty"> {t('text-2-p1')} 
                  <b className="underline dark:text-purple-600">{t('text-2-p2')}</b>
                  {t('text-2-p3')}
                  <b className="underline dark:text-purple-600">{t('text-2-p4')}</b>
                  , 
                  <b className="underline dark:text-purple-600">{t('text-2-p5')}</b>
                  {t('text-2-p6')} 
                  <b className="underline dark:text-purple-600">{t('text-2-p7')}</b>
                  .
                </h3>
              </div>
            </Reveal>
            <Reveal>
              <div>
                <h3 className="m-4 text-left"> {t('text-3')} <motion.div
                  className="inline-block"
                  whileHover={{ scale: 1.3 }}
                  whileTap={{ scale: 0.9 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <Button>
                    <Link href="projects">{c('projects')}</Link>
                  </Button>
                </motion.div>
                </h3>
              </div>
            </Reveal>
          </div>
        </div>
      </main>
    </motion.div>
  );
}
