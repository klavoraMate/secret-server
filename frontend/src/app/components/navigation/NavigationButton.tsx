'use client';
import Button from "@mui/material/Button";
import {useRouter} from "next/navigation";

interface NavigationButtonProps {
    text: string;
    link: string;
}

export default function NavigationButton({text, link}: NavigationButtonProps) {
    const router = useRouter();

    return (
        <Button variant='outlined' onClick={() => router.push(link)} sx={buttonStyles}>
            {text}
        </Button>
    );
}

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