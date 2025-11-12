"use client"

import { useState } from "react"
import Link from "next/link"

const MenuIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <line x1="3" y1="6" x2="21" y2="6" />
    <line x1="3" y1="12" x2="21" y2="12" />
    <line x1="3" y1="18" x2="21" y2="18" />
  </svg>
)

const CloseIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <line x1="18" y1="6" x2="6" y2="18" />
    <line x1="6" y1="6" x2="18" y2="18" />
  </svg>
)

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)

  const scrollToSection = (id: string) => {
    setIsOpen(false)
    const element = document.getElementById(id)
    element?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <header className="sticky top-0 z-50 bg-background border-b border-border shadow-sm">
      <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
        <Link
          href="#"
          className="text-2xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent"
        >
          NirmaSolarSolutions
        </Link>

        <nav className="hidden md:flex gap-8">
          <button
            onClick={() => scrollToSection("products")}
            className="text-foreground hover:text-accent transition cursor-pointer font-medium text-sm"
          >
            Products
          </button>
          <button
            onClick={() => scrollToSection("portfolio")}
            className="text-foreground hover:text-accent transition cursor-pointer font-medium text-sm"
          >
            Portfolio
          </button>
          <button
            onClick={() => scrollToSection("blog")}
            className="text-foreground hover:text-accent transition cursor-pointer font-medium text-sm"
          >
            Blog
          </button>
          <button
            onClick={() => scrollToSection("contact")}
            className="text-foreground hover:text-accent transition cursor-pointer font-medium text-sm"
          >
            Contact
          </button>
        </nav>

        <button className="md:hidden p-2 text-foreground" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <CloseIcon /> : <MenuIcon />}
        </button>

        {isOpen && (
          <nav className="absolute top-full left-0 right-0 bg-background border-b border-border md:hidden flex flex-col gap-4 p-4">
            <button
              onClick={() => scrollToSection("products")}
              className="text-foreground hover:text-accent transition text-left cursor-pointer"
            >
              Products
            </button>
            <button
              onClick={() => scrollToSection("portfolio")}
              className="text-foreground hover:text-accent transition text-left cursor-pointer"
            >
              Portfolio
            </button>
            <button
              onClick={() => scrollToSection("blog")}
              className="text-foreground hover:text-accent transition text-left cursor-pointer"
            >
              Blog
            </button>
            <button
              onClick={() => scrollToSection("contact")}
              className="text-foreground hover:text-accent transition text-left cursor-pointer"
            >
              Contact
            </button>
          </nav>
        )}
      </div>
    </header>
  )
}
