import {Grid, Radio, RadioGroup, FormControlLabel, FormControl, FormLabel} from "@mui/material";
import FormInputField from "@/app/components/form/FormInputField";
import {useState} from "react";
import FormButton from "@/app/components/form/FormButton";
import FormContainer from "@/app/components/form/FormContainer";
import JsonResponse from "@/app/Types";

interface FormFindSecretProps {
    setJsonData: (data: JsonResponse) => void;
    setXmlData: (data: string) => void;
    setError: (error: string | null) => void;
    setOpen: (open: boolean) => void;
}

export default function FormFindSecret({setJsonData, setXmlData, setError, setOpen}: FormFindSecretProps) {
    const [hash, setHash] = useState<string>('');
    const [loading, setLoading] = useState<boolean>(false);
    const [format, setFormat] = useState<string>('application/json');

    const fetchData = async () => {
        setLoading(true);
        try {
            const res = await fetch('/v1/secret/' + hash, {headers: {Accept: format}});

            if (res.status === 404) {
                const data = await res.json();
                setError(data.message);
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

const radioStyle = {
    color: 'pink',
    '&.Mui-checked': {
        color: 'pink',
    }
}

const labelStyle = {
    color: 'white',
    fontWeight: 'bold',
    '&.Mui-focused': {
        color: 'pink',
    }
}