import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Modal from '@mui/material/Modal';
import Stepper from "@/pages/stepper";
import ProgressBar from "@ramonak/react-progress-bar";
import StepperFunction from "@/pages/stepper";
import TextMobileStepper from "@/pages/anti-these";

const style = {
    position: 'absolute' as 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 800,
    height: 700,
    bgcolor: 'lightgrey',
    opacity: '95%',
    border: '1px solid #000',
    boxShadow: 24,
    p: 4
};

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
                <Box sx={style}>
                    <ProgressBar completed={30}/>
                    <TextMobileStepper></TextMobileStepper>
                </Box>
            </Modal>
        </div>
    );
}