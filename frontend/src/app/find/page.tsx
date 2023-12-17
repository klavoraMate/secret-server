'use client';
import {useState} from 'react';
import {Dialog, Tab, Tabs, Box, Typography, InputLabel, TextField, Grid} from '@mui/material';
import {Prism as SyntaxHighlighter} from 'react-syntax-highlighter';
import {solarizedlight} from 'react-syntax-highlighter/dist/esm/styles/prism';
import FormFindSecret from '@/app/components/form/FormFindSecret';
import DialogContainer from "@/app/components/dialog/DialogContainer";
import pd from 'pretty-data';
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
    const [open, setOpen] = useState(false);
    const [data, setData] = useState<DataProps>({} as DataProps);
    const [error, setError] = useState<string | null>(null);
    const [tabValue, setTabValue] = useState<number>(0);

    const handleTabChange = (event: React.SyntheticEvent, newValue: number) => {
        setTabValue(newValue);
    };

    const handleClose = () => {
        setOpen(false);
        setData({} as DataProps);
        setError(null);
    }

    const handleResponse = (data: DataProps, error: string | null = null) => {
        setData(data);
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
                {data.json && (<>
                        <Tabs value={tabValue} onChange={handleTabChange}>
                            <Tab label="Normal"/>
                            <Tab label="JSON"/>
                            <Tab label="XML"/>
                        </Tabs>
                        <TabPanel value={tabValue} index={0}>
                            <Grid container direction="column">
                                <Grid item container direction="row" alignItems="center">
                                    <Grid item xs={4}><InputLabel htmlFor="hash">Hash</InputLabel></Grid>
                                    <Grid item xs={8}><TextField id="hash" value={data.json.hash} InputProps={{readOnly: true}} variant="outlined" fullWidth /></Grid>
                                </Grid>

                                <Grid item container direction="row" alignItems="center">
                                    <Grid item xs={4}><InputLabel htmlFor="secretText">Secret Text</InputLabel></Grid>
                                    <Grid item xs={8}><TextField id="secretText" value={data.json.secretText} InputProps={{readOnly: true}} variant="outlined" fullWidth /></Grid>
                                </Grid>

                                <Grid item container direction="row" alignItems="center">
                                    <Grid item xs={4}><InputLabel htmlFor="createdAt">Created At</InputLabel></Grid>
                                    <Grid item xs={8}><TextField id="createdAt" value={data.json.createdAt} InputProps={{readOnly: true}} variant="outlined" fullWidth /></Grid>
                                </Grid>

                                <Grid item container direction="row" alignItems="center">
                                    <Grid item xs={4}><InputLabel htmlFor="expiresAt">Expires At</InputLabel></Grid>
                                    <Grid item xs={8}><TextField id="expiresAt" value={data.json.expiresAt} InputProps={{readOnly: true}} variant="outlined" fullWidth /></Grid>
                                </Grid>

                                <Grid item container direction="row" alignItems="center">
                                    <Grid item xs={4}><InputLabel htmlFor="remainingViews">Remaining Views</InputLabel></Grid>
                                    <Grid item xs={8}><TextField id="remainingViews" value={data.json.remainingViews} InputProps={{readOnly: true}} variant="outlined" fullWidth /></Grid>
                                </Grid>
                            </Grid>
                        </TabPanel>
                        <TabPanel value={tabValue} index={1}>
                            <SyntaxHighlighter language="json" style={solarizedlight}>
                                {JSON.stringify(data.json, null, 2)}
                            </SyntaxHighlighter>
                        </TabPanel>
                        <TabPanel value={tabValue} index={2}>
                            <SyntaxHighlighter language="xml" style={solarizedlight}>
                                {pd.pd.xml(data.xml)}
                            </SyntaxHighlighter>
                        </TabPanel></>
                )}
            </DialogContainer>
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