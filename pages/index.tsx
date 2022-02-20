import type { NextPage } from 'next'
import Head from 'next/head'
import {
  FaReact,
  FaJsSquare,
  FaHtml5,
  FaCss3Alt,
  FaNode,
  FaGitAlt,
  FaArrowDown,
} from 'react-icons/fa'
import { SiMongodb, SiNextdotjs, SiSvelte } from 'react-icons/si'
import ProjectCard from '../components/_projectCard'
import { currentProjects } from '../lib/currentProjects'

const Home: NextPage = () => {
  const reactSize = 120
  return (
    <div className="bg-dark">
      {/* <img className="svg min-h-screen" src="/website-bg.svg" /> */}
      <section className="my-bg grid min-h-screen max-w-full place-items-center text-5xl text-white">
        <h1 className="text-5xl text-white">
          Hi, I'm Tyler.
          <br /> I'm a front end web developer.
        </h1>
        <div className="mx-auto flex w-fit flex-col items-center justify-center">
          <h2 className="text-center">Scroll to see more</h2>
          <FaArrowDown className="text-center" />
        </div>
      </section>
      <section className="section-container p-x-4 bg-white">
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
      <section className="section-container  text-white">
        <h2>Here are some of the projects I have completed:</h2>
        <div className="mx-auto grid w-full max-w-6xl grid-cols-1 justify-center gap-y-16 lg:grid-cols-2 lg:gap-y-8">
          {currentProjects.map((project) => {
            return <ProjectCard key={project.title} props={project} />
          })}
        </div>
      </section>
    </div>
  )
}

export default Home
