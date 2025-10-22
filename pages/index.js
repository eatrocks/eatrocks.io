import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import githubMark from "../public/GitHub-Mark.png";
import githubMarkLight from "../public/GitHub-Mark-Light.png";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>eatrocks</title>
        <meta name="description" content="eatrocks" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          eatrocks<Link href="/p2">.</Link>io
        </h1>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://github.com/eatrocks/eatrocks.io/tree/main"
          target="_blank"
          rel="noopener noreferrer"
        >
          <span className={styles.light}>
            <Image src={githubMark} alt="Github Logo" width={24} height={24} />
          </span>
          <span className={styles.dark}>
            <Image
              src={githubMarkLight}
              alt="Github Logo"
              width={24}
              height={24}
            />
          </span>
        </a>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{" "}
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer>
    </div>
  );
}
