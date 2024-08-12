import * as React from 'react'
import Box from "@mui/material/Box"
import Grid from "@mui/material/Grid"
import Stack from "@mui/system/Stack"
import Button from '@mui/material/Button';

import { useTheme, createTheme, ThemeProvider } from "@mui/material/styles";

import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import {TextField} from "@mui/material";

// Styling der Main Box:
const style_box_data = {
    width: "100%",
    height: 520,
    bgcolor: "#404040"
}

// Aufbau der Main Box:
function BoxData() {
    const theme = useTheme();

    return (
        <Box sx={style_box_data} padding = "2rem" fontFamily="Menlo">
            <h2>
               Registrierung
            </h2>
            <Page1/>
        </Box>
    )
}

// 1. Page zur Registrierung
function Page1(): React.JSX.Element{
    return (
        <div>
            <Stack>
                <Stack padding={2}>
                    <h3>
                        Wie heißt du?
                    </h3>
                    <Stack direction="row" gap={3}>
                        <TextField
                            required
                            id="vorname"
                            label="Vorname"
                            margin={"normal"}
                        />
                        <TextField
                            required
                            id="vorname"
                            label="Nachname"
                            margin={"normal"}
                        />
                    </Stack>

                </Stack>
                <Stack padding={2}>
                    <h3>
                        Wie lautet deine E-Mailadresse?
                    </h3>
                    <TextField
                        required
                        id="mail"
                        label="E-Mail"
                        margin={"normal"}
                    />
                </Stack>
                <Stack  padding={2}>
                    <h4>
                        Bestätigung der Mailadresse:
                    </h4>
                    <TextField
                        required
                        id="mail-bestätigung"
                        label="E-Mail"
                        margin={"normal"}
                    />
                </Stack>
            </Stack>
        </div>
    )
}

// 2. Page
/*

            <h3>
                Wie lautet dein Passwort?
            </h3>
            ... Passwort
            ... Bestätigung des Passwortes
            <h3>
                Akzeptierst du unsere Privacy Policy?
            </h3>
            ...Auswahl von Ja oder Jaa

 */

// 3. Page
/*
            <h3>
                Wie lautet deine Telefonnummer?
            </h3>
            <h3>
                Möchtest du die 2FA mit deiner Telefonnummer aktivieren?
            </h3>
            <h3>
                Wie viel wiegst du?
            </h3>
            <h3>
                Wie groß bist du?
            </h3>
            <h3>
                Was ist dein Gender?
            </h3>
            <Stack  padding={2}>
                    <h3>
                        Wie alt bist du?
                    </h3>
                    <TextField
                        id="standard-number"
                        label="Number"
                        type="number"
                        InputLabelProps={{
                        shrink: true,
                    }}
                        variant="standard"
                        margin={"normal"}
                        />
                </Stack>
 */
// 4. Page
/*
            <h3>
                Welche Trainingsvorerfahrung hast du? -> Slider oder so
            </h3>
            <h3>
                Was für Fitness-Ziele besitzt du?
            </h3>
                <h3>
                    Schrittziel:
                </h3>
                <h3>
                    Zielgewicht:
                </h3>
                <h3>
                    Wasserzufuhr:
                </h3>
                <h3>
                    Körperfettanteil:
                </h3>
                <h3>
                    Muskelmasse:
                </h3>
 */

// 5. Page
/*
            <h3>
                 Wie möchtest du genannt werden?
            </h3>
 */
// Final Page
// displaying all the content that was colected so far, highlighting what's missing with the action components - cool icons and such..maybe


// Styling der Footer Box:
const style_box_footer = {
    width: "100%",
    height: 40,
}

// Augment the palette to include an white color
declare module '@mui/material/styles' {
    interface Palette {
        white: Palette['primary'];
    }

    interface PaletteOptions {
        white?: PaletteOptions['primary'];
    }
}

// Update the Button's color options to include an ochre option
declare module '@mui/material/Button' {
    interface ButtonPropsColorOverrides {
        white: true;
    }
}

const footer_theme = createTheme({
    palette: {
        white: {
            main: '#F0F0F0',
        },
    },
});

// Aufbau der Footer Box:
function BoxFooter() {

    return (
        <Box sx={style_box_footer}>
            <ThemeProvider theme={footer_theme}>
                <Grid
                    container
                    direction="row"
                    justifyContent="space-between"
                    alignItems="center"
                >
                    <Button variant="outlined" color="white"><ArrowBackIosNewIcon/></Button>
                    <Button variant="outlined" color="white"><ArrowForwardIosIcon/></Button>
                </Grid>
            </ThemeProvider>

        </Box>
    )
}



// Aufbau der Box:
export default function BoxNoProgressBar() {
    const theme = useTheme();

    return (
        <Stack spacing={3}>
            <Box sx={{height: 10}}></Box>
            <BoxData></BoxData>
            <BoxFooter></BoxFooter>
        </Stack>
    );
}