"use client"

import { useState } from "react"
import Image from "next/image"

interface NavbarProps {
  currentLocale: string
  setCurrentLocale: (locale: string) => void
}

export default function Navbar({ currentLocale, setCurrentLocale }: NavbarProps) {
  const [isLangOpen, setIsLangOpen] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  const navItems = [
    { href: "#home", label: currentLocale === "id" ? "Beranda" : "Home" },
    { href: "#services", label: currentLocale === "id" ? "Layanan" : "Services" },
    { href: "#work", label: currentLocale === "id" ? "Karya" : "Work" },
    { href: "#testimonials", label: currentLocale === "id" ? "Testimoni" : "Testimonials" },
    { href: "#contact", label: currentLocale === "id" ? "Kontak" : "Contact" },
  ]

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-black text-white">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo & Tagline */}
          <div className="flex-shrink-0 flex items-center space-x-3">
            <Image
              src="/images/lookatme.png"
              alt="Lookatme Logo"
              width={40}
              height={40}
              className="object-contain"
            />
            <h1 className="text-xl font-bold">Lookatme</h1>
            <p className="text-xs text-gray-400 hidden sm:block">See The Difference, Be The Difference</p>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-white hover:text-gray-300 transition-colors"
              >
                {item.label}
              </a>
            ))}
          </div>

          {/* Language Selector */}
          <div className="relative">
            <button
              onClick={() => setIsLangOpen(!isLangOpen)}
              className="flex items-center space-x-2 px-3 py-2 rounded hover:bg-gray-800"
            >
              <span>{currentLocale === "id" ? "🇮🇩" : "🇺🇸"}</span>
            </button>
            
            {isLangOpen && (
              <div className="absolute right-0 mt-2 py-2 w-24 bg-white rounded-lg shadow-xl">
                <button
                  onClick={() => {
                    setCurrentLocale("id")
                    setIsLangOpen(false)
                  }}
                  className="block w-full px-4 py-2 text-black hover:bg-gray-100"
                >
                  🇮🇩 ID
                </button>
                <button
                  onClick={() => {
                    setCurrentLocale("en")
                    setIsLangOpen(false)
                  }}
                  className="block w-full px-4 py-2 text-black hover:bg-gray-100"
                >
                  🇺🇸 EN
                </button>
              </div>
            )}
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 rounded-md hover:bg-gray-800"
            >
              <svg
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {isMobileMenuOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="block px-3 py-2 rounded-md text-white hover:bg-gray-800"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {item.label}
                </a>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
