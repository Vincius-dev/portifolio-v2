"use client"

import { motion } from "framer-motion";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import NavLink from "./NavLink";
import { ThemeToggle } from "./ThemeToggle";

const links = [
  { url: "/", title: "Home" },
  { url: "/projects", title: "Projects" },
  { url: "/about", title: "About" },
  { url: "/experience", title: "Experience" },
];

const Navbar = () => {

  const [open, setOpen] = useState(false);
  const [selectedTab, setSelectedTab] = useState<string | null>(null);

  const topVariants = {
    closed: {
      rotate: 0,
    },
    opened: {
      rotate: 45,
      backgroundColor: "rgb(255,255,255)",
    },
  };
  const centerVariants = {
    closed: {
      opacity: 1,
    },
    opened: {
      opacity: 0,
    },
  };

  const bottomVariants = {
    closed: {
      rotate: 0,
    },
    opened: {
      rotate: -45,
      backgroundColor: "rgb(255,255,255)",
    },
  };

  const listVariants = {
    closed: {
      x: "100vw",
    },
    opened: {
      x: 0,
      transition: {
        when: "beforeChildren",
        staggerChildren: 0.2,
      },
    },
  };

  const listItemVariants = {
    closed: {
      x: -10,
      opacity: 0,
    },
    opened: {
      x: 0,
      opacity: 1,
    },
  };

  return (
    <div className='h-full flex items-center justify-between px-4 sm:px-8 md:px-12 lg:px-20 xl:px-48 text-xl'>

      <div className="hidden md:flex gap-4 w-2/4">
        {links.map(link => (
          <div
            key={link.title}
            onMouseEnter={() => setSelectedTab(link.title)}
            onMouseLeave={() => {
              setTimeout(() => {
                setSelectedTab("/");
              }, 10000);
            }}
          >
            {selectedTab !== link.title && (
              <motion.div className="rounded-xl p-2">
                <NavLink link={link} key={link.title} />
              </motion.div>
            )}
            {selectedTab === link.title && (
              <motion.div
                className="rounded-xl p-2 navlink"
                layoutId="navlink"
                transition={{ type: 'spring', bounce: 0.35, duration: 1 }}
              >
                <NavLink link={link} />
              </motion.div>
            )}
          </div>
        ))}
      </div>
      <div className="md:hidden lg:flex xl:w-1/4 xl:justify-center">
        <motion.div
          className="inline-block"
          whileHover={{ scale: 1.2 }}
          whileTap={{ scale: 0.9 }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          <Link
            href="/"
            className="text-sm bg-black dark:bg-purple-700 rounded-xl p-2 font-semibold flex items-center justify-center"
          >
            <span className="text-white mr-1">Vinicius</span>
            <span className="w-12 h-8 rounded-lg bg-white text-black dark:bg-black dark:text-white flex items-center justify-center">dev</span>
          </Link>
        </motion.div>

      </div>

      {/* SOCIAL */}
      <div className="hidden md:flex gap-4 w-1/4">
        <Link href="https://github.com/Vincius-dev">
          <Image src="/github.png"  alt="" className="bg-white rounded-xl" width={24} height={24} />
        </Link>
        <Link href="https://www.linkedin.com/in/vin%C3%ADcius-gabriel-8336321b6/">
          <Image src="/linkedin.png" alt="" width={24} height={24} />
        </Link>
        <div className="ml-6"></div>
        <ThemeToggle />
      </div>

      {/* RESPONSIVE MENU */}
      <div className="md:hidden inline-flex">
        <div className="mr-10">
          <ThemeToggle  />
        </div>

        <button
          className="w-10 h-8 flex flex-col justify-between z-50 relative"
          onClick={() => { setOpen(!open) }}
        >
          <motion.div
            variants={topVariants}
            animate={open ? "opened" : "closed"}
            className="w-10 h-1 bg-black dark:bg-purple-700 rounded origin-left"
          ></motion.div>
          <motion.div
            variants={centerVariants}
            animate={open ? "opened" : "closed"}
            className="w-10 h-1 bg-black dark:bg-purple-700 rounded"
          ></motion.div>
          <motion.div
            variants={bottomVariants}
            animate={open ? "opened" : "closed"}
            className="w-10 h-1 bg-black dark:bg-purple-700 rounded origin-left"
          ></motion.div>
        </button>

        {open &&
          (
            <motion.div
              variants={listVariants}
              initial="closed"
              animate="opened"
              className="absolute top-0 left-0 w-screen h-screen bg-black dark:bg-purple-700 text-white flex flex-col items-center justify-center gap-8 text-4xl z-40"
            >
              {links.map((link) => (
                <motion.div
                  variants={listItemVariants}
                  key={link.title}
                >
                  <Link href={link.url}>{link.title}</Link>
                </motion.div>
              ))}
            </motion.div>
          )
        }
      </div>
    </div>
  )
}

export default Navbar;