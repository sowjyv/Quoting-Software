import React from "react";
import { Grid, makeStyles } from "@material-ui/core";
import HighvalueDeals from "./HighvalueDeals";
import OpportunityIndex from "./OpportunityIndex";
import DealValue from "./DealValue";
import Overview from "./Overview";
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { useTheme } from "@material-ui/core";

const useStyles = makeStyles({
    maingrid: {
        margin: '2%'
    }
})

export default function Dashboard1() {
    const theme = useTheme();
    console.log(theme);
    const isMatch = useMediaQuery(theme.breakpoints.down('sm'));
    console.log(isMatch);
    const classes = useStyles();
    return (
        <div>
            {
                isMatch ? (
                    <>
                        <Grid className={classes.maingrid}>
                            <Grid item xs={12}>
                                <Overview />
                            </Grid>
                            <Grid item xs={12}>
                                <HighvalueDeals />
                            </Grid>
                            <Grid item xs={12}>
                                <OpportunityIndex />
                            </Grid>
                            <Grid item xs={12}>
                                <DealValue />
                            </Grid>
                        </Grid>

                    </>

                ) : (


                    <>

                        <Grid className={classes.maingrid}>
                            <Grid container spacing={4} >
                                <Grid item xs={5}>
                                    <Overview />
                                </Grid>
                                <Grid item xs={7}>
                                    <HighvalueDeals />
                                </Grid>
                            </Grid>
                            <Grid container spacing={3}>
                                <Grid item xs={4}>
                                    <OpportunityIndex />
                                </Grid>
                                <Grid item xs={8}>
                                    <DealValue />
                                </Grid>
                            </Grid>
                        </Grid>
                    </>)
            }

        </div>
    );
}