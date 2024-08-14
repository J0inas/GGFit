import React from 'react';
import { Button } from '@mui/material';

// @ts-ignore
const ExportTXT = ({ data }) => {

    const downloadCSV = () => {
        const csvString = "" + data
        const blob = new Blob([csvString], { type: 'text/csv' });
        const url = window.URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.setAttribute('hidden', '');
        a.setAttribute('href', url);
        a.setAttribute('download', 'data.txt');
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
    };

    return (
        <Button variant="contained" onClick={downloadCSV}>
            Export CSV
        </Button>
    );
};

export default ExportTXT;
