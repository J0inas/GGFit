import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

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
            <TextField
                id="standard-helperText"
                label="Name"
                defaultValue="Default Value"
                helperText="Some important text"
                variant="standard"
                color="secondary"
                focused
            />
        </Box>
    );
}