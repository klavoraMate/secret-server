import Button from "@mui/material/Button";

/**
 * @interface FormButtonProps
 * @property {string} text - The text to be displayed on the button.
 * @property {Function} onClick - Function to be called when the button is clicked.
 * @property {boolean} disabled - Indicates whether the button is disabled or not.
 */
interface FormButtonProps {
    text: string;
    onClick: () => void;
    disabled: boolean;
}

/**
 * FormButton is a component that renders a button with custom styles.
 * @param {FormButtonProps} props - The properties that define the button's behavior and appearance.
 * @returns {JSX.Element} The FormButton component.
 */
export default function FormButton({text, onClick, disabled}: FormButtonProps) {
    return (
        <div>
            <Button onClick={onClick} disabled={disabled} sx={buttonStyles}>
                {text}
            </Button>
        </div>
    );
}

/**
 * The styles for the FormButton component.
 * @type {Object}
 */
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