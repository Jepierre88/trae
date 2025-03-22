"use client"
import Link from "next/link";
import { useState } from "react";
import { TypeAnimation } from "react-type-animation";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-sm border-b border-foreground/10">
      <nav className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <Link href="/" className="duration-300 text-xl font-bold bg-gradient-to-r from-primary to-secondary hover:from-secondary hover:to-primary bg-clip-text text-transparent transition-colors">
            <TypeAnimation
              sequence={[
                "A Programmer",
                2000,
                "A Musician",
                2000,
                "A Student",
                2000,
                "A Person",
                2000,
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
            />
          </Link>
          
          {/* Mobile menu button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 text-foreground/80 hover:text-foreground transition-colors"
            aria-label="Toggle menu"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {isMenuOpen ? (
                <path d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>

          {/* Desktop menu */}
          <ul className="hidden md:flex items-center space-x-8">
            <li>
              <Link href="/#about" className="hover:text-foreground/80 transition-colors">
                About
              </Link>
            </li>
            <li>
              <Link href="/#projects" className="hover:text-foreground/80 transition-colors">
                Projects
              </Link>
            </li>
            <li>
              <Link href="/#skills" className="hover:text-foreground/80 transition-colors">
                Skills
              </Link>
            </li>
            <li>
              <Link href="/#contact" className="hover:text-foreground/80 transition-colors">
                Contact
              </Link>
            </li>
          </ul>

          {/* Mobile menu */}
          <div
            className={`${isMenuOpen ? 'translate-x-0 opacity-100' : 'translate-x-full opacity-0'} md:hidden fixed top-[73px] left-0 right-0 bg-background/95 backdrop-blur-sm transition-all duration-300 ease-in-out border-b border-foreground/10 shadow-lg`}
          >
            <ul className="flex flex-col items-center py-4 space-y-4">
              <li>
                <Link
                  href="/#about"
                  className="hover:text-foreground/80 transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  href="/#projects"
                  className="hover:text-foreground/80 transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Projects
                </Link>
              </li>
              <li>
                <Link
                  href="/#skills"
                  className="hover:text-foreground/80 transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Skills
                </Link>
              </li>
              <li>
                <Link
                  href="/#contact"
                  className="hover:text-foreground/80 transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
}