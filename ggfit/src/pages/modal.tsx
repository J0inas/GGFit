import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import Stepper from "@/pages/stepper";
import ProgressBar from "@ramonak/react-progress-bar";
import LinearProgress, { linearProgressClasses } from '@mui/material/LinearProgress';
import StepperFunction from "@/pages/stepper";
import TextMobileStepper from "@/pages/anti-these";


// Style der Progress Bar:
// Es wird neues Objekt BorderLinearProgress angelegt, welches Aussehen definiert und auf Mui Linear ProgressBar
// basisert.
const BorderLinearProgress = styled(LinearProgress)(({ theme }) => ({
    height: 10,
    borderRadius: 4,
    [`&.${linearProgressClasses.colorPrimary}`]: {
        backgroundColor: theme.palette.grey[700],
    },
    [`& .${linearProgressClasses.bar}`]: {
        borderRadius: 5,
        backgroundColor: theme.palette.grey[400],
    },
}));


// Style des Modals:
const style = {
    position: 'absolute' as 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 1200,
    height: 700,
    bgcolor: "#343434",
    opacity: '100%',
    border: '1px solid #000',
    boxShadow: 24,
    p: 4
};


// Aussehen des Modals:
export default function BasicModal() {
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    return (
        <div>
            <Button variant="contained" onClick={handleOpen}>Registrieren</Button>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Fade in={open}>
                    <Box sx={style}>
                        <BorderLinearProgress variant="determinate" value={50} />
                        <TextMobileStepper></TextMobileStepper>
                    </Box>
                </Fade>
            </Modal>
        </div>
    );
}