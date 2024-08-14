import * as React from 'react'
import { styled } from '@mui/material/styles'

import Box from "@mui/material/Box"
import Grid from "@mui/material/Grid"
import Stack from "@mui/system/Stack"
import Divider from "@mui/material/Divider"
import TextField from '@mui/material/TextField'
import Button from '@mui/material/Button'
import FormControl from '@mui/material/FormControl'
import InputLabel from '@mui/material/InputLabel'
import Select, { SelectChangeEvent } from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import FormGroup from '@mui/material/FormGroup'
import FormControlLabel from '@mui/material/FormControlLabel'
import Checkbox from '@mui/material/Checkbox'
import Slider from '@mui/material/Slider'

import Fade from "@mui/material/Fade"

import LinearProgress, {linearProgressClasses } from "@mui/material/LinearProgress";
import { useTheme, createTheme, ThemeProvider } from "@mui/material/styles";

import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import Typography from "@mui/material/Typography";

import ExportTXT from '../ProgressBar/ExportTXT';


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

const sx_select = {
    '& .MuiOutlinedInput-notchedOutline': {
        borderColor: '#707070',
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
    '& .MuiSelect-select': {
        color: 'white', // Schriftfarbe des ausgewählten Wertes
    },

    '& .MuiSvgIcon-root': {
        color: 'white', // Farbe des Pfeils
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
        label: 'keine'
    },
    {
        value: 2,
        label: 'wenig'
    },
    {
        value: 3,
        label: 'etwas'
    },
    {
        value: 4,
        label: 'viel'
    },
    {
        value: 5,
        label: 'sehr viel'
    }
]


// Aufbau der Box:
export default function BoxNoProgressBar() {
    const theme = useTheme();

    // ProgressBar:
    const [progress, setProgress] = React.useState<number>(45);
    const updateProgress = () => {
        let totalProgress: number = 45

        let progressInc: number = 6
        if (genderGiven()) totalProgress += progressInc
        if (ageGiven()) totalProgress += progressInc
        if (heightGiven()) totalProgress += progressInc
        if (weightGiven()) totalProgress += progressInc

        progressInc = 7
        if (boxNumber >= 3) totalProgress += progressInc

        progressInc = 5
        if (targetStepsGiven()) totalProgress += progressInc
        if (targetWeightGiven()) totalProgress += progressInc
        if (targetWaterGiven()) totalProgress += progressInc

        progressInc = 3
        if (usernameGiven()) totalProgress += progressInc
        if (phoneNumberGiven()) totalProgress += progressInc
        if (checkboxState2FA) totalProgress += progressInc

        setProgress((prevProgress) => Math.max(Math.min(totalProgress, 100), 0));
    };

    const firstNameGiven = () => {
        return firstName != '';
    }
    const lastNameGiven = () => {
        return lastName != '';
    }
    const firstMailGiven = () => {
        return firstMail != '';
    }
    const lastMailGiven = () => {
        return lastMail != '';
    }

    const firstPasswordGiven = () => {
        return firstPassword != '';
    }
    const lastPasswordGiven = () => {
        return lastPassword != '';
    }

    const genderGiven = () => {
        return gender != '';
    }
    const ageGiven = () => {
        return age != '';
    }
    const heightGiven = () => {
        return height != '';
    }
    const weightGiven = () => {
        return weight != '';
    }

    const targetStepsGiven = () => {
        return (targetSteps != '' || checkboxTargetSteps);
    }
    const targetWeightGiven = () => {
        return (targetWeight != '' || checkboxTargetWeight);
    }
    const targetWaterGiven = () => {
        return (targetWater != '' || checkboxTargetWater);
    }

    const usernameGiven = () => {
        return username != '';
    }
    const phoneNumberGiven = () => {
        return phoneNumber != '+49';
    }

    // Sliding der Anmeldung:
    const [boxNumber, setBoxNumber] = React.useState(0);
    const increaseBoxNumber = () => {

        if (boxNumber == 0 && (!firstNameGiven() || !lastNameGiven() || !firstMailGiven() || !lastMailGiven())) return;
        if (boxNumber == 1 && (!firstPasswordGiven() || !lastPasswordGiven() || !checkboxStateAge || !checkboxStateTos)) return;
        updateProgress()

        setBoxNumber((prevBoxNumber) => Math.min(prevBoxNumber + 1, 6));
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

    const [gender, setGender] = React.useState('');
    const [age, setAge] = React.useState('');
    const [height, setHeight] = React.useState('');
    const [weight, setWeight] = React.useState('');

    const [sliderValue, setSliderValue] = React.useState(1);

    const [targetSteps, setTargetSteps] = React.useState('');
    const [checkboxTargetSteps, setCheckboxTargetSteps] = React.useState(false);
    const [targetWeight, setTargetWeight] = React.useState('');
    const [checkboxTargetWeight, setCheckboxTargetWeight] = React.useState(false);
    const [targetWater, setTargetWater] = React.useState('');
    const [checkboxTargetWater, setCheckboxTargetWater] = React.useState(false);

    const [username, setUsername] = React.useState('');
    const [phoneNumber, setPhoneNumber] = React.useState('+49');
    const [checkboxState2FA, setCheckboxState2FA] = React.useState(false);

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

    const handleGenderChange = (event: SelectChangeEvent) => {
        setGender(event.target.value);
    }
    const handleAgeChange = (event: { target: { value: React.SetStateAction<string> } }) => {
        const value = event.target.value;
        if (/^\d*$/.test(value)) {
            setAge(value);
        }
    }
    const handleHeightChange = (event: { target: { value: React.SetStateAction<string> } }) => {
        const value = event.target.value;
        if (/^\d*$/.test(value)) {
            setHeight(value);
        }
    }
    const handleWeightChange = (event: { target: { value: React.SetStateAction<string> } }) => {
        const value = event.target.value;
        if (/^\d*$/.test(value)) {
            setWeight(value);
        }
    }

    const handleSliderValueChange = (event: { target: { value: React.SetStateAction<string> } }) => {
        setSliderValue(event.target.value)
    }

    const handleTargetStepsChange = (event: { target: { value: React.SetStateAction<string> } }) => {
        const value = event.target.value;
        if (/^\d*$/.test(value)) {
            setTargetSteps(value);
        }
    }
    const handleCheckboxTargetStepsChange = (event: { target: { value: React.SetStateAction<string> } }) => {
        setCheckboxTargetSteps(event.target.checked)
    }
    const handleTargetWeightChange = (event: { target: { value: React.SetStateAction<string> } }) => {
        const value = event.target.value;
        if (/^\d*$/.test(value)) {
            setTargetWeight(value);
        }
    }
    const handleCheckboxTargetWeightChange = (event: { target: { value: React.SetStateAction<string> } }) => {
        setCheckboxTargetWeight(event.target.checked)
    }
    const handleTargetWaterChange = (event: { target: { value: React.SetStateAction<string> } }) => {
        const value = event.target.value;
        if (/^\d*$/.test(value)) {
            setTargetWater(value);
        }
    }
    const handleCheckboxTargetWaterChange = (event: { target: { value: React.SetStateAction<string> } }) => {
        setCheckboxTargetWater(event.target.checked)
    }

    const handleUsernameChange = (event: { target: { value: React.SetStateAction<string> } }) => {
        setUsername(event.target.value);
    }
    const handlePhoneNumberChange = (event: { target: { value: React.SetStateAction<string> } }) => {
        const value = event.target.value;
        if (/^\+\d*$/.test(value)) {
            setPhoneNumber(value);
        }
    }
    const handleCheckboxState2FAChange = (event: { target: { value: React.SetStateAction<string> } }) => {
        setCheckboxState2FA(event.target.checked);
    }


    // Ergebnisse:
    const [resultsSaved, setResultsSaved] = React.useState(false);
    const getData = () => {

        const data = [
            "firstName", firstNameGiven(),
            "lastName", lastNameGiven(),
            "firstMail", firstMailGiven(),
            "lastMail", lastMailGiven(),
            "firstPassword", firstPasswordGiven(),
            "lastPassword", lastPasswordGiven(),
            "checkboxStateAge", checkboxStateAge,
            "checkboxStateTos", checkboxStateTos,
            "gender", genderGiven(),
            "age", ageGiven(),
            "height", heightGiven(),
            "weight", weightGiven(),
            "sliderValue", sliderValue,
            "targetSteps", targetStepsGiven(),
            "targetWeight", targetWeightGiven(),
            "targetWater", targetWaterGiven(),
            "username", usernameGiven(),
            "phoneNumber", phoneNumberGiven(),
            "twofactor", checkboxState2FA,
        ]

        return data;
    }


    // Aufbau des Formulars:
    const timeout_fade = 200
    return (
        <Stack spacing={3}>
            <Box sx={{height: 10}}>
            </Box>

            <Box sx={{ width: "100%", height: 520, overflow: 'hidden' }}>

                <Fade in={boxNumber === 0} mountOnEnter unmountOnExit timeout={timeout_fade}>
                    <Box sx={{width: "100%", height: "100%"}}>
                        <Stack spacing={4} direction="column">
                            <Box sx={{width: "100%", height: 20}}/>
                            <Divider textAlign="left"
                                     sx={{"&::before, &::after": { borderColor: "#d0d0d0" }}}
                            >
                                <Typography fontFamily="Arial" fontSize={24}>Account-Informationen</Typography>
                            </Divider>
                            <Typography fontFamily="Arial" fontSize={18}>Bitte fülle diese Felder aus, bevor du fortfahren kannst.</Typography>
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


                <Fade in={boxNumber === 1} mountOnEnter unmountOnExit timeout={timeout_fade}>
                    <Box sx={{ width: "100%", height: "100%"}}>
                        <Stack spacing={4} direction="column">
                            <Box sx={{width: "100%", height: 20}}/>
                            <Divider textAlign="left"
                                     sx={{"&::before, &::after": { borderColor: "#d0d0d0" }}}
                            >
                                <Typography fontFamily="Arial" fontSize={24}>Account-Informationen</Typography>
                            </Divider>
                            <Typography fontFamily="Arial" fontSize={18}>Bitte fülle diese Felder aus, bevor du fortfahren kannst.</Typography>
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


                <Fade in={boxNumber === 2} mountOnEnter unmountOnExit timeout={timeout_fade}>
                    <Box sx={{ width: "100%", height: "100%"}}>
                        <Stack spacing={4} direction="column">
                            <Box sx={{width: "100%", height: 20}}/>
                            <Divider textAlign="left"
                                     sx={{"&::before, &::after": { borderColor: "#d0d0d0" }}}
                            >
                                <Typography fontFamily="Arial" fontSize={24}>Persönliche Angaben (Optional)</Typography>
                            </Divider>
                            <Stack spacing={3} direction="column">
                                <FormControl fullWidth={true}>
                                    <InputLabel id="select-gender-label"
                                                sx={{
                                                    color: 'white',
                                                    '&.Mui-focused': {
                                                        color: 'white',
                                                    },
                                                }}
                                    >
                                        Geschlecht
                                    </InputLabel>
                                    <Select
                                        labelId="select-gender-label"
                                        id="gender-select"
                                        value={gender}
                                        label="Geschlecht"
                                        onChange={handleGenderChange}
                                        sx={sx_select}
                                        MenuProps={{
                                            PaperProps: {
                                                sx: {
                                                    bgcolor: '#404040',
                                                    '& .MuiMenuItem-root': {
                                                        color: 'white',
                                                    },
                                                },
                                            },
                                        }}
                                    >
                                        <MenuItem value={1}>Weiblich</MenuItem>
                                        <MenuItem value={2}>Männlich</MenuItem>
                                        <MenuItem value={3}>Nichtbinär</MenuItem>
                                        <MenuItem value={4}>Keine Angabe</MenuItem>
                                    </Select>
                                </FormControl>
                                <TextField id="age"
                                           label="Alter (in Jahren)"
                                           variant="outlined"
                                           fullWidth={true}
                                           value={age}
                                           onChange={handleAgeChange}
                                           InputProps={{ style: { color: 'white' } }}
                                           InputLabelProps={{style: { color: 'white' }}}
                                           sx={sx_textbox}
                                />
                                <TextField id="height"
                                           label="Größe (in cm)"
                                           variant="outlined"
                                           fullWidth={true}
                                           value={height}
                                           onChange={handleHeightChange}
                                           InputProps={{style: { color: 'white' }}}
                                           InputLabelProps={{style: { color: 'white' }}}
                                           sx={sx_textbox}
                                />
                                <TextField id="weight"
                                           label="Gewicht (in kg)"
                                           variant="outlined"
                                           fullWidth={true}
                                           value={weight}
                                           onChange={handleWeightChange}
                                           InputProps={{style: { color: 'white' }}}
                                           InputLabelProps={{style: { color: 'white' }}}
                                           sx={sx_textbox}
                                />
                            </Stack>
                        </Stack>
                    </Box>
                </Fade>


                <Fade in={boxNumber === 3} mountOnEnter unmountOnExit timeout={timeout_fade}>
                    <Box sx={{ width: "100%", height: "100%"}}>
                        <Stack spacing={4} direction="column">
                            <Box sx={{width: "100%", height: 20}}/>
                            <Divider textAlign="left"
                                     sx={{"&::before, &::after": { borderColor: "#d0d0d0" }}}
                            >
                                <Typography fontFamily="Arial" fontSize={24}>Vorerfahrung (Optional)</Typography>
                            </Divider>
                            <Box sx={{width: "100%", height: 120}}/>
                            <Box sx={{width: "100%", height: "100%", px: 13}}>
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
                            </Box>
                        </Stack>
                    </Box>
                </Fade>


                <Fade in={boxNumber === 4} mountOnEnter unmountOnExit timeout={timeout_fade}>
                    <Box sx={{ width: "100%", height: "100%"}}>
                        <Stack spacing={4} direction="column">
                            <Box sx={{width: "100%", height: 20}}/>
                            <Divider textAlign="left"
                                     sx={{"&::before, &::after": { borderColor: "#d0d0d0" }}}
                            >
                                <Typography fontFamily="Arial" fontSize={24}>Fitness-Ziele (Optional)</Typography>
                            </Divider>
                            <Box sx={{width: "100%"}}>
                                <TextField id="target-steps"
                                           label="Ziel: Anz. Schritte"
                                           variant="outlined"
                                           fullWidth={true}
                                           disabled={checkboxTargetSteps}
                                           value={targetSteps}
                                           onChange={handleTargetStepsChange}
                                           InputProps={{
                                               style: { color: 'white' },
                                               sx: {
                                                   "& .MuiInputBase-input.Mui-disabled": {
                                                       WebkitTextFillColor: "#909090",
                                                       color: "white"
                                                   }
                                               }
                                           }}
                                           InputLabelProps={{style: { color: 'white' }}}
                                           sx={sx_textbox}
                                />
                                <Box sx={{width: "100%", height: 1}}/>
                                <FormGroup>
                                    <FormControlLabel control={
                                        <Checkbox sx={sx_checkbox}
                                                  checked={checkboxTargetSteps}
                                                  onChange={handleCheckboxTargetStepsChange}/>
                                    }
                                                      label={
                                                          <Typography fontFamily="Arial" fontSize={18}>
                                                              Ich habe kein Schritt-Ziel.
                                                          </Typography>
                                                      }
                                    />
                                </FormGroup>
                            </Box>
                            <Box sx={{width: "100%"}}>
                                <TextField id="target-weight"
                                           label="Ziel: Gewicht (in kg)"
                                           variant="outlined"
                                           fullWidth={true}
                                           disabled={checkboxTargetWeight}
                                           value={targetWeight}
                                           onChange={handleTargetWeightChange}
                                           InputProps={{
                                               style: { color: 'white' },
                                               sx: {
                                                   "& .MuiInputBase-input.Mui-disabled": {
                                                       WebkitTextFillColor: "#909090",
                                                       color: "white"
                                                   }
                                               }
                                           }}
                                           InputLabelProps={{style: { color: 'white' }}}
                                           sx={sx_textbox}
                                />
                                <Box sx={{width: "100%", height: 1}}/>
                                <FormGroup>
                                    <FormControlLabel control={
                                        <Checkbox sx={sx_checkbox}
                                                  checked={checkboxTargetWeight}
                                                  onChange={handleCheckboxTargetWeightChange}/>
                                    }
                                                      label={
                                                          <Typography fontFamily="Arial" fontSize={18}>
                                                              Ich habe kein Gewichts-Ziel.
                                                          </Typography>
                                                      }
                                    />
                                </FormGroup>
                            </Box>
                            <Box sx={{width: "100%"}}>
                                <TextField id="target-water"
                                           label="Ziel: Wasser pro Tag (in ml)"
                                           variant="outlined"
                                           fullWidth={true}
                                           disabled={checkboxTargetWater}
                                           value={targetWater}
                                           onChange={handleTargetWaterChange}
                                           InputProps={{
                                               style: { color: 'white' },
                                               sx: {
                                                   "& .MuiInputBase-input.Mui-disabled": {
                                                       WebkitTextFillColor: "#909090",
                                                       color: "white",
                                                   }
                                               }
                                           }}
                                           InputLabelProps={{style: { color: 'white' }}}
                                           sx={sx_textbox}
                                />
                                <Box sx={{width: "100%", height: 1}}/>
                                <FormGroup>
                                    <FormControlLabel control={
                                        <Checkbox sx={sx_checkbox}
                                                  checked={checkboxTargetWater}
                                                  onChange={handleCheckboxTargetWaterChange}/>
                                    }
                                                      label={
                                                          <Typography fontFamily="Arial" fontSize={18}>
                                                              Ich habe kein Wasser-Ziel.
                                                          </Typography>
                                                      }
                                    />
                                </FormGroup>
                            </Box>


                            <Box sx={{width: "100%", height: 15}}/>
                            <Box sx={{width: "100%", height: "100%", px: 13}}>
                                <Stack spacing={3} direction="row">

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


                <Fade in={boxNumber === 5} mountOnEnter unmountOnExit timeout={timeout_fade}>
                    <Box sx={{ width: "100%", height: "100%"}}>
                        <Stack spacing={4} direction="column">
                            <Box sx={{width: "100%", height: 20}}/>
                            <Divider textAlign="left"
                                     sx={{"&::before, &::after": { borderColor: "#d0d0d0" }}}
                            >
                                <Typography fontFamily="Arial" fontSize={24}>Account-Sicherheit (Optional)</Typography>
                            </Divider>
                            <TextField id="username"
                                       label="Nutzername"
                                       variant="outlined"
                                       fullWidth={true}
                                       value={username}
                                       onChange={handleUsernameChange}
                                       InputProps={{style: { color: 'white' }}}
                                       InputLabelProps={{style: { color: 'white' }}}
                                       sx={sx_textbox}
                            />
                            <Box sx={{width: "100%", height: 10}} />
                            <Box sx={{width: "100%", height: 10}}>
                                <TextField id="phone-number"
                                           label="Telefonnummer"
                                           variant="outlined"
                                           fullWidth={true}
                                           value={phoneNumber}
                                           onChange={handlePhoneNumberChange}
                                           InputProps={{style: { color: 'white' }}}
                                           InputLabelProps={{style: { color: 'white' }}}
                                           sx={sx_textbox}
                                />
                                <Box sx={{width: "100%", height: 1}}/>
                                <FormGroup>
                                    <FormControlLabel control={
                                        <Checkbox sx={sx_checkbox}
                                                  checked={checkboxState2FA}
                                                  onChange={handleCheckboxState2FAChange}/>
                                    }
                                                      label={
                                                          <Typography fontFamily="Arial" fontSize={18}>
                                                              Ich möchte 2-Faktor-Authentifierung über SMS aktivieren.
                                                          </Typography>
                                                      }
                                    />
                                </FormGroup>
                            </Box>
                        </Stack>
                    </Box>
                </Fade>


                <Fade in={boxNumber === 6} mountOnEnter unmountOnExit timeout={timeout_fade}>
                    <Box sx={{ width: "100%", height: "100%"}}>
                        <Stack spacing={4} direction="column">
                            <Box sx={{width: "100%", height: 20}}/>
                            <Divider textAlign="left"
                                     sx={{"&::before, &::after": { borderColor: "#d0d0d0" }}}
                            >
                                <Typography fontFamily="Arial" fontSize={24}>Vielen Dank für deine Teilnahme</Typography>
                            </Divider>
                            <Box>
                                <Typography fontFamily="Arial" fontSize={18}>
                                    Du hast jetzt die Möglichkeit deine Registrierung zu vervollständigen.
                                </Typography>
                                <Typography fontFamily="Arial" fontSize={18}>
                                    Wenn du fertig bist, drück einfach auf den Knopf. ⬇️
                                </Typography>
                            </Box>
                            <ExportTXT data={getData()} />
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
                        { // no backwards button on 1. page
                            boxNumber >= 1 && (
                                <Button variant="outlined" color="white" onClick={() => decreaseBoxNumber()}>
                                    <ArrowBackIosNewIcon/>
                                </Button>
                            )
                        }
                        {
                            boxNumber === 0 && (
                                <Box sx={{ width: "6%"}}>
                                </Box>
                            )
                        }
                        <Box align="center" justify="space-between">
                            <Typography fontFamily="Arial" fontSize={16} >{boxNumber + 1}</Typography>
                        </Box>
                        { // no forward button on last page
                            boxNumber <= 5 && (
                                <Button variant="outlined" color="white" onClick={() => increaseBoxNumber()}>
                                    <ArrowForwardIosIcon/>
                                </Button>
                            )
                        }
                        {
                            boxNumber === 6 && (
                                <Box sx={{ width: "6%"}}>
                                </Box>
                            )
                        }
                    </Grid>
                </ThemeProvider>
            </Box>
        </Stack>
    );
}
