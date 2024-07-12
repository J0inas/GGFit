import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Head>
        <title>GGFit</title>
      </Head>
      <main className={`${styles.main} ${inter.className}`}>
        <div>
          <h1>
            HELLOOO
          </h1>
          This is my new site.
          <h3>
            Pretty cool huh?
          </h3>
        </div>
      </main>
    </>
  );
}
