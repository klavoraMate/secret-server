'use client';
import {useState} from 'react';
import {Dialog, Tab, Tabs, Box, Typography} from '@mui/material';
import {Prism as SyntaxHighlighter} from 'react-syntax-highlighter';
import {solarizedlight} from 'react-syntax-highlighter/dist/esm/styles/prism';
import FormFindSecret from '@/app/components/form/FormFindSecret';

interface DataProps {
    json: {
        hash: string;
        secretText: string;
        createdAt: string;
        expiresAt: string;
        remainingViews: number;
    };
    xml: string;
}

export default function Find() {
    const [data, setData] = useState<DataProps>({} as DataProps);
    const [error, setError] = useState<string | null>(null);
    const [tabValue, setTabValue] = useState<number>(0);

    const handleTabChange = (event: React.SyntheticEvent, newValue: number) => {
        setTabValue(newValue);
    };

    return (
        <div>
            <FormFindSecret setData={setData} setError={setError}/>
            <Dialog open={Boolean(data || error)} onClose={() => {
                setData({} as DataProps);
                setError(null);
            }}>
                {error && (
                    <Typography variant="h6" color="error">{error}</Typography>
                )}
                {data.json && (<>
                        <Tabs value={tabValue} onChange={handleTabChange}>
                            <Tab label="Normal"/>
                            <Tab label="JSON"/>
                            <Tab label="XML"/>
                        </Tabs>
                        <TabPanel value={tabValue} index={0}>
                            <Typography>Hash: {data.json.hash}</Typography>
                            <Typography>Secret Text: {data.json.secretText}</Typography>
                            <Typography>Created At: {data.json.createdAt}</Typography>
                            <Typography>Expires At: {data.json.expiresAt}</Typography>
                            <Typography>Remaining Views: {data.json.remainingViews}</Typography>
                        </TabPanel>
                        <TabPanel value={tabValue} index={1}>
                            <SyntaxHighlighter language="json" style={solarizedlight}>
                                {JSON.stringify(data.json, null, 2)}
                            </SyntaxHighlighter>
                        </TabPanel>
                        <TabPanel value={tabValue} index={2}>
                            <SyntaxHighlighter language="xml" style={solarizedlight}>
                                {data.xml}
                            </SyntaxHighlighter>
                        </TabPanel></>
                )}
            </Dialog>
        </div>
    );
}

function TabPanel(props: { children: React.ReactNode; index: number; value: number; }) {
    const {children, value, index, ...other} = props;

    return (
        <div role="tabpanel" hidden={value !== index} {...other}>
            {value === index && (
                <Box>
                    <Typography>{children}</Typography>
                </Box>
            )}
        </div>
    );
}