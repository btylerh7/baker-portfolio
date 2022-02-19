import type { NextPage } from 'next'
import Head from 'next/head'
import { FaReact, FaJsSquare, FaHtml5, FaCss3Alt, FaNode } from 'react-icons/fa'
import { SiExpress, SiMongodb, SiNextdotjs, SiSvelte } from 'react-icons/si'

const Home: NextPage = () => {
  const reactSize = 120
  return (
    <>
      <img className="svg min-h-screen" src="/website-bg.svg" />
      <section className="grid min-h-screen max-w-full place-items-center">
        <h1 className=" text-5xl text-white">Hi, I'm Tyler.</h1>
      </section>
      <section className="section-container bg-white">
        <h2>Here are some of my skills:</h2>
        <div className="flex place-content-center gap-4">
          <FaReact size={reactSize} />
          <FaJsSquare size={reactSize} />
          <FaHtml5 size={reactSize} />
          <FaCss3Alt size={reactSize} />
          <FaNode size={reactSize} />
          <SiNextdotjs size={reactSize} />
          <SiMongodb size={reactSize} />
          <SiSvelte size={reactSize} />
        </div>
      </section>
      <section className="section-container bg-light text-white">
        <h2>Here are some of the projects I have completed:</h2>
      </section>
    </>
  )
}

export default Home
