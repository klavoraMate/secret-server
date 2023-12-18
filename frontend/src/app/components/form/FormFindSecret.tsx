import {Grid, Radio, RadioGroup, FormControlLabel, FormControl, FormLabel} from "@mui/material";
import FormInputField from "@/app/components/form/FormInputField";
import {useState} from "react";
import FormButton from "@/app/components/form/FormButton";
import FormContainer from "@/app/components/form/FormContainer";
import JsonResponse from "@/app/Types";

/**
 * @interface FormFindSecretProps
 * @property {Function} setJsonData - Function to be called when the JSON data is fetched.
 * @property {Function} setXmlData - Function to be called when the XML data is fetched.
 * @property {Function} setError - Function to be called when an error occurs.
 * @property {Function} setOpen - Function to be called to open or close the dialog.
 */
interface FormFindSecretProps {
    setJsonData: (data: JsonResponse) => void;
    setXmlData: (data: string) => void;
    setError: (error: string | null) => void;
    setOpen: (open: boolean) => void;
}

/**
 * FormFindSecret is a component that renders a form for finding a secret.
 * @param {FormFindSecretProps} props - The properties that define the form's behavior.
 * @returns {JSX.Element} The FormFindSecret component.
 */
export default function FormFindSecret({setJsonData, setXmlData, setError, setOpen}: FormFindSecretProps) {
    const [hash, setHash] = useState<string>('');
    const [loading, setLoading] = useState<boolean>(false);
    const [format, setFormat] = useState<string>('application/json');

    /**
     * Fetches the secret data from the server. Based on the format state, the response data is either JSON or XML.
     * Sends a GET request to the '/v1/secret/' endpoint with the hash of the secret.
     * Calls the appropriate prop function with the response data.
     */
    const fetchData = async () => {
        setLoading(true);
        try {
            const res = await fetch('/v1/secret/' + hash, {headers: {Accept: format}});

            if (res.status === 404) {
                if (format === 'application/json'){
                    const data = await res.json();
                    setError(data.message);
                }else {
                    const data = await res.text();
                    setError(data);
                }
            } else if (res.status === 410) {
                setError('Secret has been expired!');
            } else {
                if (format === 'application/json')
                    setJsonData(await res.json());
                else
                    setXmlData(await res.text());
            }
        } catch (error: any) {
            setError(error.message);
        }
        setOpen(true);
        setLoading(false);
    };

    return (
        <div>
            <FormContainer logoSrc={'/logo_form_find.png'} logoAlt={'find logo'} logoTitle={'Find secret text!'}>
                <Grid item xs={12}>
                    <FormInputField id={'hash'} type={'text'} value={hash}
                                    onChange={(e) => setHash(e.target.value)} helperText={'Enter hash'}/>
                </Grid>
                <Grid item xs={12}>
                    <FormControl component="fieldset">
                        <FormLabel sx={labelStyle} component="legend">Response format</FormLabel>
                        <RadioGroup row aria-label="format" name="row-radio-buttons-group" value={format}
                                    onChange={(e) => setFormat(e.target.value)}>
                            <FormControlLabel value="application/json" control={<Radio sx={radioStyle}/>} label="JSON"/>
                            <FormControlLabel value="application/xml" control={<Radio sx={radioStyle}/>} label="XML"/>
                        </RadioGroup>
                    </FormControl>
                </Grid>
                <Grid item xs={12} container justifyContent='right'>
                    <FormButton disabled={loading} text={loading ? 'Finding ...' : 'Find'} onClick={fetchData}/>
                </Grid>
            </FormContainer>
        </div>
    )
}

/**
 * The styles for the Radio component in the FormFindSecret component.
 * @type {Object}
 */
const radioStyle = {
    color: 'pink',
    '&.Mui-checked': {
        color: 'pink',
    }
}

/**
 * The styles for the FormLabel component in the FormFindSecret component.
 * @type {Object}
 */
const labelStyle = {
    color: 'white',
    fontWeight: 'bold',
    '&.Mui-focused': {
        color: 'pink',
    }
}