import * as React from 'react';
import Box from '@mui/material/Box';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import OutlinedInput from '@mui/material/OutlinedInput';

// So kann eine simple Textbox aussehen
export default function SimpleText() {
    return (
        <Box
            component="form"
            sx={{
                '& .MuiTextField-root': { m: 1, width: '25ch', bgcolor: 'primary.main' },
            }}
            noValidate
            autoComplete="off"
        >
            <FormControl>
                <InputLabel htmlFor="component-outlined">Vorname</InputLabel>
                <OutlinedInput
                    id="component-outlined"
                    label="Vorname"
                />
            </FormControl>
        </Box>
    );
}