import {ReactNode} from "react";
import {Container, Box, Grid, Hidden, FormControl, Paper} from "@mui/material";
import Logo from "@/app/components/Logo";

interface FormContainerProps {
    logoSrc: string;
    logoAlt: string;
    logoTitle: string;
    children: ReactNode;
}

export default function FormContainer({logoSrc, logoAlt, logoTitle, children}: FormContainerProps) {
    return (
        <Grid container spacing={2} sx={{display: 'flex', alignItems: 'center', justifyContent: 'center', height: '100%', flexDirection: 'row'}}>
            <Hidden mdDown>
                <Grid item md={6}>
                    <Logo src={logoSrc} title={logoTitle} alt={logoAlt}/>
                </Grid>
            </Hidden>
            <Grid item xs={12} sm={12} md={6}>
                <Container maxWidth='sm'>
                    <Box
                        display='flex'
                        flexDirection='column'
                        alignItems='center'
                        justifyContent='center'
                        minHeight='70vh'
                    >
                        <Paper elevation={3} sx={{padding: '2rem', margin: '2rem', backgroundColor: 'rgba(157, 134, 219, 0.1)'}}>
                            <FormControl>
                                <Grid container spacing={2}>
                                    {children}
                                </Grid>
                            </FormControl>
                        </Paper>
                    </Box>
                </Container>
            </Grid>
        </Grid>
    );
}