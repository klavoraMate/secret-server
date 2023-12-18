'use client';
import {useState} from "react";
import {DialogContent, DialogContentText, Grid, Input} from "@mui/material";
import FormCreateSecret from "@/app/components/form/FormCreateSecret";
import DialogContainer from "@/app/components/dialog/DialogContainer";

/**
 * Create is a component that renders a form for creating a secret and a dialog for displaying the response.
 * @returns {JSX.Element} The Create component.
 */
export default function Create() {
    const [open, setOpen] = useState(false);
    const [response, setResponse] = useState('');
    const [isError, setIsError] = useState(false);
    const [isCopied, setIsCopied] = useState(false);

    /**
     * Handles the response from the FormCreateSecret component.
     * Sets the response state and opens the dialog.
     * @param {string} response - The response from the FormCreateSecret component.
     * @param {boolean} [error=false] - Indicates whether the response is an error.
     */
    const handleResponse = (response: string, error = false) => {
        setResponse(response);
        setIsError(error);
        setOpen(true);
    }

    /**
     * Closes the dialog.
     */
    const handleClose = () => {
        setOpen(false);
    }

    /**
     * Copies the response to the clipboard and sets the isCopied state.
     */
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

/**
 * The styles for the image in the Create component.
 * @type {Object}
 */
const imageStyles = {
    marginTop: '0.5rem',
    cursor: 'pointer',
    width: '30px',
}