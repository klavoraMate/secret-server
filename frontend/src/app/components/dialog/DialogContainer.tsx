import {Button, Dialog, DialogActions, DialogTitle} from "@mui/material";

/**
 * DialogContainerProps
 * @interface
 * @property {boolean} open - Indicates whether the dialog is open or not.
 * @property {Function} onClose - Function to be called when the dialog needs to be closed.
 * @property {string} title - The title of the dialog.
 * @property {React.ReactNode} children - The content of the dialog.
 */
interface DialogContainerProps {
    open: boolean;
    onClose: () => void;
    title: string;
    children: React.ReactNode;
}

/**
 * DialogContainer is a component that renders a dialog with a title, content, and a close button.
 * @param {DialogContainerProps} props - The properties that define the dialog's behavior and content.
 * @returns {JSX.Element} The DialogContainer component.
 */
export default function DialogContainer({open, onClose, title, children}: DialogContainerProps) {

    return (
        <div>
            <Dialog open={open} onClose={onClose} sx={dialogStyles}>
                <DialogTitle>{title}</DialogTitle>
                {children}
                <DialogActions>
                    <Button onClick={onClose}>Close</Button>
                </DialogActions>
            </Dialog>
        </div>
    );
}

/**
 * The styles for the DialogContainer component.
 * @type {Object}
 */
const dialogStyles = {
    '& .MuiDialog-paper': {
        backgroundColor: 'rgb(244, 133, 49)',
        color: 'white',
        borderRadius: '2rem',
        padding: '2rem',
        border: '2px solid white',
        '& .MuiDialogTitle-root': {
            fontSize: '2rem',
            textAlign: 'center',
            '& .MuiTypography-root': {
                fontFamily: 'sans-serif',
                fontWeight: 'bold',
            },
        },
        '& .MuiDialogContent-root': {
            fontSize: '1.5rem',
            textAlign: 'center',
            '& .MuiDialogContentText-root': {
                fontFamily: 'sans-serif',
            },
        },
        '& .MuiDialogActions-root': {
            justifyContent: 'center',
            '& .MuiButton-root': {
                fontSize: '1.5rem',
                fontFamily: 'sans-serif',
                color: 'white',
                border: '2px solid white',
                borderRadius: '2rem',
                padding: '1rem 2rem',
                margin: '0 0.5rem',
                backgroundColor: 'rgb(244, 133, 49)',
                '&:hover': {
                    backgroundColor: 'rgb(244, 133, 49, 0.5)',
                },
            },
        },
    },
}