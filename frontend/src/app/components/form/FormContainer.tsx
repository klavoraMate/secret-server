import {ReactNode} from "react";
import {Container, Box, Grid, Hidden, FormControl, Paper} from "@mui/material";
import {makeStyles} from "@mui/styles";
import Logo from "@/app/components/Logo";

export default function FormContainer({children}: { children: ReactNode }) {
    const classes = useStyle();
    return (
        <Grid container spacing={2}>
            <Hidden mdDown>
                <Grid item md={6}>
                    <div className={classes.center_vertically}>
                        <Logo/>
                    </div>
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
                        <Paper elevation={3} className={classes.paper}>
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

const useStyle = makeStyles({
    box: {
        margin: 'auto',
        marginTop: '10%',
        borderRadius: '2rem',
        backgroundColor: '#9d86db',
    },
    form: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
    },
    center_vertically: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        height: '100%',
        flexDirection: 'column',
    },
    paper: {
        padding: '2rem',
        margin: '2rem',
        backgroundColor: 'rgba(157, 134, 219, 0.1)',
    }
});