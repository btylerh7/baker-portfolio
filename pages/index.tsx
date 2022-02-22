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
      <Head>
        <title>Tyler Baker - Home</title>
        <meta name="theme-color" content="#1A1A2E"></meta>
      </Head>
      {/* <img className="svg min-h-screen" src="/website-bg.svg" /> */}
      <section className="my-bg grid min-h-screen max-w-full place-items-center text-5xl text-white">
        <h1 className="px-4 text-5xl text-white md:px-0">
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
        <div className="grid max-w-7xl grid-cols-3 place-content-center place-items-center gap-8 px-4 text-black md:gap-x-0 lg:mx-auto lg:grid-cols-9 lg:gap-8 ">
          <img src="/html5.svg" />
          <img src="/css.svg" />
          <img src="/JS.svg" />
          <img src="/react.svg" />
          <img src="/next-js.svg" />
          <img src="/svelte.svg" />
          <img src="/nodejs.svg" />
          <img src="/mongodb.svg" />
          <img src="/git.svg" />
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
