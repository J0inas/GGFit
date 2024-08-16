import * as React from 'react';
import Head from "next/head";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import ModalAnmelden from "@/pages/modal_anmelden";
import ModalRegistrieren from "@/pages/modal_registrieren";
import {Stack, Typography} from '@mui/material';
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";

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
            <Box sx={{ position: 'absolute', top: 0, right: 0, padding: 2 }}>
                <Stack direction="row" spacing={2}>
                    <ModalAnmelden/>
                    <ModalRegistrieren/>
                </Stack>
            </Box>
            <main className={`${styles.main} ${inter.className}`}>
                <Stack alignItems="center" direction="column" spacing={0}>
                    <Box height={400}/>
                    <Typography fontFamily="Arial" fontSize={40} fontWeight={600}>
                        GGFit: Goal Gradient Fitness
                    </Typography>
                    <Box>
                        <Typography fontSize={20}>
                            Trainieren heute und werde zur besten Version deines Lebens.
                        </Typography>
                    </Box>
                </Stack>
            </main>
            <Box sx={{ position: 'absolute', bottom: 0, left: 0, padding: 2 }}>
                <Stack direction="row" spacing={2}>
                    <Button variant="text">
                        <Typography fontFamily="Arial" color="#FFFFFF" fontSize={12}>Impressum</Typography>
                    </Button>
                    <Button variant="text">
                        <Typography fontFamily="Arial" color="#FFFFFF" fontSize={12}>Datenschutzerklärung</Typography>
                    </Button>
                    <Button>
                        <Typography fontFamily="Arial" color="#FFFFFF" fontSize={12}>AGB</Typography>
                    </Button>
                </Stack>
            </Box>
        </>
    );
}