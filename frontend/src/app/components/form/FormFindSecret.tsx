'use client';
import {Grid} from "@mui/material";
import FormInputField from "@/app/components/form/FormInputField";
import {useState} from "react";
import FormButton from "@/app/components/form/FormButton";
import FormContainer from "@/app/components/form/FormContainer";


export default function FormFindSecret({onResponse}: { onResponse: (data: any, error?: string | null) => void }) {
    const [hash, setHash] = useState<string>('');
    const [loading, setLoading] = useState<boolean>(false);

    const fetchData = async () => {
        try {
            setLoading(true);
            const resJson = await fetch('/v1/secret/' + hash, {headers: {Accept: 'application/json'}});
            const resXml = await fetch('/v1/secret/' + hash, {headers: {Accept: 'application/xml'}});

            if (resJson.status === 404 || resXml.status === 404) {
                const dataJson = await resJson.json();
                onResponse({json: {}, xml: ''}, dataJson.message);
                setLoading(false);
            } else {
                const dataJson = await resJson.json();
                const dataXml = await resXml.text();
                onResponse({json: dataJson, xml: dataXml}, null);
                setLoading(false);
            }
        } catch (error: any) {
            onResponse({json: {}, xml: ''}, error.message);
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
                <Grid item xs={12} container justifyContent='right'>
                    <FormButton disabled={loading} text={loading ? 'Finding ...' : 'Find'} onClick={fetchData}/>
                </Grid>
            </FormContainer>
        </div>
    )
}