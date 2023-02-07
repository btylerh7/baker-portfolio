import Link from 'next/link'
import { FaExternalLinkAlt } from 'react-icons/fa'
import '../styles/globals.css'
export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head />
      <body>
        <nav className="hidden justify-end bg-dark px-16 text-xl text-white md:flex">
          <div className="flex gap-16 py-8 text-white">
            <Link href="/">
              {/* hover:border-b-2 */}
              <p className="cursor-pointer text-xl text-white duration-150 ease-in-out underline-on-hover">
                Home
              </p>
            </Link>
            <Link href="/about">
              <p className="cursor-pointer text-xl text-white duration-150 ease-in-out underline-on-hover">
                About
              </p>
            </Link>
            <Link href="/portfolio">
              <p className="cursor-pointer text-xl text-white duration-150 ease-in-out underline-on-hover">
                Portfolio
              </p>
            </Link>
            <a href="https://github.com/btylerh7" target="_blank" rel="noreferrer">
              <p className="flex gap-4 align-center cursor-pointer text-xl text-white duration-150 ease-in-out underline-on-hover">
                GitHub <FaExternalLinkAlt />
              </p>
            </a>
          </div>
        </nav>
        {children}</body>
    </html>
  )
}
