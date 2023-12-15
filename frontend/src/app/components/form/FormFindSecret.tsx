'use client';
import FormContainer from "@/app/components/form/FormContainer";
import {Grid} from "@mui/material";
import FormInputField from "@/app/components/form/FormInputField";
import {useState} from "react";
import FormButton from "@/app/components/form/FormButton";

export default function FormFindSecret() {
    const [hash, setHash] = useState<string>('');
    const handleSubmit = () => {
        fetch('/v1/secret/' + hash).then(response => response.json())
    }
    return (
        <div>
            <FormContainer logoSrc={'/logo_form_find.png'} logoAlt={'find logo'} logoTitle={'Find secret text!'}>
                <Grid item xs={12}>
                    <FormInputField id={'hash'} type={'text'} value={hash}
                                    onChange={(e) => setHash(e.target.value)} helperText={'Enter hash'}/>
                </Grid>
                <Grid item xs={12} container justifyContent='right'>
                    <FormButton text={'Find'} onClick={handleSubmit}/>
                </Grid>
            </FormContainer>
        </div>
    )
}