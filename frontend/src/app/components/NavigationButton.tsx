'use client';
import Button from "@mui/material/Button";
import {useRouter} from "next/navigation";
import {makeStyles} from "@mui/styles";

interface NavigationButtonProps {
    text: string;
    link: string;
}

export default function NavigationButton({text, link}: NavigationButtonProps) {
    const router = useRouter();
    const classes = useStyle();

    return (
        <Button variant='outlined' onClick={() => router.push(link)} className={classes.button}>
            {text}
        </Button>
    );
}

const useStyle = makeStyles({
    button: {
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
});