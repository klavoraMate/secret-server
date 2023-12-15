'use client';
import {useState} from "react";
import {Dialog, DialogTitle, DialogContent, DialogContentText, DialogActions, Button} from "@mui/material";
import FormCreateSecret from "@/app/components/form/FormCreateSecret";

export default function Create() {
    const [open, setOpen] = useState(false);
    const [hash, setHash] = useState('');
    const [isError, setIsError] = useState(false);

    const handleResponse = (responseHash: string, error = false) => {
        setHash(responseHash);
        setIsError(error);
        setOpen(true);
    }

    const handleClose = () => {
        setOpen(false);
    }

    return (
        <div>
            <FormCreateSecret onResponse={handleResponse}/>
            <Dialog open={open} onClose={handleClose}>
                <DialogTitle>{isError ? "Error" : "Secret Created"}</DialogTitle>
                <DialogContent>
                    <DialogContentText>
                        {isError ? hash : `The hash of your secret is ${hash}`}
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose}>Close</Button>
                </DialogActions>
            </Dialog>
        </div>
    );
}