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
    <div className="card">
      <a target="_blank" href={props.live_demo_link}>
        <div className="flex justify-center gap-4 ">
          <img
            className="aspect-video w-full max-w-xs cursor-pointer "
            src={props.image_path}
            alt={props.title}
          />
        </div>
        <div className="flex flex-col gap-4 py-4">
          <h3 className="text-xl font-medium">{props.title}</h3>
          <p className="text-sm">{props.description}</p>
          <div className="flex justify-center gap-8">
            <div>
              <a target="_blank" href={props.github_link}>
                <FaGithub />
              </a>
            </div>
            <a target="_blank" href={props.live_demo_link}>
              Live Demo
            </a>
          </div>
        </div>
      </a>
    </div>
  )
}

export default ProjectCard
