import {FormHelperText, TextField} from "@mui/material";
import {styled} from "@mui/system";

interface FormInputFieldProps {
    id: string;
    type: string;
    value: string;
    onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
    helperText: string;
}

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

const helperTextStyles = {
    fontSize: '1.2rem',
    marginBottom: '0.5rem',
    marginTop: '0.5rem',
    color: 'white',
    fontFamily: 'monospace',
}


