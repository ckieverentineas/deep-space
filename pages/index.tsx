import Link from 'next/link'
import Head from 'next/head'
import { useAddUserMutation, useGetUserQuery } from '../api/generated'
import styles from '../styles/Home.module.css'

export default function Home() {
  const [addUser, { loading, error }] = useAddUserMutation()
  const { data } = useGetUserQuery({
    variables: { email: 'email'}
  })
    return (
    <div className={styles.container}>
      {loading && <div>lodaing...</div>}
      {`Hello, ${data?.getUser?.name} `}
      {`Your id, ${data?.getUser?.id}`}
      <Head>
        <title>DeepSpace</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          You see space, but he not see you
          {data?.__typename}
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
          <div className="regist">
            <input id="name" type="text" placeholder="Your name"/>
            <input id="email" type="text" placeholder="Your email"/>
            <input id="password" type="text" placeholder="Your pass"/>
          </div>
          <div>
            <button onClick={() => addUser({ variables: { email: "", password: 'password', name: 'name' } })}>Registration</button>
          </div>
        </div>
      </main>

      <footer className={styles.footer}>
        The Federation Corporatoion 2021
      </footer>
    </div>
  )
}
