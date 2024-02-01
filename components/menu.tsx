'use client'

import { usePathname } from 'next/navigation'
import Link from "next/link";


export default function Menu() {
    const pathname = usePathname()

    return (
        <nav>
            <div className="flex flex-wrap items-center justify-end p-2">
                <div className="w-full md:block md:w-auto" id="navbar-default">
                    <ul className="font-medium flex justify-center">
                        <li>
                            <Link href="/" className={`block py-2 px-3 text-${pathname === '/' ? 'blue-500' : 'white'} rounded hover:text-blue-600`} aria-current="page">Home</Link>
                        </li>
                        <li>
                            <Link href="/about" className={`block py-2 px-3 text-${pathname === '/about' ? 'blue-500' : 'white'} rounded hover:text-blue-600`}>About</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}