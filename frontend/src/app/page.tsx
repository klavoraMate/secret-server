import {Typography} from "@mui/material";

/**
 * Home is a component that renders a title in the center of the page.
 * @returns {JSX.Element} The Home component.
 */
export default function Home() {

    return (
        <div style={rootStyles}>
            <Typography sx={titleStyles}>Secret Server</Typography>
        </div>
    );
}

/**
 * The styles for the root div in the Home component.
 * @type {Object}
 */
const rootStyles = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh',
}

/**
 * The styles for the Typography component in the Home component.
 * @type {Object}
 */
const titleStyles = {
    fontSize: '3rem',
    fontWeight: 'bold',
    color: 'white',
}