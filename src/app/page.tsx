"use client" 

import type { NextPage } from 'next'
import '../styles/globals.css'
import { FaArrowDown } from 'react-icons/fa'
import ProjectCard from '../components/_projectCard'
import { currentProjects } from '../lib/currentProjects'
import Image from 'next/image'
import { useState, useRef, useEffect, MutableRefObject } from 'react'
import '../styles/iconAnimation.css'

import htmlImage from '../../public/html5.svg'
import cssImage from '../../public/css.svg'
import jsImage from '../../public/JS.svg'
import reactImage from '../../public/react.svg'
import nextJsImage from '../../public/next-js.svg'
import svelteImage from '../../public/svelte.svg'
import nodeImage from '../../public/nodejs.svg'
import mongoImage from '../../public/mongodb.svg'
import gitImage from '../../public/git.svg'


const Home = ({}) => {
  const iconRef:MutableRefObject<HTMLDivElement|null> = useRef(null)
  const [ iconIsVisible, setIconIsVisible ] = useState<boolean>()
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      const entry = entries[0]
      setIconIsVisible(entry.isIntersecting)
    })
    if(iconRef.current != null) {
      observer.observe(iconRef.current)
    }
  }, [])
  return (
    <div className="bg-dark">
      {/* <img className="svg min-h-screen" src="/website-bg.svg" /> */}
      <section className="my-bg grid min-h-screen max-w-full place-items-center text-5xl text-white">
        <h1 className="px-4 text-5xl text-white md:px-0">
          Hi, I'm Tyler.
          <br /> I'm a front end web developer.
        </h1>
        <div className="delay mx-auto flex w-fit flex-col items-center justify-center text-white">
          <h2 className="text-center text-white">Scroll to see more</h2>
          <FaArrowDown />
        </div>
      </section>
      <section className="section-container rotated p-x-4 bg-gray-100 py-8">
        <h2>Here are some of my skills:</h2>
        <div ref={iconRef} className={`${iconIsVisible ? 'icon': ''} max-w-8xl grid grid-cols-3 place-content-center place-items-center gap-8 px-4 text-gray-900 md:gap-x-0 lg:mx-auto lg:grid-cols-9 lg:gap-8`}>
          <Image alt="html logo" src={htmlImage} />
          <Image alt="css logo" src={cssImage} />
          <Image alt="javascript logo" src={jsImage} />
          <Image alt="react logo" src={reactImage} />
          <Image alt="next logo" src={nextJsImage} />
          <Image alt="svelte logo" src={svelteImage} />
          <Image alt="nodejs logo" src={nodeImage} />
          <Image alt="mongo db logo" src={mongoImage} />
          <Image alt="git logo" src={gitImage} />
        </div>
        
      </section>
      <section className="section-container bg-gray-100  text-gray-900">
        <h2>Here are some of the projects I have completed:</h2>
        {/* <div className="mx-auto grid w-full max-w-4xl grid-cols-1 justify-center gap-4 text-white lg:grid-cols-2"> */}
        <div className="mx-auto grid w-full gap-8 py-8 lg:max-w-5xl lg:grid-cols-2">
          {currentProjects.map((project) => {
            if (currentProjects.indexOf(project) <= 3) {
              return <ProjectCard key={project.title} props={project} />
            }
            
          })}
        </div>
      </section>
      {/* <section className="section-container bg-gray-100 py-8">
        <h2>Connect with me!</h2>
        <div className="max-w-8xl">
          <img src="/linkedin.svg" />
        </div>
      </section> */}
    </div>
  )
}

export default Home
