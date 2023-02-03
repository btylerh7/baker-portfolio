import { CardProps } from '../components/_projectCard'

export const currentProjects: CardProps[] = [
  {
    title: 'Fully Functional Notes App',
    image_path: '/Baker Notes App.png',
    description:
      'A fully functional notes app with user authentication and a MongoDB database.',
    github_link: 'https://github.com/btylerh7/full-stack-notes-app',
    live_demo_link: 'https://full-stack-notes-app.onrender.com',
  },
  {
    title: 'Music Blogging Site',
    image_path: '/NextBlog.png',
    description:
      'A personal blog that I created using Next.js to talk about my music knowledge.',
    github_link: 'https://github.com/btylerh7/next-blog',
    live_demo_link: 'http://baker-blog.vercel.app/',
  },
  {
    title: 'Web Piano',
    image_path: '/WebPiano.png',
    description:
      'A web piano build using the ToneJS library that is aimed at teaching piano notes to elementary music students.',
    github_link: 'https://github.com/btylerh7/web-piano',
    live_demo_link: 'https://btylerh7.github.io/web-piano/',
  },
  {
    title: 'The Dad-a-Base',
    image_path: '/dad-a-base.png',
    description:
      'A funny side project created to amuse my friends and family. Originally built with React and then migrated over to Svelte.',
    github_link: 'https://github.com/btylerh7/dad-a-base',
    live_demo_link: 'https://btylerh7.github.io/dad-a-base/',
  },
]
