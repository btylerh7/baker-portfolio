import Head from 'next/head'

function About() {
  return (
    <>
      <Head>
        <title>Tyler Baker - About</title>
        <meta name="theme-color" content="#1A1A2E"></meta>
      </Head>
      <section className="section-container">
        <h1>About Me</h1>
        {/* Insert Picture */}
      </section>
      <section className="mx-auto max-w-screen-lg">
        <h2 className="max-w-sm font-medium">
          I'm Tyler. I am a web developer, creator, and problem solver.
        </h2>
        <p>
          I have always been a creative. From my first notes on the piano at age
          six to my first marching band arrangement at age sixteen. I have been
          in love with computers since the day my parents put a laptop in my
          hands. Now, I apply that creativity outside of my musical background.
        </p>
        <p>
          I love immersing myself in the language that is HTML and CSS. I have a
          passion for creating not only beautiful designs, but also responsive,
          accessible websites.
        </p>
      </section>
    </>
  )
}

export default About
