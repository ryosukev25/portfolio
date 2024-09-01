"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
    {
        name: 'home',
        path: '/',
    },

    {
        name: 'service',
        path: '/services',
    },

    {
        name: 'resume',
        path: '/resume',
    },

    {
        name: 'work',
        path: '/work',
    },

]

const Navbar = () => {
    const pathname = usePathname();
    return (
        <nav className="flex gap-8 items-center">
            {links.map((link, index) => {
                return (
                    <Link
                        href={link.path}
                        key={index}
                        className={`${link.path === pathname && "text-blue-500 border-b-2 border-blue-500"}
                            capitalize font-medium hover:text-blue-500 transition-all`}
                            >{link.name}
                    </Link>
                )
            })}
        </nav>
    )
}

export default Navbar