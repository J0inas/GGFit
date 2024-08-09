import * as React from 'react';
import Head from "next/head";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import BasicModal from "@/pages/modal";
import ButtonAppBar from "@/pages/headerbar";
import HeaderSegment from "@/pages/headerbar";

const inter = Inter({ subsets: ["latin"] });

// MAIN FUNCITON:
//  Text for frontpage
//  Link to Modal for Registration
export default function Home() {
    return (
        <>
            <Head>
                <title> GGFit </title>
                <meta name="description" content="A BRAND NEW FITNESS APP" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
            </Head>
            <main className={`${styles.main} ${inter.className}`}>
                <h1>
                    Trainere heute.
                </h1>
                <h4>
                    GGFit - Goal Gradient Fitness
                </h4>
                <p className={styles.description}>
                   Werde zu der BESTEN VERSION deines LEBENS!
                </p>
                <div>
                    <BasicModal/>
                </div>
            </main>
        </>
    );
}