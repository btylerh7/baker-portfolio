import Link from 'next/link'
import { FaGithub } from 'react-icons/fa'
import React from 'react'

export interface CardProps {
  title: string
  image_path: string
  description: string
  github_link: string
  live_demo_link: string
}
const ProjectCard: React.FC<{ props: CardProps }> = ({ props }) => {
  return (
    <div className="container mx-auto flex flex-col gap-4">
      <h3>{props.title}</h3>
      <div className="flex justify-center gap-4">
        <Link href={props.live_demo_link}>
          <img
            className="aspect-video max-w-md cursor-pointer"
            src={props.image_path}
          />
        </Link>
      </div>
      <p>{props.description}</p>
      <div className="flex cursor-pointer justify-center gap-4">
        <Link href={props.github_link}>
          <div>
            <FaGithub />
          </div>
        </Link>
        <Link href={props.live_demo_link}>Live Demo</Link>
      </div>
    </div>
  )
}

export default ProjectCard
