import Head from "next/head";
import Link from "next/link";
import styles from "../styles/p2.module.css";

export default function Page() {
  return (
    <div className={styles.container}>
      <Head>
        <title>eatrocks</title>
        <meta name="description" content="eatrocks" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          back to eatrocks<Link href="/">.</Link>io
        </h1>
      </main>
    </div>
  );
}
