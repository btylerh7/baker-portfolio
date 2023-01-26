import Link from 'next/link'
export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html>
      <head />
      <body>
        <nav className="hidden justify-end bg-dark px-16 text-xl text-white md:flex">
          <div className="flex gap-16 py-8 text-white">
            <Link href="/">
              <p className="cursor-pointer text-xl text-white duration-150 ease-in-out hover:border-b-2">
                Home
              </p>
            </Link>
            <Link href="/about">
              <p className="cursor-pointer text-xl text-white duration-150 ease-in-out hover:border-b-2">
                About
              </p>
            </Link>
            <Link href="/portfolio">
              <p className="cursor-pointer text-xl text-white duration-150 ease-in-out hover:border-b-2">
                Portfolio
              </p>
            </Link>
            <Link href="/contact">
              <p className="cursor-pointer text-xl text-white duration-150 ease-in-out hover:border-b-2">
                Contact
              </p>
            </Link>
          </div>
        </nav>
        {children}</body>
    </html>
  )
}
