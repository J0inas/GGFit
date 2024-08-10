import * as React from 'react'
import { styled } from '@mui/material/styles'
import Box from "@mui/material/Box"
import Grid from "@mui/material/Grid"
import Stack from "@mui/system/Stack"
import Button from '@mui/material/Button';

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


const Item = styled('div')(({ theme }) => ({
    backgroundColor: '#D9D9D9',
    padding: theme.spacing(1),
    textAlign: 'center',
    borderRadius: 4,
}));


// Aufbau der Box:
export default function BoxProgressBar() {
    const theme = useTheme();

    return (
        <Stack spacing={3}>
            <Box sx={{height: 10}}><BorderLinearProgress variant="determinate" value={50}/></Box>
            <BoxData></BoxData>
            <BoxFooter></BoxFooter>
        </Stack>
    );
}