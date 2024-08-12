import * as React from 'react'
import { styled } from '@mui/material/styles'
import Box from "@mui/material/Box"
import Grid from "@mui/material/Grid"
import Stack from "@mui/system/Stack"
import Button from '@mui/material/Button'
import Slide from "@mui/material/Slide"
import Fade from "@mui/material/Fade"

import LinearProgress, {linearProgressClasses } from "@mui/material/LinearProgress";
import { useTheme, createTheme, ThemeProvider } from "@mui/material/styles";

import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';


// Styling der Progress Bar:
const BorderLinearProgress = styled(LinearProgress)(({ theme }) => ({
    height: 10,
    borderRadius: 4,
    [`&.${linearProgressClasses.colorPrimary}`]: {
        backgroundColor: theme.palette.grey[700],
    },
    [`& .${linearProgressClasses.bar}`]: {
        borderRadius: 4,
        backgroundColor: theme.palette.grey[300],
    },
}));


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
        <Box sx={style_box_data}>

        </Box>
    )
}


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


const Item = styled('div')(({ theme }) => ({
    backgroundColor: '#D9D9D9',
    padding: theme.spacing(1),
    textAlign: 'center',
    borderRadius: 4,
}));


// Aufbau der Box:
export default function BoxProgressBar() {
    const theme = useTheme();

    // ProgressBar:
    const [progress, setProgress] = React.useState<number>(40);
    const changeProgress = (delta: number) => {
        setProgress((prevProgress) => Math.max(Math.min(prevProgress + delta, 100), 0));
    };

    // Sliding der Anmeldung:
    const [boxNumber, setBoxNumber] = React.useState(0);
    const increaseBoxNumber = () => {
        setBoxNumber((prevBoxNumber) => Math.min(prevBoxNumber + 1, 2));
    }
    const decreaseBoxNumber = () => {
        setBoxNumber((prevBoxNumber) => Math.max(prevBoxNumber - 1, 0));
    }


    // Aufbau des Formulars:
    return (
        <Stack spacing={3}>
            <Box sx={{height: 10}}><BorderLinearProgress variant="determinate" value={progress}/></Box>

            <Box sx={{ width: 200, height: 200, overflow: 'hidden' }}>
                <Fade in={boxNumber === 0} mountOnEnter unmountOnExit>
                    <Box sx={{ width: 200, height: 200, bgcolor: 'blue' }} />
                </Fade>
                <Fade in={boxNumber === 1} mountOnEnter unmountOnExit>
                    <Box sx={{ width: 200, height: 200, bgcolor: 'green' }} />
                </Fade>
                <Fade in={boxNumber === 2} mountOnEnter unmountOnExit>
                    <Box sx={{ width: 200, height: 200, bgcolor: 'gray' }} />
                </Fade>
            </Box>

            <Box sx={style_box_footer}>
                <ThemeProvider theme={footer_theme}>
                    <Grid
                        container
                        direction="row"
                        justifyContent="space-between"
                        alignItems="center"
                    >
                        <Button variant="outlined" color="white" onClick={() => decreaseBoxNumber()}>
                            <ArrowBackIosNewIcon/>
                        </Button>
                        <Button variant="outlined" color="white" onClick={() => increaseBoxNumber()}>
                            <ArrowForwardIosIcon/>
                        </Button>
                    </Grid>
                </ThemeProvider>
            </Box>
        </Stack>
    );
}