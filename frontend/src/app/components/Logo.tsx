import Box from "@mui/material/Box";
import React from "react";
import Typography from "@mui/material/Typography";
import {makeStyles} from "@mui/styles";

interface LogoProps {
    title: string;
    src: string;
    alt: string;
}

export default function Logo({title, src, alt}: LogoProps) {

    const classes = useStyle();

    return (
        <div>
            <Box style={{
                display: 'flex',
                justifyContent: 'space-around',
            }}>
                <img
                    src={src}
                    alt={alt}
                    width='200'
                />
            </Box>
            <Typography variant='h4' component='h1' className={classes.title}>
                {title}
            </Typography>
        </div>
    )
}

const useStyle = makeStyles({
    title: {
        textAlign: 'center',
        marginTop: '2rem',
        marginBottom: '1rem',
        fontFamily: 'monospace',
        fontWeight: 'bold',
        letterSpacing: '0.3rem',
    },
});