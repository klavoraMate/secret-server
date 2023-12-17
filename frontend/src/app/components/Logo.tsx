import Box from "@mui/material/Box";
import React from "react";
import Typography from "@mui/material/Typography";

interface LogoProps {
    title: string;
    src: string;
    alt: string;
}

export default function Logo({title, src, alt}: LogoProps) {
    return (
        <div>
            <Box sx={boxStyles}>
                <img
                    src={src}
                    alt={alt}
                    width='200'
                />
            </Box>
            <Typography variant='h4' component='h1' sx={titleStyles}>
                {title}
            </Typography>
        </div>
    )
}
const boxStyles = {
    display: 'flex',
    justifyContent: 'space-around',
}

const titleStyles = {
    textAlign: 'center',
    marginTop: '2rem',
    marginBottom: '1rem',
    fontFamily: 'monospace',
    fontWeight: 'bold',
    letterSpacing: '0.3rem',
}