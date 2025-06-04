'use client'; // This hook only works in client components
import './globals.css';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();

  function isActive(path: string) {
    return pathname === path;
  }

  return (
    <html lang="en">
      <body className="bg-black text-white font-sans flex flex-col min-h-screen">
        <header className="p-6 bg-gray-900 text-white flex gap-6">
          <Link
            href="/"
            className={isActive('/') ? 'underline font-bold' : 'hover:underline'}
          >
            Home
          </Link>
          <Link
            href="/about"
            className={isActive('/about') ? 'underline font-bold' : 'hover:underline'}
          >
            About
          </Link>
          <Link
            href="/projects"
            className={isActive('/projects') ? 'underline font-bold' : 'hover:underline'}
          >
            Projects
          </Link>
          <Link
            href="/resume"
            className={isActive('/resume') ? 'underline font-bold' : 'hover_underline'}
          >
            Resume
          </Link>
          <Link
            href="/contact"
            className={isActive('/contact') ? 'underline font-bold' : 'hover_underline'}
          >
            Contact
          </Link>
        </header>
        <main className="p-6 flex-grow">{children}</main>

        <footer className="p-6 bg-gray-900 text-center text-sm text-gray-400">
        <div className="mb-2 flex justify-center space-x-6">
          <a
            href="https://github.com/dimitrigerasimov"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="hover:text-white"
          >
            <FaGithub className="w-6 h-6 inline" />
          </a>
          <a
            href="https://linkedin.com/in/dimitrigerasimov"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="hover:text-white"
          >
            <FaLinkedin className="w-6 h-6 inline" />
          </a>
        </div>
          {new Date().getFullYear()} Dimitri Gerasimov
        </footer>
      </body>
    </html>
  );
}
