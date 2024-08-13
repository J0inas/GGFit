import * as React from 'react'
import { styled } from '@mui/material/styles'

import Box from "@mui/material/Box"
import Grid from "@mui/material/Grid"
import Stack from "@mui/system/Stack"
import Divider from "@mui/material/Divider"
import TextField from '@mui/material/TextField'
import Button from '@mui/material/Button'
import FormGroup from '@mui/material/FormGroup'
import FormControlLabel from '@mui/material/FormControlLabel'
import Checkbox from '@mui/material/Checkbox'
import Radio from '@mui/material/Radio'
import RadioGroup from '@mui/material/RadioGroup'
import FormControl from '@mui/material/FormControl'
import FormLabel from '@mui/material/FormLabel'
import Slider from '@mui/material/Slider'

import Fade from "@mui/material/Fade"

import LinearProgress, {linearProgressClasses } from "@mui/material/LinearProgress";
import { useTheme, createTheme, ThemeProvider } from "@mui/material/styles";

import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import Typography from "@mui/material/Typography";
import {CheckBox} from "@mui/icons-material";


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



// Styling der Footer Box:
const sx_footer = {
    width: "100%",
    height: 40,
}

declare module '@mui/material/styles' {
    interface Palette {
        white: Palette['primary'];
    }

    interface PaletteOptions {
        white?: PaletteOptions['primary'];
    }
}

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



// Styling der Textboxen, Checkboxen & Divider:
const sx_textbox = {
    // Root class for the input field
    "& .MuiOutlinedInput-root": {
        color: "#707070",                // ???
        fontFamily: "Arial",
        // Class for the border around the input field
        "& .MuiOutlinedInput-notchedOutline": {
            borderColor: "#707070",      // Default Farbe der Border
            borderWidth: "1px",
        },
        "&.Mui-focused": {
            "& .MuiOutlinedInput-notchedOutline": {
                borderColor: "#909090",  // Clicked Farbe der Border
                borderWidth: "1px",
            },
        },
        "&:hover:not(.Mui-focused)": {
            "& .MuiOutlinedInput-notchedOutline": {
                borderColor: "#909090",  // Hovered Farbe der Border
            },
        },
    },
    // Class for the label of the input field ???
    "& .MuiInputLabel-outlined": {
        color: "#ff0000",
        "&.Mui-focused": {
            color: "#ff0000",
        },
    },
}

const sx_checkbox = {
    color: '#707070',             // Farbe des Randes und des Symbols, wenn nicht angekreuzt
        '&.Mui-checked': {
        color: 'white',           // Farbe des Symbols, wenn angekreuzt
    },
    '& .MuiSvgIcon-root': {
        //fontSize: 28,         // Größe der Checkbox (optional)
    },
}

const sx_formlabel = {
    color: '#909090',           // Standardfarbe des Labels
    '&.Mui-focused': {
        color: '#909090',         // Farbe des Labels im Fokus
    },
}

const sx_radiobutton = {
    color: '#909090',           // Farbe des Randes im nicht geklickten Zustand
        '&.Mui-checked': {
        color: '#909090',           // Farbe des Symbols im geklickten Zustand
    },
}

const sx_slider = {
    color: '#d0d0d0', // Farbe des Sliders (Track und Thumb)
    '& .MuiSlider-markLabel': {
        color: '#d0d0d0',             // Farbe der Labels unterhalb des Sliders
    },
    '& .MuiSlider-thumb': {
        borderRadius: '50%',        // Optional: Anpassen der Thumb-Form
        '&:hover, &.Mui-active': {
            boxShadow: '0px 0px 0px 8px rgba(255, 255, 255, 0.24)', // Grüner Schatten beim Ziehen
        },
    },
    '& .MuiSlider-rail': {
        color: 'white',             // Farbe der Schiene (Rail)
    },
}



// Werte des Sliders:
const marks_slider = [
    {
        value: 1,
        label: 'Keine'
    },
    {
        value: 2,
        label: 'Wenig'
    },
    {
        value: 3,
        label: 'Etwas'
    },
    {
        value: 4,
        label: 'Viel'
    },
    {
        value: 5,
        label: 'Sehr viel'
    }
]


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


    // Ausgefüllte Daten:
    const [firstName, setFirstName] = React.useState('');
    const [lastName, setLastName] = React.useState('');
    const [firstMail, setFirstMail] = React.useState('');
    const [lastMail, setLastMail] = React.useState('');
    const [firstPassword, setFirstPassword] = React.useState('');
    const [lastPassword, setLastPassword] = React.useState('');
    const [checkboxStateAge, setCheckboxStateAge] = React.useState(false);
    const [checkboxStateTos, setCheckboxStateTos] = React.useState(false);
    const [checkedGender, setCheckedGender] = React.useState('no-gender');
    const [sliderValue, setSliderValue] = React.useState(1);

    const handleFirstNameChange = (event: { target: { value: React.SetStateAction<string> } }) => {
        setFirstName(event.target.value);
    }
    const handleLastNameChange = (event: { target: { value: React.SetStateAction<string> } }) => {
        setLastName(event.target.value);
    }
    const handleFirstMailChange = (event: { target: { value: React.SetStateAction<string> } }) => {
        setFirstMail(event.target.value);
    }
    const handleLastMailChange = (event: { target: { value: React.SetStateAction<string> } }) => {
        setLastMail(event.target.value);
    }
    const handleFirstPasswordChange = (event: { target: { value: React.SetStateAction<string> } }) => {
        setFirstPassword(event.target.value);
    }
    const handleLastPasswordChange = (event: { target: { value: React.SetStateAction<string> } }) => {
        setLastPassword(event.target.value);
    }
    const handleCheckboxStateAgeChange = (event: { target: { value: React.SetStateAction<string> } }) => {
        setCheckboxStateAge(event.target.checked);
    }
    const handleCheckboxStateTosChange = (event: { target: { value: React.SetStateAction<string> } }) => {
        setCheckboxStateTos(event.target.checked);
    }
    const handleCheckedGenderChange = (event: { target: { value: React.SetStateAction<string> } }) => {
        setCheckedGender(event.target.value);
    }
    const handleSliderValueChange = (event: { target: { value: React.SetStateAction<string> } }) => {
        setSliderValue(event.target.value)
    }


    // Aufbau des Formulars:
    return (
        <Stack spacing={3}>
            <Box sx={{height: 10}}><BorderLinearProgress variant="determinate" value={progress}/></Box>

            <Box sx={{ width: "100%", height: 520, overflow: 'hidden' }}>

                <Fade in={boxNumber === 0} mountOnEnter unmountOnExit>
                    <Box sx={{width: "100%", height: "100%"}}>
                        <Stack spacing={4} direction="column">
                            <Box sx={{width: "100%", height: 20}}/>
                            <Divider textAlign="left"
                                     sx={{"&::before, &::after": { borderColor: "#d0d0d0" }}}
                            >
                                <Typography fontFamily="Arial" fontSize={24}>Account-Informationen</Typography>
                            </Divider>
                            <Stack spacing={3} direction="row">
                                <TextField id="first-name"
                                           label="Vorname"
                                           variant="outlined"
                                           fullWidth={true}
                                           required={true}
                                           value={firstName}
                                           onChange={handleFirstNameChange}
                                           InputProps={{style: { color: 'white' }}}
                                           InputLabelProps={{style: { color: 'white' }}}
                                           sx={sx_textbox}
                                />
                                <TextField id="last-name"
                                           label="Nachname"
                                           variant="outlined"
                                           fullWidth={true}
                                           required={true}
                                           value={lastName}
                                           onChange={handleLastNameChange}
                                           InputProps={{style: { color: 'white' }}}
                                           InputLabelProps={{style: { color: 'white' }}}
                                           sx={sx_textbox}
                                />
                            </Stack>
                            <Box sx={{width: "100%", height: 10}} />
                            <TextField id="mail-first"
                                       label="E-Mail"
                                       variant="outlined"
                                       fullWidth={true}
                                       required={true}
                                       value={firstMail}
                                       onChange={handleFirstMailChange}
                                       InputProps={{style: { color: 'white' }}}
                                       InputLabelProps={{style: { color: 'white' }}}
                                       sx={sx_textbox}
                            />
                            <TextField id="mail-last"
                                       label="Bestätigung der E-Mail"
                                       variant="outlined"
                                       fullWidth={true}
                                       required={true}
                                       value={lastMail}
                                       onChange={handleLastMailChange}
                                       InputProps={{style: { color: 'white' }}}
                                       InputLabelProps={{style: { color: 'white' }}}
                                       sx={sx_textbox}
                            />
                        </Stack>
                    </Box>


                </Fade>


                <Fade in={boxNumber === 1} mountOnEnter unmountOnExit>
                    <Box sx={{ width: "100%", height: "100%"}}>
                        <Stack spacing={4} direction="column">
                            <Box sx={{width: "100%", height: 20}}/>
                            <Divider textAlign="left"
                                     sx={{"&::before, &::after": { borderColor: "#d0d0d0" }}}
                            >
                                <Typography fontFamily="Arial" fontSize={24}>Account-Informationen</Typography>
                            </Divider>
                            <TextField id="password-first"
                                       label="Passwort"
                                       variant="outlined"
                                       type="password"
                                       fullWidth={true}
                                       required={true}
                                       value={firstPassword}
                                       onChange={handleFirstPasswordChange}
                                       InputProps={{style: { color: 'white' }}}
                                       InputLabelProps={{style: { color: 'white' }}}
                                       sx={sx_textbox}
                            />
                            <TextField id="password-last"
                                       label="Bestätigung des Passworts"
                                       variant="outlined"
                                       type="password"
                                       fullWidth={true}
                                       required={true}
                                       value={lastPassword}
                                       onChange={handleLastPasswordChange}
                                       InputProps={{style: { color: 'white' }}}
                                       InputLabelProps={{style: { color: 'white' }}}
                                       sx={sx_textbox}
                            />
                            <Box sx={{width: "100%", height: 10}} />
                            <FormGroup>
                                <FormControlLabel control={
                                    <Checkbox sx={sx_checkbox}
                                              checked={checkboxStateAge}
                                              onChange={handleCheckboxStateAgeChange}/>
                                }
                                                  label={
                                                      <Typography fontFamily="Arial" fontSize={18}>
                                                          Ich bin mindestens 18 Jahre alt.
                                                      </Typography>
                                                  }
                                />
                                <FormControlLabel control={
                                    <Checkbox sx={sx_checkbox}
                                              checked={checkboxStateTos}
                                              onChange={handleCheckboxStateTosChange}/>
                                }
                                                  label={
                                                      <Typography fontFamily="Arial" fontSize={18}>
                                                          Ich habe die AGB und Datenschutzrichtlinien gelesen und stimmen diesen zu.
                                                      </Typography>
                                                  }
                                />
                            </FormGroup>
                        </Stack>
                    </Box>
                </Fade>


                <Fade in={boxNumber === 2} mountOnEnter unmountOnExit>
                    <Box sx={{ width: "100%", height: "100%"}}>
                        <Stack spacing={4} direction="column">
                            <Box sx={{width: "100%", height: 20}}/>
                            <Divider textAlign="left"
                                     sx={{"&::before, &::after": { borderColor: "#d0d0d0" }}}
                            >
                                <Typography fontFamily="Arial" fontSize={24}>Persönliche Angaben</Typography>
                            </Divider>
                            <Box sx={{width: "100%", height: 15}}/>
                            <Box sx={{width: "100%", height: "100%", px: 13}}>
                                <Stack spacing={3} direction="row">
                                    <FormControl>
                                        <FormLabel id="gender-radio-button-group-label" sx={sx_formlabel}>
                                        </FormLabel>
                                        <RadioGroup aria-labelledby="gender-radio-button-group"
                                                    name="gender-radio-button-group"
                                                    value={checkedGender}
                                                    onChange={handleCheckedGenderChange}
                                        >
                                            <FormControlLabel value="female" control={<Radio sx={sx_radiobutton}/>} label="Weiblich" />
                                            <FormControlLabel value="male" control={<Radio sx={sx_radiobutton}/>} label="Männlich" />
                                            <FormControlLabel value="non-binary" control={<Radio sx={sx_radiobutton}/>} label="Nichtbinär" />
                                            <FormControlLabel value="no-gender" control={<Radio sx={sx_radiobutton}/>} label="Keine Angabe" />
                                        </RadioGroup>
                                    </FormControl>
                                    <Box height="100%" width={100}/>
                                    <Box height="100%" width={500}>
                                        <Stack spacing={2} direction="column">
                                            <Box/>
                                            <Typography align="center" fontFamily="Arial" fontSize={20}>
                                                Vorerfahrung:
                                            </Typography>
                                            <Slider aria-label="Label"
                                                    value={sliderValue}
                                                    onChange={handleSliderValueChange}
                                                    shiftStep={1}
                                                    step={1}
                                                    marks={marks_slider}
                                                    min={1}
                                                    max={5}
                                                    sx={sx_slider}
                                            />
                                        </Stack>
                                    </Box>
                                </Stack>
                            </Box>
                        </Stack>
                    </Box>
                </Fade>



            </Box>

            <Box sx={sx_footer}>
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