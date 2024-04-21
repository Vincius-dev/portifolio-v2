"use client"

import { link } from "@/constants/link";
import Link from "next/link";
import { usePathname } from "next/navigation";

const NavLink = ({link}: link) => {
    const pathName = usePathname();

    console.log(pathName);

    return (
        <Link 
         className={`rounded-xl p-2 ${pathName === link.url && "bg-black text-white dark:bg-purple-700"}`} 
         href={link.url}> 
            {link.title}
        </Link>
    )
}

export default NavLink;