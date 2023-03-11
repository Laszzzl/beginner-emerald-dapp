import Head from 'next/head'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Web3Love DApp</title>
        <meta name="description" content="Created by Web3Love" />
        <link rel="icon" href="image/logo.png" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to my <a href="https://web3love.dao" target="_blank">Web3Love DApp!</a>
        </h1>
      </main>
    </div>
  )
}