'use client';
import {FormControl, FormHelperText, TextField} from "@mui/material";
import {useState} from "react";
import Button from "@mui/material/Button";

export default function FormCreateSecret() {
    const [secret, setSecret] = useState<string>('');
    const [views, setViews] = useState<string>('');
    const [time, setTime] = useState<string>('');

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const formData = new URLSearchParams();
        formData.append('secret', secret);
        formData.append('expireAfterViews', views);
        formData.append('expireAfter', time);
        fetch('https://server-k1y7.onrender.com/v1/secret/v1/secret', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
            },
            body: formData.toString(),
        }).then(response => response.json())
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <FormControl>
                    <FormHelperText id='secret-helper-text'>Enter your secret</FormHelperText>
                    <TextField id='secret' label='Secret' aria-describedby='secret-helper-text' multiline value={secret}
                               onChange={(e) => setSecret(e.target.value)}/>
                    <FormHelperText id='views-helper-text'>Enter number of views</FormHelperText>
                    <TextField id='views' label='Views' aria-describedby='views-helper-text' type='number' value={views}
                               onChange={(e) => setViews(e.target.value)}/>
                    <FormHelperText id='time-helper-text'>Enter time in minutes</FormHelperText>
                    <TextField id='time' label='Time' aria-describedby='time-helper-text' type='number' value={time}
                               onChange={(e) => setTime(e.target.value)}/>
                    <Button type="submit">Submit</Button>
                </FormControl>

            </form>
        </div>
    );
}