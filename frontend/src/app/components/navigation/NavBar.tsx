'use client';
import {Box} from "@mui/system";
import {AppBar, Toolbar} from "@mui/material";
import NavigationButton from "@/app/components/navigation/NavigationButton";

/**
 * NavBar is a component that renders a navigation bar with two buttons: "Find" and "Create".
 * @returns {JSX.Element} The NavBar component.
 */
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

/**
 * The styles for the Box component in the NavBar component.
 * @type {Object}
 */
const boxStyles = {
    flexGrow: 1,
}

/**
 * The styles for the Toolbar component in the NavBar component.
 * @type {Object}
 */
const toolbarStyles = {
    background: 'linear-gradient(45deg, #D12694 30%, #F68B2B 90%)',
}