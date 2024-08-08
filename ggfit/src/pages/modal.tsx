import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import FormPropsTextFields from "@/pages/text";
import SimpleText from "@/pages/text";

const style = {
    position: 'absolute' as 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 700,
    height: 700,
    bgcolor: 'black',
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
                    <Typography id="modal-modal-title" variant="h6" component="h2">
                        Registrierung
                    </Typography>
                    <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                        Bitte geben Sie mir ihre Daten:
                    </Typography>
                    <SimpleText/>
                </Box>
            </Modal>
        </div>
    );
}