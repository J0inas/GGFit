import Typography from "@mui/material/Typography";
import SimpleText from "@/pages/text";
import * as React from "react";
import Box from "@mui/material/Box";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import OutlinedInput from "@mui/material/OutlinedInput";

export default function Template() {
    return (
        <>
            <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                Bitte geben Sie mir ihre Daten:
            </Typography>
            <SimpleText/>
        </>
    );
}
