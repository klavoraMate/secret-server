'use client';
import {Box} from "@mui/system";
import {AppBar, Toolbar} from "@mui/material";
import NavigationButton from "@/app/components/NavigationButton";
import {makeStyles} from "@mui/styles";

export default function NavBar() {
    const classes = useStyle();
    return (
        <Box sx={{flexGrow: 1}}>
            <AppBar position="static">
                <Toolbar className={classes.toolbar}>
                    <Box sx={{flexGrow: 1}}>
                        <NavigationButton text={"Find"} link={"/find"}/>
                        <NavigationButton text={"Create"} link={"/create"}/>
                    </Box>
                </Toolbar>
            </AppBar>
        </Box>
    )
}

const useStyle = makeStyles({
    toolbar: {
        background: 'linear-gradient(45deg, #D12694 30%, #F68B2B 90%)',
    }
});