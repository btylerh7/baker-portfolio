import { CardProps } from '../components/_projectCard'

export const currentProjects: CardProps[] = [
  {
    title: 'Fully Functional Notes App',
    image_path: '/Baker Notes App.png',
    description:
      'A fully functional notes app build with React on the front end and MongoDB, Express, and Node on the backend.',
    github_link: 'https://github.com/btylerh7/full-stack-notes-app',
    live_demo_link: 'https://baker-notes.herokuapp.com/',
  },
  {
    title: 'Music Blogging Site',
    image_path: '/NextBlog.png',
    description:
      'A personal blog that I created to talk about my music knowledge.',
    github_link: 'https://github.com/btylerh7/next-blog',
    live_demo_link: 'http://baker-blog.vercel.app/',
  },
  {
    title: 'Web Piano',
    image_path: 'WebPiano.png',
    description:
      'A web piano build using the ToneJS library that is aimed at teaching the notes on the piano to elementary music students.',
    github_link: 'https://github.com/btylerh7/web-piano',
    live_demo_link: 'https://btylerh7.github.io/web-piano/',
  },
  {
    title: 'The Dad-a-Base',
    image_path: '/dad-a-base.png',
    description:
      'A funny side project I created to amuse my friends and family. The app was originally built with a React codebase and then shifted over to Svelte. If you would like to see how I handled it in React, the original repository is still on my GitHub.',
    github_link: 'https://github.com/btylerh7/dad-a-base',
    live_demo_link: 'https://btylerh7.github.io/dad-a-base/',
  },
]
