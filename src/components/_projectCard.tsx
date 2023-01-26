import { FaGithub } from 'react-icons/fa'
import React from 'react'
import Link from 'next/link'
import Image from 'next/image'


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
      
        <div className="flex justify-center gap-4 ">
        <Link target="_blank" href={props.live_demo_link}>
            <Image
              className="aspect-video w-full max-w-xs cursor-pointer "
              src={props.image_path}
              alt={props.title}
              width={1440}
              height={786}
            />
        </Link>
        </div>
        <div className="flex flex-col gap-4 py-4">
          <h3 className="text-xl font-medium">{props.title}</h3>
          <p className="text-sm">{props.description}</p>
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
