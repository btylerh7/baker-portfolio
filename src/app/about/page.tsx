import styles from './about.module.css'
import Image from 'next/image'


export default function About() {
  return (
    <div className={styles.container}>
      <section className={styles.sectionContainer}>
        <h1>About Me</h1>
        <Image style={{maxWidth:"200px", maxHeight:"200px", objectFit:"cover", borderRadius:"50%", alignSelf: "center"}} src="/profile_image.jpg" alt="tyler baker, a man with brown hair and a beard leaning against a brick wall" width={1200} height={1600}/>
        <h2>Who am I?</h2>
        <p>Full-stack web developer with experience building front end applications using libraries like React or Svelte <br/>as well as backend services and APIs using Express Js!</p>
        <p>Multi-lingual: English native; Japanese intermediate; French and Korean beginner!</p>
        <p>Musician. Music Teacher. Music Producer.</p>
      </section>
      <section className={styles.sectionContainer}>
        <h2>Contact Me!</h2>
        <a href="mailto:tylerhbaker99@gmail.com">Email</a>
        <a target="_blank" href="https://www.linkedin.com/in/btylerh7/">LinkedIn</a>
      </section>
    </div>
  )
}