import * as React from 'react'
import Box from "@mui/material/Box"
import { useTheme } from "@mui/material/styles";


// Styling der Box:
const style_box = {
    width: "100%",
    height: "100%",
    bgcolor: "#404040"
}


// Aufbau der Box:
export default function BoxPageNo() {
    const theme = useTheme();

    return (
        <Box sx={style_box}>
        </Box>
    );
}