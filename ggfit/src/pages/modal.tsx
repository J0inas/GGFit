import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import BoxPageNo from "@/pages/NoProgressBar/box_page_no";
import BoxProgressBar from "@/pages/ProgressBar/box_progress_bar";
import BoxNoProgressBar from "@/pages/NoProgressBar/box_page_no";


// Style der Modal Box:
const style = {
    position: 'absolute' as 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 1200,
    height: 700,
    bgcolor: "#343434",
    opacity: '100%',
    border: '0px solid #000',
    boxShadow: 24,
    borderRadius: 2,
    p: 6                // padding
};


// Aufbau des Modals:
export default function BasicModal() {
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    return (
        <div>
            <Button variant="contained" onClick={handleOpen}>Registrierung</Button>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Fade in={open}>
                    <Box sx={style}>
                        <BoxNoProgressBar/>
                    </Box>
                </Fade>
            </Modal>
        </div>
    );
}