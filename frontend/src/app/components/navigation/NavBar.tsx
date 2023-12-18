'use client';
import {Box} from "@mui/system";
import {AppBar, Toolbar} from "@mui/material";
import NavigationButton from "@/app/components/navigation/NavigationButton";

export default function NavBar() {
    return (
        <Box sx={boxStyles}>
            <AppBar position="static">
                <Toolbar sx={toolbarStyles}>
                    <Box sx={{flexGrow: 1}}>
                        <NavigationButton text={"Find"} link={"/find"}/>
                        <NavigationButton text={"Create"} link={"/create"}/>
                    </Box>
                </Toolbar>
            </AppBar>
        </Box>
    )
}
const boxStyles = {
    flexGrow: 1,
}

const toolbarStyles = {
    background: 'linear-gradient(45deg, #D12694 30%, #F68B2B 90%)',
}