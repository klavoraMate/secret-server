'use client';
import {useState} from 'react';
import {Typography} from '@mui/material';
import {Prism as SyntaxHighlighter} from 'react-syntax-highlighter';
import {solarizedlight} from 'react-syntax-highlighter/dist/esm/styles/prism';
import FormFindSecret from '@/app/components/form/FormFindSecret';
import DialogContainer from "@/app/components/dialog/DialogContainer";
import pd from 'pretty-data';
import JsonResponse from "@/app/Types";


export default function Find() {
    const [open, setOpen] = useState(false);
    const [jsonData, setJsonData] = useState<JsonResponse>({} as JsonResponse);
    const [xmlData, setXmlData] = useState<string>('');
    const [error, setError] = useState<string | null>(null);

    const handleClose = () => {
        setOpen(false);
        setJsonData({} as JsonResponse);
        setXmlData('');
        setError(null);
    }

    const handleResponse = (data: JsonResponse | string, error: string | null = null) => {
        if (typeof data === 'string') {
            setXmlData(data);
        } else {
            setJsonData(data);
        }
        setError(error);
        setOpen(true);
    }

    return (
        <div>
            <FormFindSecret onResponse={handleResponse}/>
            <DialogContainer open={open} onClose={handleClose} title={error ? 'Error' : 'Your secret is:'}>
                {error && (
                    <Typography variant="h6" color="error">{error}</Typography>
                )}
                {jsonData && (
                    <SyntaxHighlighter language="json" style={solarizedlight}>
                        {JSON.stringify(jsonData, null, 2)}
                    </SyntaxHighlighter>
                )}
                {xmlData && (
                    <SyntaxHighlighter language="xml" style={solarizedlight}>
                        {pd.pd.xml(xmlData)}
                    </SyntaxHighlighter>
                )}
            </DialogContainer>
        </div>
    );
}

