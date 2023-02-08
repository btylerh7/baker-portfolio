import ProjectCard from '../../components/ProjectCard'
import { currentProjects } from '../../lib/currentProjects'
import styles from '../../styles/Portfolio.module.css'

function Portfolio() {
  return (
    <div>
      <section className={styles.sectionContainer}>
        <h2 className='py-4'>Here are some of the projects I have completed:</h2>
        <div className="mx-auto grid w-full px-4 max-w-6xl grid-cols-1 justify-center gap-16 lg:grid-cols-2 lg:gap-8">
          {currentProjects.map((project) => {
            return <ProjectCard key={project.title} props={project} />
          })}
        </div>
      </section>
    </div>
  )
}

export default Portfolio