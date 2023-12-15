import {FormHelperText, TextField} from "@mui/material";
import {makeStyles} from "@mui/styles";

interface FormInputFieldProps {
    id: string;
    type: string;
    value: string;
    onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
    helperText: string;
}

export default function FormInputField({id, type, value, onChange, helperText}: FormInputFieldProps) {
    const classes = useStyle();

    return (
        <div>
            <FormHelperText
                id={`${id}-helper-text`}
                className={classes.helper_text}
            >
                {helperText}
            </FormHelperText>
            <TextField
                id={id}
                aria-describedby={`${id}-helper-text`}
                type={type}
                value={value}
                onChange={onChange}

                InputProps={{
                    className: classes.input_field,
                    classes: {
                        notchedOutline: classes.input_field_focused,
                        focused: classes.input_field_focused,
                    },
                }}
            />
        </div>
    );

}

const useStyle = makeStyles({
    helper_text: {
        fontSize: '1.2rem',
        marginBottom: '0.5rem',
        marginTop: '0.5rem',
        color: 'white',
        fontFamily: 'monospace',
    },
    input_field: {
        fontSize: '1rem',
        color: 'black',
        border: '2px solid gray',
        borderRadius: '2rem',
        padding: '0.5rem',
    },
    input_field_focused: {
        borderColor: 'pink !important',
    },
});