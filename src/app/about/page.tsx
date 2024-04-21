"use client"

import { Reveal } from "@/components/Reveal";
import { motion } from "framer-motion";

const AboutPage = () => {
    return (
        <motion.div
            className="h-full"
            initial={{ y: "-200vh" }}
            animate={{ y: "0%" }}
            transition={{ duration: 1 }}
        >
            <div className='justify-center text-justify text-xl px-4 mt-4 sm:px-8 md:px-12 lg:px-20 xl:px-48'>
                <Reveal><p className="mt-2 text-4xl font-bold">Minha História:</p></Reveal>
                <Reveal><p className="mt-2">Meu nome é Vinícius e sou apaixonado por tecnologia, musica, jogos e o universo geek como um todo, com certa frequência acabo pegando um jogo ou um anime para assistir, um dos meus hobbies é traduzir alguns destes do inglês para o português gratuítamente, para permitir que outros leitores também consigam apreciar essas obras.</p></Reveal>
                <Reveal><p className="mt-2">Iníciei meus estudos na computação em meados de 2018, durante o primeiro ano do ensino médio, onde comecei a cursar o técnico de desenvolvimento de sistemas. Nessa época além das aulas do colégio, também comecei a acompanhar as aulas dos mestre Guanabara(canal no youtube Curso em Vídeo), já molhando a mão com python, html, css e js.</p></Reveal>
                <Reveal><p className="mt-2">Durante os anos fui apreendendo várias coisas. Logo que terminei o ensino médio, iniciei minha carreira profissional como analista de suporte e simultaneamente começei na faculdade de ciências da computação. O trabalho me ajudou a fixar vários conhecimentos de redes que eu já possuia, além de me ajudar muito a melhorar minha comunicação, pois tinha que lidar com diversos clientes diariamente, e eu sempre tive uma certa timides.</p></Reveal>
                <Reveal><p className="mt-2">Com o decorrer dos semestres trabalhando e estudando, comecei a procurar oportunidades para trabalhar na área de desenvolvimento e em 2023 inicei como desenvolvedor java junior, o que me ajudou a direcionar os meus estudos, e assim defini que seguiria no back-end com java e spring boot, nessa época já tinha um conhecimento geral sobre a área.</p></Reveal>
                <Reveal><p className="mt-2">Atualmente estou no 7° semestre de ciências da computação na Universidade São Judas Tadeu, onde adquiri conhecimentos técnicos referente aos processos da computação e do desenvolvimento como um todo, lógica, estruturas de dados, bancos de dados, IA e modelos de linguagem, javascript, nodejs, angular, python e java.</p></Reveal>
                <Reveal><p className="mt-2">E sigo estudando, iniciando novos projetos, as vezes dando continuidade em antigos, sempre evitando ficar estagnado.</p></Reveal>
            </div>
        </motion.div>
    )
}

export default AboutPage;