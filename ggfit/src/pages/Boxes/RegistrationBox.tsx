import React, { useState } from 'react';
import { Box, Stack, TextField, Typography } from '@mui/material';

// @ts-ignore
const RegistrationBox = ({ firstName, lastName, setFirstName, setLastName }) => {
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
    };

    return (
        <Box sx={{ width: "100%", height: "100%" }}>
            <Typography
                variant="h4"
                sx={{ fontFamily: 'Arial', fontStyle: 'italic', fontWeight: '600', color: 'white', marginBottom: 3 }}
            >
                Registrierung
            </Typography>
            <Stack spacing={3} direction="row">
                <TextField
                    id="first-name"
                    label="Vorname"
                    variant="outlined"
                    fullWidth={true}
                    required={true}
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)}
                    InputProps={{ style: { color: 'white' } }}
                    InputLabelProps={{ style: { color: 'white' } }}
                    sx={sx_textbox}
                />
                <TextField
                    id="last-name"
                    label="Nachname"
                    variant="outlined"
                    fullWidth={true}
                    required={true}
                    value={lastName}
                    onChange={(e) => setLastName(e.target.value)}
                    InputProps={{ style: { color: 'white' } }}
                    InputLabelProps={{ style: { color: 'white' } }}
                    sx={sx_textbox}
                />
            </Stack>
        </Box>
    );
};

export default RegistrationBox;