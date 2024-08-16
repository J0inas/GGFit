import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import BoxProgressBar from "@/pages/ProgressBar/box_progress_bar";
import BoxNoProgressBar from "@/pages/NoProgressBar/box_page_no2";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Typography from "@mui/material/Typography";


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
    p: 6,                // padding
    px: 8,
};


// Styling des Buttons:
// Styling der Footer Box:
const sx_footer = {
    width: "100%",
    height: 40,
}

declare module '@mui/material/styles' {
    interface Palette {
        white: Palette['primary'];
    }

    interface PaletteOptions {
        white?: PaletteOptions['primary'];
    }
}

declare module '@mui/material/Button' {
    interface ButtonPropsColorOverrides {
        white: true;
    }
}

const footer_theme = createTheme({
    palette: {
        white: {
            main: '#F0F0F0',
        },
    },
});


// Aufbau des Modals:
export default function ModalAnmelden() {
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    return (
        <div>
            <ThemeProvider theme={footer_theme}>
                <Button variant="contained" color="white" onClick={handleOpen}>
                    <Typography fontFamily="Arial" color="#202020">Anmelden</Typography>
                </Button>
            </ThemeProvider>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Fade in={open}>
                    <Box sx={style}>
                        <BoxProgressBar/>
                    </Box>
                </Fade>
            </Modal>
        </div>
    );
}
