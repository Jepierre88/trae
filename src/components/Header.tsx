import Link from "next/link";

export default function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-sm border-b border-foreground/10">
      <nav className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <Link href="/" className="duration-300 text-xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400 hover:from-purple-400 hover:to-blue-400 bg-clip-text text-transparent transition-colors">
            Portfolio
          </Link>
          <ul className="flex items-center space-x-8">
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
        </div>
      </nav>
    </header>
  );
}