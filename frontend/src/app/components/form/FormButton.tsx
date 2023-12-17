import Button from "@mui/material/Button";

interface FormButtonProps {
    text: string;
    onClick: () => void;
    disabled: boolean;
}

export default function FormButton({text, onClick, disabled}: FormButtonProps) {
    return (
        <div>
            <Button onClick={onClick} disabled={disabled} sx={buttonStyles}>
                {text}
            </Button>
        </div>
    );

}

const buttonStyles = {
    fontSize: '1.5rem',
    color: 'white',
    margin: '0 0.5rem',
    padding: '1rem 2rem',
    border: '2px solid white',
    borderRadius: '2rem',
    fontStyle: 'sans-serif',
    backgroundColor: 'rgb(244, 133, 49)',
    '&:hover': {
        backgroundColor: 'rgb(244, 133, 49, 0.5)',
    }
}
