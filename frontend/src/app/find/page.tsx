'use client';
import {useState} from 'react';
import {Typography} from '@mui/material';
import {Prism as SyntaxHighlighter} from 'react-syntax-highlighter';
import {solarizedlight} from 'react-syntax-highlighter/dist/esm/styles/prism';
import FormFindSecret from '@/app/components/form/FormFindSecret';
import DialogContainer from "@/app/components/dialog/DialogContainer";
import pd from 'pretty-data';
import JsonResponse from "@/app/Types";

/**
 * Find is a component that renders a form for finding a secret and a dialog for displaying the response.
 * @returns {JSX.Element} The Find component.
 */
export default function Find() {
    const [open, setOpen] = useState(false);
    const [jsonData, setJsonData] = useState<JsonResponse>({} as JsonResponse);
    const [xmlData, setXmlData] = useState<string>('');
    const [error, setError] = useState<string | null>(null);

    /**
     * Closes the dialog and resets the state.
     */
    const handleClose = () => {
        setOpen(false);
        setJsonData({} as JsonResponse);
        setXmlData('');
        setError(null);
    }

    return (
        <div>
            <FormFindSecret setJsonData={setJsonData} setXmlData={setXmlData} setError={setError} setOpen={setOpen}/>
            <DialogContainer open={open} onClose={handleClose} title={error ? 'Error' : 'Your secret is:'}>
                {error && (
                    <Typography variant="h6" color="error">{error}</Typography>
                )}
                {Object.keys(jsonData).length !== 0 && (
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