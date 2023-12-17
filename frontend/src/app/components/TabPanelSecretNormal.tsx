import {Grid, InputLabel, TextField} from "@mui/material";
import Response from "@/app/Types";

interface TabPanelProps {
    data: Response
}

export default function TabPanelSecretNormal({data}: TabPanelProps) {
    return (
        <Grid container direction="column">
            <Grid item container direction="row" alignItems="center">
                <Grid item xs={4}><InputLabel htmlFor="hash">Hash</InputLabel></Grid>
                <Grid item xs={8}><TextField id="hash" value={data.json.hash} InputProps={{readOnly: true}}
                                             variant="outlined" fullWidth/></Grid>
            </Grid>

            <Grid item container direction="row" alignItems="center">
                <Grid item xs={4}><InputLabel htmlFor="secretText">Secret Text</InputLabel></Grid>
                <Grid item xs={8}><TextField id="secretText" value={data.json.secretText} InputProps={{readOnly: true}}
                                             variant="outlined" fullWidth/></Grid>
            </Grid>

            <Grid item container direction="row" alignItems="center">
                <Grid item xs={4}><InputLabel htmlFor="createdAt">Created At</InputLabel></Grid>
                <Grid item xs={8}><TextField id="createdAt" value={data.json.createdAt} InputProps={{readOnly: true}}
                                             variant="outlined" fullWidth/></Grid>
            </Grid>

            <Grid item container direction="row" alignItems="center">
                <Grid item xs={4}><InputLabel htmlFor="expiresAt">Expires At</InputLabel></Grid>
                <Grid item xs={8}><TextField id="expiresAt" value={data.json.expiresAt} InputProps={{readOnly: true}}
                                             variant="outlined" fullWidth/></Grid>
            </Grid>

            <Grid item container direction="row" alignItems="center">
                <Grid item xs={4}><InputLabel htmlFor="remainingViews">Remaining Views</InputLabel></Grid>
                <Grid item xs={8}><TextField id="remainingViews" value={data.json.remainingViews}
                                             InputProps={{readOnly: true}} variant="outlined" fullWidth/></Grid>
            </Grid>
        </Grid>
    )
}