import {ReactNode} from "react";
import {Container, Box, Grid, Hidden, FormControl, Paper} from "@mui/material";
import Logo from "@/app/components/Logo";

/**
 * @interface FormContainerProps
 * @property {string} logoSrc - The source URL of the logo image.
 * @property {string} logoAlt - The alt text for the logo image.
 * @property {string} logoTitle - The title of the logo image.
 * @property {React.ReactNode} children - The child components to be rendered inside the form container.
 */
interface FormContainerProps {
    logoSrc: string;
    logoAlt: string;
    logoTitle: string;
    children: ReactNode;
}

/**
 * FormContainer is a component that renders a form container with a logo and child components.
 * The logo is only displayed on screens larger than medium.
 * @param {FormContainerProps} props - The properties that define the form container's content and appearance.
 * @returns {JSX.Element} The FormContainer component.
 */
export default function FormContainer({logoSrc, logoAlt, logoTitle, children}: FormContainerProps) {
    return (
        <Grid container spacing={2} sx={gridStyles}>
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
                        <Paper elevation={3} sx={paperStyles}>
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

/**
 * The styles for the Grid component in the FormContainer component.
 * @type {Object}
 */
const gridStyles = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100%',
    flexDirection: 'row',
};

/**
 * The styles for the Paper component in the FormContainer component.
 * @type {Object}
 */
const paperStyles = {
    padding: '2rem',
    margin: '2rem',
    backgroundColor: 'rgba(157, 134, 219, 0.1)',
}