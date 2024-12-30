
import Head from 'next/head';
import styles from '../styles/Home.module.css';

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Website Sederhana</title>
        <meta name="description" content="Website Next.js sederhana" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Selamat Datang di Website Sederhana!
        </h1>

        <p className={styles.description}>
          Dibangun dengan <code className={styles.code}>Next.js</code>
        </p>

        <div className={styles.grid}>
          <a href="https://nextjs.org/docs" className={styles.card}>
            <h2>Dokumentasi &rarr;</h2>
            <p>Temukan informasi tentang fitur dan API Next.js.</p>
          </a>

          <a href="https://nextjs.org/learn" className={styles.card}>
            <h2>Belajar &rarr;</h2>
            <p>Pelajari Next.js melalui kursus interaktif.</p>
          </a>

          <a
            href="https://github.com/vercel/next.js/tree/canary/examples"
            className={styles.card}
          >
            <h2>Contoh &rarr;</h2>
            <p>Jelajahi dan gunakan contoh-contoh proyek Next.js.</p>
          </a>

          <a
            href="https://vercel.com/new"
            className={styles.card}
          >
            <h2>Deploy &rarr;</h2>
            <p>Segera deploy situs Anda menggunakan Vercel.</p>
          </a>
        </div>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          Dibuat oleh{' '}
          <span className={styles.logo}>
            <img src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer>
    </div>
  );
}
