'use client';
import {Typography} from "@mui/material";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles({
    root: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
    },
    title: {
        fontSize: '3rem',
        fontWeight: 'bold',
    },
});

export default function Home() {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <Typography className={classes.title}>Secret Server</Typography>
        </div>
    );
}