import {Button, Dialog, DialogActions, DialogTitle} from "@mui/material";
import {makeStyles} from "@mui/styles";

interface DialogContainerProps {
    open: boolean;
    onClose: () => void;
    title: string;
    children: React.ReactNode;
}
export default function DialogContainer({open, onClose, title, children}: DialogContainerProps){
    const classes = useStyle();

    return (
        <div>
            <Dialog open={open} onClose={onClose} className={classes.root}>
                <DialogTitle>{title}</DialogTitle>
                    {children}
                <DialogActions>
                    <Button onClick={onClose}>Close</Button>
                </DialogActions>
            </Dialog>
        </div>
    );
}
const useStyle = makeStyles({
    root: {
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
    },
});