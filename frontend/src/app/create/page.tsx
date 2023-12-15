'use client';
import {useState} from "react";
import {
    DialogContent,
    DialogContentText,
    DialogActions,
    Button,
    Grid, Input
} from "@mui/material";
import FormCreateSecret from "@/app/components/form/FormCreateSecret";
import DialogContainer from "@/app/components/dialog/DialogContainer";
import {makeStyles} from "@mui/styles";

export default function Create() {
    const [open, setOpen] = useState(false);
    const [response, setResponse] = useState('');
    const [isError, setIsError] = useState(false);
    const classes = useStyle();

    const handleResponse = (response: string, error = false) => {
        setResponse(response);
        setIsError(error);
        setOpen(true);
    }

    const handleClose = () => {
        setOpen(false);
    }

    const handleCopy = () => {
        navigator.clipboard.writeText(response);
    }

    return (
        <div>
            <FormCreateSecret onResponse={handleResponse}/>
            <DialogContainer open={open} onClose={handleClose} title={isError ? 'Error:' : 'Secret created'}>
                <DialogContent>
                    <DialogContentText>
                        {isError ? response : 'The hash of your secret is'}
                    </DialogContentText>
                    {!isError && (
                        <Grid container alignItems="center" spacing={1}>
                            <Grid item xs={8}>
                                <Input value={response} readOnly
                                       inputProps={{className: classes.input}}/>
                            </Grid>
                            <Grid item xs={4}>
                                <img src="/copied_icon.svg" alt="Copy" onClick={handleCopy} className={classes.image}/>
                            </Grid>
                        </Grid>
                    )}
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose}>Close</Button>
                </DialogActions>
            </DialogContainer>
        </div>
    );
}

const useStyle = makeStyles({
    input: {
        textAlign: 'center',
        width: '100%',
    },
    image: {
        marginTop: '0.5rem',
        cursor: 'pointer',
        width: '40%',
    }
});