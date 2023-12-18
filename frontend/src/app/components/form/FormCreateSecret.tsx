'use client';
import {Grid} from "@mui/material";
import {useState} from "react";
import FormInputField from "@/app/components/form/FormInputField";
import FormButton from "@/app/components/form/FormButton";
import FormContainer from "@/app/components/form/FormContainer";

/**
 * @interface FormCreateSecretProps
 * @property {Function} onResponse - Function to be called when the form submission is completed.
 */
interface FormCreateSecretProps {
    onResponse: (hash: string, error?: boolean) => void;
}

/**
 * FormCreateSecret is a component that renders a form for creating a secret.
 * @param {FormCreateSecretProps} props - The properties that define the form's behavior.
 * @returns {JSX.Element} The FormCreateSecret component.
 */
export default function FormCreateSecret({onResponse}: FormCreateSecretProps) {
    const [secret, setSecret] = useState<string>('');
    const [views, setViews] = useState<string>('');
    const [time, setTime] = useState<string>('');
    const [loading, setLoading] = useState<boolean>(false);

    /**
     * Handles the form submission.
     * Sends a POST request to the '/v1/secret' endpoint with the form data.
     * Calls the onResponse prop function with the response data.
     */
    const handleSubmit = () => {
        setLoading(true);
        const formData = new URLSearchParams();
        formData.append('secret', secret);
        formData.append('expireAfterViews', views);
        formData.append('expireAfter', time);
        fetch('/v1/secret', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
            },
            body: formData.toString(),
        }).then(response => {
            response.json()
                .then(data => {
                    if (data.hash){
                        onResponse(data.hash);
                    }
                    else {
                        onResponse(data.message, true);
                    }
                    setLoading(false);
                })
        })
            .catch(error => {
                onResponse(`Error: ${error.message}`, true);
                setLoading(false);
            });
    }

    return (
        <div>
            <FormContainer logoSrc={'/logo_form_create.png'} logoAlt={'secret logo'} logoTitle={'Store secret text!'}>
                <Grid item xs={12}>
                    <FormInputField id={'secret'} type={'text'} value={secret}
                                    onChange={(e) => setSecret(e.target.value)} helperText={'Enter secret'}/>
                </Grid>
                <Grid item xs={12}>
                    <FormInputField id={'views'} type={'number'} value={views}
                                    onChange={(e) => setViews(e.target.value)} helperText={'Views amount'}/>
                </Grid>
                <Grid item xs={12}>
                    <FormInputField id={'time'} type={'number'} value={time}
                                    onChange={(e) => setTime(e.target.value)} helperText={'Time amount'}/>
                </Grid>
                <Grid item xs={12} container justifyContent='right'>
                    <FormButton disabled={loading} text={loading ? 'Sending ...' : 'Send'} onClick={handleSubmit}/>
                </Grid>
            </FormContainer>
        </div>
    );
}