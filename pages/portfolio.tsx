import ProjectCard from '../components/_projectCard'
import { currentProjects } from '../lib/currentProjects'
import Head from 'next/head'

function Portfolio() {
  return (
    <div>
      <Head>
        <title>Tyler Baker - About</title>
        <meta name="theme-color" content="#1A1A2E"></meta>
      </Head>
      <section className="section-container bg-dark text-white">
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

export default Portfolio
