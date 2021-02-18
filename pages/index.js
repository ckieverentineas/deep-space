import Head from 'next/head'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>DeepSpace</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          You see deep space, but he not see you
        </h1>

        <p className={styles.description}>
          Play free and now
        </p>

        <div className={styles.grid}>
          <a href="" className={styles.card}>
            <h3>War &rarr;</h3>
            <p>You can destroy all</p>
          </a>

          <a href="" className={styles.card}>
            <h3>World &rarr;</h3>
            <p>You can life without problems</p>
          </a>

          <a href="" className={styles.card}>
            <h3>Are you a pirate! &rarr;</h3>
            <p>You can take any</p>
          </a>

          <a href="" className={styles.card}>
            <h3>Construct &rarr;</h3>
            <p>
              Minig and build many!
            </p>
          </a>

          <button>Enter</button>
        </div>
      </main>

      <footer className={styles.footer}>
        The Federation Corporatoion 2021
      </footer>
    </div>
  )
}