import {Grid, Radio, RadioGroup, FormControlLabel, FormControl, FormLabel} from "@mui/material";
import FormInputField from "@/app/components/form/FormInputField";
import {useState} from "react";
import FormButton from "@/app/components/form/FormButton";
import FormContainer from "@/app/components/form/FormContainer";
import JsonResponse from "@/app/Types";

export default function FormFindSecret({onResponse}: {
    onResponse: (data: JsonResponse | string, error?: string | null) => void
}) {
    const [hash, setHash] = useState<string>('');
    const [loading, setLoading] = useState<boolean>(false);
    const [format, setFormat] = useState<string>('application/json');

    const fetchData = async () => {
        try {
            setLoading(true);
            const res = await fetch('/v1/secret/' + hash, {headers: {Accept: format}});

            if (res.status === 404) {
                const data = await res.json();
                onResponse('', data.message);
                setLoading(false);
            } else {
                onResponse(format === 'application/json' ? await res.json() : await res.text(), null);
                setLoading(false);
            }
        } catch (error: any) {
            onResponse('', error.message);
            setLoading(false);
        }
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
                        <FormLabel component="legend">Format</FormLabel>
                        <RadioGroup row aria-label="format" name="row-radio-buttons-group" value={format}
                                    onChange={(e) => setFormat(e.target.value)}>
                            <FormControlLabel value="application/json" control={<Radio/>} label="JSON"/>
                            <FormControlLabel value="application/xml" control={<Radio/>} label="XML"/>
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