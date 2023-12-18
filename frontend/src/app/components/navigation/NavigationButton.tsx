'use client';
import Button from "@mui/material/Button";
import {useRouter} from "next/navigation";

/**
 * @interface NavigationButtonProps
 * @property {string} text - The text to be displayed on the button.
 * @property {string} link - The URL to navigate to when the button is clicked.
 */
interface NavigationButtonProps {
    text: string;
    link: string;
}

/**
 * NavigationButton is a component that renders a button which navigates to a specified URL when clicked.
 * @param {NavigationButtonProps} props - The properties that define the button's behavior and appearance.
 * @returns {JSX.Element} The NavigationButton component.
 */
export default function NavigationButton({text, link}: NavigationButtonProps) {
    const router = useRouter();

    return (
        <Button variant='outlined' onClick={() => router.push(link)} sx={buttonStyles}>
            {text}
        </Button>
    );
}

/**
 * The styles for the NavigationButton component.
 * @type {Object}
 */
const buttonStyles= {
    fontSize: '1.5rem',
    color: 'white',
    margin: '0 0.5rem',
    background: 'transparent',
    border: '2px solid white',
    fontStyle: 'sans-serif',
    '&:hover': {
        backgroundColor: 'white',
        color: 'black',
    },
}