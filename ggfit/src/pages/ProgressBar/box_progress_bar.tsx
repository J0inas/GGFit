import * as React from 'react'
import { styled } from '@mui/material/styles'
import Box from "@mui/material/Box"
import LinearProgress, {linearProgressClasses } from "@mui/material/LinearProgress";
import { useTheme } from "@mui/material/styles";


// Styling der Box:
const style_box = {
    width: "100%",
    height: "100%",
    bgcolor: "#404040"
}


// Styling der Progress Bar:
const BorderLinearProgress = styled(LinearProgress)(({ theme }) => ({
    height: 10,
    borderRadius: 4,
    [`&.${linearProgressClasses.colorPrimary}`]: {
        backgroundColor: theme.palette.grey[700],
    },
    [`& .${linearProgressClasses.bar}`]: {
        borderRadius: 4,
        backgroundColor: theme.palette.grey[400],
    },
}));


// Aufbau der Box:
export default function BoxProgressBar() {
    const theme = useTheme();

    return (
        <Box sx={style_box}>
            <BorderLinearProgress variant="determinate" value={50} />
        </Box>
    );
}