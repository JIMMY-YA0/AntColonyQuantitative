'use client'
import Image from 'next/image'
import React from 'react'
import logo1 from '../../public/images/logo1.png'
import Link from 'next/link'
import { useState } from 'react'

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false)
  return (
    <nav className="sticky z-20 top-0 left-0 right-0 bg-black bg-opacity-30 min-h-[52px] px-8 py-3 text-white">
      <div className="flex justify-between md:justify-around items-center">
        {/* Navbar Start */}
        <div className="flex justify-center items-center gap-6">
          <Image src={logo1} alt="Logo" width={128} />
          <div className="hidden md:inline-flex justify-center items-center">
            <Link href="/" className="px-1 md:px-3 py-2">
              Home
            </Link>
            <Link href="/" className="px-1 md:px-3 py-2">
              Invertment Plan
            </Link>
            <Link href="/" className="px-1 md:px-3 py-2">
              Arbitrage
            </Link>
            <div className="relative inline-block text-left group">
              <div className="">
                <button
                  type="button"
                  className="inline-flex w-full justify-center gap-x-1.5 rounded-md px-3 py-2 text-sm"
                  id="menu-button"
                  aria-expanded="true"
                  aria-haspopup="true"
                >
                  Coins
                  <svg
                    className="-mr-1 h-5 w-5 text-whith"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
                      clip-rule="evenodd"
                    />
                  </svg>
                </button>
              </div>

              <div
                className="hidden hover:block group-hover:block absolute right-0 z-10 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
                role="menu"
                aria-orientation="vertical"
                aria-labelledby="menu-button"
              >
                <div className="py-1" role="none">
                  <a
                    href="#"
                    className="text-gray-700 block px-4 py-2 text-sm"
                    role="menuitem"
                    id="menu-item-0"
                  >
                    Coins
                  </a>
                  <a
                    href="#"
                    className="text-gray-700 block px-4 py-2 text-sm"
                    role="menuitem"
                    id="menu-item-1"
                  >
                    Exchange
                  </a>
                  <a
                    href="#"
                    className="text-gray-700 block px-4 py-2 text-sm"
                    role="menuitem"
                    id="menu-item-2"
                  >
                    News
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Navbar End */}
        <div className="hidden md:flex justify-center items-center gap-3">
          <button className="bg-[#3273dc] py-1 rounded-3xl p-3 text-white">
            <Link href="/">Login/Register</Link>
          </button>
          <Link href="/">中文</Link>
        </div>
        {/* mobile harmburger menu */}
      </div>
    </nav>
  )
}

export default Navbar
