import Head from 'next/head'
import React from 'react'
import Link from 'next/link'

function Layout({ children }: any) {
  return (
    <>
      <nav className="hidden justify-end bg-dark px-16 text-xl text-white md:flex">
        <div className="flex gap-16 py-8">
          <Link href="/">Home</Link>
          <Link href="/about">About</Link>
          <Link href="/portfolio">Portfolio</Link>
          <Link href="/contact">Contact</Link>
        </div>
      </nav>
      <main>{children}</main>
    </>
  )
}

export default Layout
