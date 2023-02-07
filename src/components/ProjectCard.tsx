import { FaGithub } from 'react-icons/fa'
import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import styles from './ProjectCard.module.css'


export interface CardProps {
  title: string
  image_path: string
  description: string
  github_link: string
  live_demo_link: string
}
const ProjectCard: React.FC<{ props: CardProps }> = ({ props }) => {
  return (
    <div className={styles.card}>
      
        <div className={styles.imageContainer}>
          <Link target="_blank" href={props.live_demo_link}>
              <Image
                className={styles.image}
                src={props.image_path}
                alt={props.title}
                width={1440}
                height={786}
              />
              <div className={styles.description}>
                <p>{props.description}</p>
              </div>
          </Link>
        </div>
        <div className={styles.info}>
          <h3 className="text-xl font-medium">{props.title}</h3>
          <div className="flex justify-center gap-8">
            <div>
              <Link target="_blank" href={props.github_link}>
                <FaGithub />
              </Link>
            </div>
              <Link target="_blank" href={props.live_demo_link}>
                Live Demo
              </Link>
          </div>
        </div>

    </div>
  )
}

export default ProjectCard
