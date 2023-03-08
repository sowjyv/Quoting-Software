import { Typography, Button, MenuItem, Card, Grid, makeStyles, Divider, IconButton, Chip, Select, InputLabel, FormControl } from "@material-ui/core";
import { ArrowDropDown, CalendarToday } from "@material-ui/icons";
import DescriptionOutlinedIcon from '@material-ui/icons/DescriptionOutlined';
import React, { useEffect, useState } from "react";
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { useTheme } from "@material-ui/core";

const useStyles = makeStyles({
    grid1: {
        margin: '4%',
        padding: '4%'
    },
    divider: {

        width: '100%',
        marginTop: '2%'
    },
    iconbutton: {
        backgroundColor: '#dedfff'
    },
    icon: {
        color: '#6e7aff'
    },
    bigtext: {
        fontSize: '30px',
        color: '#314462',
        fontWeight: 'bold',
        fontFamily: 'Arial'
    },
    smalltext: {
        fontSize: '12px',
        color: 'grey',
        fontFamily: 'Arial'

    },
    midtext: {
        fontSize: '15px',
        color: '#515f76',
        fontWeight: 'bold',
        fontFamily: 'Arial'

    },
    mid2text: {
        fontSize: '18px',
        color: '#515f76',
        fontWeight: 'bold',
        fontFamily: 'Arial'

    },
    button: {
        fontSize: '15px',
        textTransform: 'none',
        fontFamily: 'Arial'

    },
    chip1: {
        backgroundColor: '#dedfff',
        color: '#6e7aff',
        display: 'block',
        width: '40%',
        height: 'auto',
        fontSize: '10px',
        fontWeight: 'bold',
        fontFamily: 'Arial'


    },
    chip2: {
        backgroundColor: '#ffeade',
        color: '#ffa97a',
        display: 'block',
        width: '90%',
        height: 'auto',
        fontSize: '10px',
        fontWeight: 'bold',
        fontFamily: 'Arial'


    },
    chip3: {
        backgroundColor: '#def5ff',
        color: '#83c4df',
        display: 'block',
        width: '75%',
        height: 'auto',
        fontSize: '10px',
        fontWeight: 'bold',
        fontFamily: 'Arial'


    },
    chip4: {
        backgroundColor: '#e2ffde',
        color: '#80d99b',
        display: 'block',
        width: '45%',
        height: 'auto',
        fontSize: '10px',
        fontWeight: 'bold',
        fontFamily: 'Arial'

    },
    card: {
        boxShadow: 3,
        marginBottom: '2%'
    },
});
const data = [
    {
        "time": 0,
        "data":
        {
            "drafts": 623,
            "pendingapproval": 453,
            "senttoclient": 499,
            "signing": 269,
        },

    },
    {
        "time": 3,
        "data":
        {
            "drafts": 523,
            "pendingapproval": 320,
            "senttoclient": 400,
            "signing": 222,
        },

    },
    {
        "time": 6,
        "data":
        {

            "drafts": 423,
            "pendingapproval": 453,
            "senttoclient": 399,
            "signing": 211,

        },

    }

];

export default function Overview() {
    const theme = useTheme();
    const isMatch = useMediaQuery(theme.breakpoints.down('sm'));
    const classes = useStyles();
    const [time, setTime] = useState(0);
    const [filteredData, setFilteredData] = useState([data[0]]);
    // console.log(filteredData);
    const [totalValue, setTotalValue] = useState(1844);
    const handleChange = (e) => {
        // console.log("Changed Value: ", e?.target?.value);
        setTime(e?.target?.value);
        const val = data.filter(item => {
            return item.time === e?.target?.value;
        });
        console.log("filtered data: ", val);
        
        setFilteredData(val);

    }
   
    return (
        <div>
            {
                isMatch ? (<>
                 <Card className={classes.card}>
                    <Grid >
                        <Grid container style={{ margin: '2%' }}>
                            <Grid item xs={7}>
                                <Typography style={{ color: '#5f6e85' }}>Overview</Typography>
                            </Grid>
                            <Grid item xs={5}>
                                {/* <Button variant='outlined'className={classes.button} startIcon={<CalendarToday style={{color:'blue'}} />} endIcon={<ArrowDropDown />}>All Time</Button> */}
                                <FormControl variant="outlined" >
                                    <Select size='small' style={{minWidth:120,minHeight:10}}
                                        value={time}
                                        onChange={handleChange}
                                    >
                                        <MenuItem value={0}><CalendarToday style={{ color: 'blue', width: '20px', height: '20px' }} />All Time</MenuItem>
                                        <MenuItem value={3}><CalendarToday style={{ color: 'blue', width: '20px', height: '20px' }} />Last 3 Months</MenuItem>
                                        <MenuItem value={6}><CalendarToday style={{ color: 'blue', width: '20px', height: '20px' }} />Last 6 Months</MenuItem>
                                    </Select>
                                </FormControl>
                            </Grid>
                        </Grid>
                        <Divider className={classes.divider} variant="fullWidth" />
                        <Typography style={{ fontSize: '15px', color: 'grey', margin: '2%' }}>Docs in Pipeline</Typography>
                        <Grid container >
                            <Grid item xs={6}>
                                <Grid container className={classes.grid1} >
                                    <Grid item xs={4}>
                                        <IconButton className={classes.iconbutton}>
                                            <DescriptionOutlinedIcon className={classes.icon} />
                                        </IconButton>
                                    </Grid>
                                    <Grid item xs={4}>
                                        <Typography className={classes.bigtext}>{ filteredData[0].data.drafts + filteredData[0].data.pendingapproval + filteredData[0].data.senttoclient + filteredData[0].data.signing}</Typography>
                                        <Typography variant="caption" className={classes.smalltext}>$924,883.00</Typography>
                                    </Grid>
                                </Grid>
                                <Grid container className={classes.grid1} >
                                    <Grid item xs={3} style={{ textAlign: 'center' }}>
                                        <Typography className={classes.midtext}>732</Typography>
                                        <Typography variant="caption" className={classes.smalltext}>Quotes</Typography>
                                    </Grid>
                                    <Grid item xs={3} style={{ textAlign: 'center' }}>
                                        <Typography className={classes.midtext}>313</Typography>
                                        <Typography variant="caption" className={classes.smalltext}>SLA</Typography>
                                    </Grid>
                                    <Grid item xs={3} style={{ backgroundColor: '#dedfff', textAlign: 'center', borderRadius: '8px' }}>
                                        <Typography className={classes.midtext}>464</Typography>
                                        <Typography variant="caption" className={classes.smalltext}>SOW</Typography>
                                    </Grid>
                                    <Grid item xs={3} style={{ textAlign: 'center' }}>
                                        <Typography className={classes.midtext}>665</Typography>
                                        <Typography variant="caption" className={classes.smalltext}>MSA</Typography>
                                    </Grid>
                                </Grid>
                            </Grid>
                            <Grid item xs={6}>
                                <Grid container className={classes.grid1} xs={12}>
                                    <Grid item xs={5}>
                                        <Typography className={classes.mid2text}>{filteredData[0].data.drafts}</Typography>
                                        <Typography variant="caption" className={classes.smalltext}>$823,933</Typography>
                                        <Chip label='Drafts' size="small" className={classes.chip1}style={{width:'75%'}} />
                                    </Grid>
                                    <Grid item xs={5}>
                                        <Typography className={classes.mid2text}>{filteredData[0].data.pendingapproval}</Typography>
                                        <Typography variant="caption" className={classes.smalltext}>$133,311</Typography>
                                        <Chip label='Pending Approval' size="small" className={classes.chip2} style={{width:'140%'}}/>
                                    </Grid>
                                </Grid>
                                <Grid container className={classes.grid1} xs={12}>
                                    <Grid item xs={6}>
                                        <Typography className={classes.mid2text}>{filteredData[0].data.senttoclient}</Typography>
                                        <Typography variant="caption" className={classes.smalltext}>$102,333</Typography>
                                        <Chip label='Sent to Client' size="small" className={classes.chip3}style={{width:'90%'}} />
                                    </Grid>
                                    <Grid item xs={6}>
                                        <Typography className={classes.mid2text}>{filteredData[0].data.signing}</Typography>
                                        <Typography variant="caption" className={classes.smalltext}>$322,333</Typography>
                                        <Chip label='Signing' size="small" className={classes.chip4}style={{width:'60%'}} />
                                    </Grid>
                                </Grid>
                            </Grid>
                        </Grid>
                        <Divider className={classes.divider} variant="fullWidth" />
                        <Grid container className={classes.grid1} >
                            <Grid item xs={3}>
                                <Typography style={{ fontSize: '11px', color: 'grey', whiteSpace: 'nowrap'}}>NetValue in Pipeline</Typography>
                                <Typography style={{ fontSize: '15px', color: 'black' }}>$924,883</Typography>
                            </Grid>
                            <Grid item xs={3}>
                                <Typography style={{ fontSize: '11px', color: 'grey', whiteSpace: 'nowrap' }}>Achieved So Far</Typography>
                                <Typography style={{ fontSize: '15px', color: 'black' }}>$424,393</Typography>
                            </Grid>
                            <Divider orientation="vertical" flexItem variant="middle"></Divider>
    
                            <Grid item xs={2}>
                                <Typography style={{ fontSize: '11px', color: 'grey', whiteSpace: 'nowrap' }}>Difference</Typography>
                                <Typography style={{ fontSize: '15px', color: 'orange' }}>$135,232</Typography>
                            </Grid>
                            <Grid item xs={2}>
                                <Typography style={{ fontSize: '11px', color: 'grey', whiteSpace: 'nowrap' }}>Target</Typography>
                                <Typography style={{ fontSize: '15px', color: 'black' }}>$2,000,000</Typography>
                            </Grid>
                        </Grid>
                    </Grid>
                </Card>
                </>
                ) : (
                    <>
                         <Card className={classes.card}>
                <Grid >
                    <Grid container style={{ margin: '2%' }}>
                        <Grid item xs={7}>
                            <Typography style={{ color: '#5f6e85' }}>Overview</Typography>
                        </Grid>
                        <Grid item xs={5}>
                            {/* <Button variant='outlined'className={classes.button} startIcon={<CalendarToday style={{color:'blue'}} />} endIcon={<ArrowDropDown />}>All Time</Button> */}
                            <FormControl variant="outlined">
                                <Select
                                    value={time}
                                    onChange={handleChange}
                                >
                                    <MenuItem value={0}><CalendarToday style={{ color: 'blue', width: '20px', height: '20px' }} />All Time</MenuItem>
                                    <MenuItem value={3}><CalendarToday style={{ color: 'blue', width: '20px', height: '20px' }} />Last 3 Months</MenuItem>
                                    <MenuItem value={6}><CalendarToday style={{ color: 'blue', width: '20px', height: '20px' }} />Last 6 Months</MenuItem>
                                </Select>
                            </FormControl>
                        </Grid>
                    </Grid>
                    <Divider className={classes.divider} variant="fullWidth" />
                    <Typography style={{ fontSize: '15px', color: 'grey', margin: '2%' }}>Docs in Pipeline</Typography>
                    <Grid container xs={12}>
                        <Grid item xs={6}>
                            <Grid container className={classes.grid1} >
                                <Grid item xs={3}>
                                    <IconButton className={classes.iconbutton}>
                                        <DescriptionOutlinedIcon className={classes.icon} />
                                    </IconButton>
                                </Grid>
                                <Grid item xs={4}>
                                    <Typography className={classes.bigtext}>{ filteredData[0].data.drafts + filteredData[0].data.pendingapproval + filteredData[0].data.senttoclient + filteredData[0].data.signing}</Typography>
                                    <Typography variant="caption" className={classes.smalltext}>$924,883.00</Typography>
                                </Grid>
                            </Grid>
                            <Grid container className={classes.grid1} >
                                <Grid item xs={3} style={{ textAlign: 'center' }}>
                                    <Typography className={classes.midtext}>{filteredData[0].data.drafts}</Typography>
                                    <Typography variant="caption" className={classes.smalltext}>Quotes</Typography>
                                </Grid>
                                <Grid item xs={3} style={{ textAlign: 'center' }}>
                                    <Typography className={classes.midtext}>{filteredData[0].data.pendingapproval}</Typography>
                                    <Typography variant="caption" className={classes.smalltext}>SLA</Typography>
                                </Grid>
                                <Grid item xs={3} style={{ backgroundColor: '#dedfff', textAlign: 'center', borderRadius: '8px' }}>
                                    <Typography className={classes.midtext}>{filteredData[0].data.senttoclient}</Typography>
                                    <Typography variant="caption" className={classes.smalltext}>SOW</Typography>
                                </Grid>
                                <Grid item xs={3} style={{ textAlign: 'center' }}>
                                    <Typography className={classes.midtext}>{filteredData[0].data.signing}</Typography>
                                    <Typography variant="caption" className={classes.smalltext}>MSA</Typography>
                                </Grid>
                            </Grid>
                        </Grid>
                        <Grid item xs={6}>
                            <Grid container className={classes.grid1} xs={12}>
                                <Grid item xs={6}>
                                    <Typography className={classes.mid2text}>{filteredData[0].data.drafts}</Typography>
                                    <Typography variant="caption" className={classes.smalltext}>$823,933</Typography>
                                    <Chip label='Drafts' size="small" className={classes.chip1} />
                                </Grid>
                                <Grid item xs={6}>
                                    <Typography className={classes.mid2text}>{filteredData[0].data.pendingapproval}</Typography>
                                    <Typography variant="caption" className={classes.smalltext}>$133,311</Typography>
                                    <Chip label='Pending Approval' size="small" className={classes.chip2} />
                                </Grid>
                            </Grid>
                            <Grid container className={classes.grid1} xs={12}>
                                <Grid item xs={6}>
                                    <Typography className={classes.mid2text}>{filteredData[0].data.senttoclient}</Typography>
                                    <Typography variant="caption" className={classes.smalltext}>$102,333</Typography>
                                    <Chip label='Sent to Client' size="small" className={classes.chip3} />
                                </Grid>
                                <Grid item xs={6}>
                                    <Typography className={classes.mid2text}>{filteredData[0].data.signing}</Typography>
                                    <Typography variant="caption" className={classes.smalltext}>$322,333</Typography>
                                    <Chip label='Signing' size="small" className={classes.chip4} />
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>
                    <Divider className={classes.divider} variant="fullWidth" />
                    <Grid container className={classes.grid1} style={{padding:'4%'}}>
                        <Grid item xs={3}>
                            <Typography style={{ fontSize: '12px', color: 'grey', whiteSpace: 'nowrap' }}>Net Value in Pipeline</Typography>
                            <Typography style={{ fontSize: '15px', color: 'black' }}>$924,883</Typography>
                        </Grid>
                        <Grid item xs={3}>
                            <Typography style={{ fontSize: '12px', color: 'grey', whiteSpace: 'nowrap' }}>Achieved So Far</Typography>
                            <Typography style={{ fontSize: '15px', color: 'black' }}>$424,393</Typography>
                        </Grid>
                        <Divider orientation="vertical" flexItem variant="middle"></Divider>

                        <Grid item xs={2}>
                            <Typography style={{ fontSize: '12px', color: 'grey', whiteSpace: 'nowrap' }}>Difference</Typography>
                            <Typography style={{ fontSize: '15px', color: 'orange' }}>$135,232</Typography>
                        </Grid>
                        <Grid item xs={2}>
                            <Typography style={{ fontSize: '12px', color: 'grey', whiteSpace: 'nowrap' }}>Target</Typography>
                            <Typography style={{ fontSize: '15px', color: 'black' }}>$2,000,000</Typography>
                        </Grid>
                    </Grid>
                </Grid>
            </Card>
                    </>
                )
            }

        </div>
    );
}