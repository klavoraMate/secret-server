import {Box} from "@mui/system";
import {AppBar, Toolbar, Typography} from "@mui/material";
import {Button} from "@mui/base";

export default function NavBar() {
    return (
        <Box sx={{flexGrow: 1}}>
            <AppBar position="static">
                <Toolbar>
                </Toolbar>
            </AppBar>
        </Box>
    )
}