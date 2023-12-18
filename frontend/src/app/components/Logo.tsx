import Box from "@mui/material/Box";
import React from "react";
import Typography from "@mui/material/Typography";

/**
 * @interface LogoProps
 * @property {string} title - The title to be displayed below the logo image.
 * @property {string} src - The source URL of the logo image.
 * @property {string} alt - The alt text for the logo image.
 */
interface LogoProps {
    title: string;
    src: string;
    alt: string;
}

/**
 * Logo is a component that renders a logo image and a title.
 * @param {LogoProps} props - The properties that define the logo's source, alt text, and title.
 * @returns {JSX.Element} The Logo component.
 */
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

/**
 * The styles for the Box component in the Logo component.
 * @type {Object}
 */
const boxStyles = {
    display: 'flex',
    justifyContent: 'space-around',
}

/**
 * The styles for the Typography component in the Logo component.
 * @type {Object}
 */
const titleStyles = {
    textAlign: 'center',
    marginTop: '2rem',
    marginBottom: '1rem',
    fontFamily: 'monospace',
    fontWeight: 'bold',
    letterSpacing: '0.3rem',
}