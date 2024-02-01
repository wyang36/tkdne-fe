'use client';

import { usePathname } from 'next/navigation'

export default function Menu() {
    const pathname = usePathname()
    return (
        <nav className="bg-white border-gray-200 dark:bg-gray-900">
          <div className="flex flex-wrap items-center justify-end p-2">
            <div className="w-full md:block md:w-auto" id="navbar-default">
              <ul className="font-medium flex justify-center">
                <li>
                  <a href="/" className={`block py-2 px-3 text-${pathname === '/' ? 'blue-500' : 'white'} rounded hover:text-blue-600`} aria-current="page">Home</a>
                </li>
                <li>
                  <a href="/about" className={`block py-2 px-3 text-${pathname === '/about' ? 'blue-500' : 'white'} rounded hover:text-blue-600` }>About</a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
        )
}