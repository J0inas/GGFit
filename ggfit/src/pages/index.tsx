import * as React from 'react';
import Head from "next/head";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import BasicModal from "@/pages/modal";
import ButtonAppBar from "@/pages/appbar";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
    return (
        <React.Fragment>
            <ButtonAppBar/>
            <Head>
                <title> GGFit </title>
                <meta name="description" content="A BRAND NEW FITNESS APP" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
            </Head>
            <main className={`${styles.main} ${inter.className}`}>
                <p className={styles.description}>
                    Become the best version of yourself - RIGHT NOW!

                </p>
                <p>
                    <BasicModal/>
                </p>
            </main>


        </React.Fragment>

    );
}