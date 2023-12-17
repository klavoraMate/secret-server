'use client';
import {useState} from "react";
import {DialogContent, DialogContentText, Grid, Input} from "@mui/material";
import FormCreateSecret from "@/app/components/form/FormCreateSecret";
import DialogContainer from "@/app/components/dialog/DialogContainer";

export default function Create() {
    const [open, setOpen] = useState(false);
    const [response, setResponse] = useState('');
    const [isError, setIsError] = useState(false);
    const [isCopied, setIsCopied] = useState(false);

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
        setIsCopied(true);
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
                                <Input value={response} fullWidth={true} readOnly/>
                            </Grid>
                            <Grid item xs={4}>
                                {!isCopied ?
                                    (<img src="/copy.svg" alt="Copy" style={imageStyles} onClick={handleCopy}/>) :
                                    (<img src="/check.png" alt="Copied" style={imageStyles} onClick={handleCopy}/>)
                                }
                            </Grid>
                        </Grid>
                    )}
                </DialogContent>
            </DialogContainer>
        </div>
    );
}

const imageStyles = {
    marginTop: '0.5rem',
    cursor: 'pointer',
    width: '30px',
}