import type { NextPage } from 'next'
import Head from 'next/head'
import {
  FaReact,
  FaJsSquare,
  FaHtml5,
  FaCss3Alt,
  FaNode,
  FaGitAlt,
} from 'react-icons/fa'
import { SiMongodb, SiNextdotjs, SiSvelte } from 'react-icons/si'
import ProjectCard from '../components/_projectCard'
import { currentProjects } from '../lib/currentProjects'

const Home: NextPage = () => {
  const reactSize = 120
  console.log(currentProjects)
  return (
    <>
      <img className="svg min-h-screen" src="/website-bg.svg" />
      <section className="grid min-h-screen max-w-full place-items-center">
        <h1 className=" text-5xl text-white">Hi, I'm Tyler.</h1>
      </section>
      <section className="section-container bg-white">
        <h2>Here are some of my skills:</h2>
        <div className="flex place-content-center gap-4">
          <FaHtml5 size={reactSize} />
          <FaCss3Alt size={reactSize} />
          <FaJsSquare size={reactSize} />
          <FaReact size={reactSize} />
          <SiNextdotjs size={reactSize} />
          <SiSvelte size={reactSize} />
          <FaNode size={reactSize} />
          <SiMongodb size={reactSize} />
          <FaGitAlt size={reactSize} />
        </div>
      </section>
      <section className="section-container bg-light text-white">
        <h2>Here are some of the projects I have completed:</h2>
        <div className="grid w-full grid-cols-2 gap-y-8">
          {currentProjects.map((project) => {
            return <ProjectCard key={project.title} props={project} />
          })}
        </div>
      </section>
    </>
  )
}

export default Home
