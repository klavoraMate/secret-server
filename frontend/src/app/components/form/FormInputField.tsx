import {FormHelperText, TextField} from "@mui/material";
import {styled} from "@mui/system";

/**
 * @interface FormInputFieldProps
 * @property {string} id - The id of the input field.
 * @property {string} type - The type of the input field.
 * @property {string} value - The current value of the input field.
 * @property {Function} onChange - Function to be called when the input field's value changes.
 * @property {string} helperText - The helper text to be displayed below the input field.
 */
interface FormInputFieldProps {
    id: string;
    type: string;
    value: string;
    onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
    helperText: string;
}



/**
 * FormInputField is a component that renders an input field with custom styles which is used in forms.
 * @param {FormInputFieldProps} props - The properties that define the input field's behavior and appearance.
 * @returns {JSX.Element} The FormInputField component.
 */
export default function FormInputField({id, type, value, onChange, helperText}: FormInputFieldProps) {

    return (
        <div>
            <FormHelperText
                id={`${id}-helper-text`}
                sx={helperTextStyles}
            >
                {helperText}
            </FormHelperText>
            <TextFieldStyled
                id={id}
                aria-describedby={`${id}-helper-text`}
                type={type}
                value={value}
                onChange={onChange}
                variant={'outlined'}
            />
        </div>
    );

}

/**
 * The styles for the TextField component in the FormInputField component.
 * @type {Object}
 */
const TextFieldStyled = styled(TextField)({
    '& .MuiInputBase-root': {
        color: 'white',
        fontFamily: 'monospace',
        fontSize: '1rem',
        border: '2px solid white',
        borderRadius: '2rem',
        padding: '0.5rem',
    },
    '& .MuiInputBase-root:hover': {
        borderColor: 'pink !important',
    },
    '& .Mui-focused': {
        color: 'white',
        fontWeight: 'bold',
        fontFamily: 'monospace',
    },
    '& .MuiOutlinedInput-root': {
        '& fieldset': {
            borderColor: 'white',
        },
        '&:hover fieldset': {
            borderColor: 'pink',
        },
        '&.Mui-focused fieldset': {
            borderColor: 'pink',
        },
    },
});

/**
 * The styles for the FormHelperText component in the FormInputField component.
 * @type {Object}
 */
const helperTextStyles = {
    fontSize: '1.2rem',
    marginBottom: '0.5rem',
    marginTop: '0.5rem',
    color: 'white',
    fontFamily: 'monospace',
}