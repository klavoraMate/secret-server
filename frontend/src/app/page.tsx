import {Typography} from "@mui/material";

export default function Home() {

    return (
        <div style={rootStyles}>
            <Typography sx={titleStyles}>Secret Server</Typography>
        </div>
    );
}
const rootStyles = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh',
}
const titleStyles = {
    fontSize: '3rem',
    fontWeight: 'bold',
}