import React, { useState, useEffect } from "react";
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { useTheme } from "@material-ui/core";
import { Typography, Select, FormControl, MenuItem, Button, Card, Grid, makeStyles, Divider, Table, TableContainer, TableHead, TableBody, TableCell, TableRow, Avatar, Chip, IconButton } from "@material-ui/core";
import { ArrowDropDown, CalendarToday } from "@material-ui/icons";
import ThumbUpAltOutlinedIcon from '@material-ui/icons/ThumbUpAltOutlined';
import ThumbDownAltOutlinedIcon from '@material-ui/icons/ThumbDownAltOutlined';
import WatchLaterOutlinedIcon from '@material-ui/icons/WatchLaterOutlined';
import percentage from '../images/percentage.png'
import ArrowUpwardOutlinedIcon from '@material-ui/icons/ArrowUpwardOutlined';
import ArrowDownwardOutlinedIcon from '@material-ui/icons/ArrowDownwardOutlined';
import {
    BarChart,
    Bar,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    Legend,
    ResponsiveContainer
} from "recharts";

const data = [
    {
        'time': 0,
        'data' :[
            {
                name: "MAY",
                'Deals Lost': 100,
                'Deals Won': 200,
            },
            {
                name: "JUN",
                'Deals Lost': 70,
                'Deals Won': 300,
            },
            {
                name: "JUL",
                'Deals Lost': 30,
                'Deals Won': 120,
            },
            {
                name: "AUG",
                'Deals Lost': 70,
                'Deals Won': 220,
            },
            {
                name: "SEP",
                'Deals Lost': 30,
                'Deals Won': 180,

            },
            {
                name: "OCT",
                'Deals Lost': 80,
                'Deals Won': 130,

            },
            {
                name: 'NOV'
            },
            {
                name: 'DEC'
            },
        ]


    },
    {
        'time': 3,
        'data':[
            {
                name: "MAY",
                'Deals Lost': 40,
                'Deals Won': 100,
            },
            {
                name: "JUN",
                'Deals Lost': 40,
                'Deals Won': 300,
            },
            {
                name: "JUL",
                'Deals Lost': 20,
                'Deals Won': 120,
            },
            {
                name: "AUG",
                'Deals Lost': 70,
                'Deals Won': 220,
            },
            {
                name: "SEP",
                'Deals Lost': 30,
                'Deals Won': 180,

            },
            {
                name: "OCT",
                'Deals Lost': 80,
                'Deals Won': 130,

            },
            {
                name: 'NOV'
            },
            {
                name: 'DEC'
            },
        ]
    },
    {
        'time': 6,
        'data':[
            {
                name: "MAY",
                'Deals Lost': 100,
                'Deals Won': 200,
            },
            {
                name: "JUN",
                'Deals Lost': 70,
                'Deals Won': 300,
            },
            {
                name: "JUL",
                'Deals Lost': 30,
                'Deals Won': 120,
            },
            {
                name: "AUG",
                'Deals Lost': 70,
                'Deals Won': 220,
            },
            {
                name: "SEP",
                'Deals Lost': 30,
                'Deals Won': 180,

            },
            {
                name: "OCT",
                'Deals Lost': 80,
                'Deals Won': 130,

            },
            {
                name: 'NOV'
            },
            {
                name: 'DEC'
            },
        ]
    }
];


const useStyles = makeStyles({
    grid1: {
        margin: '4%',
        padding:'3%'

    },
    card: {
        boxShadow: 3,
        marginBottom: '2%'

    },
    divider: {
        width: '100%',
        marginTop: '2%'
    },
    smalltext: {
        fontSize: '12px',
        color: 'grey',
        fontFamily: 'Arial'

    },
    mid2text: {
        fontSize: '18px',
        color: '#515f76',
        fontWeight: 'bold',
        fontFamily: 'Arial'

    },
    chip1: {
        backgroundColor: '#dedfff',
        color: '#5b69ff',
        display: 'block',
        width: '80%',
        height: 'auto',
        fontSize: '12px',
        fontWeight: 'bold',
        fontFamily: 'Arial',
        textAlign:'center'
    },
    chip2: {
        backgroundColor: '#fbd9e1',
        color: '#ee547c',
        display: 'block',
        width: '80%',
        height: 'auto',
        fontSize: '12px',
        fontWeight: 'bold',
        fontFamily: 'Arial',
        textAlign:'center'
    },
});
export default function DealValue() {
    const theme = useTheme();
        const isMatch = useMediaQuery(theme.breakpoints.down('sm'));
    const classes = useStyles();
    const [time, setTime] = useState(0);
    const [filteredData, setFilteredData] = useState(data[0].data);
    const handleChange = (e) => {
        console.log("Changed Value: ", e?.target?.value);
        setTime(e?.target?.value);
        const val = data.filter(item => {
            return item.time === e?.target?.value;
        });
        setFilteredData(val[0].data);


    }
    function CustomizedTick(props) {
        const { x, y, payload } = props;
        return (
            <g transform={`translate(${x},${y})`}>
                <text x={0} y={0} dy={16} fill="#a5a8a6" fontSize={12}>
                    <tspan textAnchor="middle" x="0" >
                        {payload.value}
                    </tspan>
                    
                </text>
            </g>
        );
    }
    return (
        <div>
            {
                isMatch ? (
                <>
                <Card className={classes.card}>
                <Grid container style={{ margin: '2%' }}>
                    <Grid item xs={7}>
                        <Typography style={{ color: '#5f6e85' }}>Deal Value</Typography>
                    </Grid>
                    <Grid item xs={5}>
                        {/* <Button className={classes.button} variant='outlined' startIcon={<CalendarToday style={{color:'blue'}}/>} endIcon={<ArrowDropDown />}>All Time</Button> */}
                        <FormControl variant="outlined">    
                                <Select
                                    value={time}
                                    onChange={handleChange}
                                >
                                    <MenuItem value={0}><CalendarToday style={{ color: 'blue',width:'20px',height:'20px' }} />All Time</MenuItem>
                                    <MenuItem value={3}><CalendarToday style={{ color: 'blue',width:'20px',height:'20px'  }} />Last 3 Months</MenuItem>
                                    <MenuItem value={6}><CalendarToday style={{ color: 'blue',width:'20px',height:'20px'  }} />Last 6 Months</MenuItem>
                                </Select>
                            </FormControl>
                    </Grid>
                </Grid>
                <Divider className={classes.divider} variant="fullWidth" />
                
                    <Grid item xs={12}>
                        <Grid container className={classes.grid1}>
                            <Grid item xs={2}>
                                <IconButton size='medium' style={{ backgroundColor: '#dedfff' }}>
                                    <ThumbUpAltOutlinedIcon style={{ color: '#5b69ff' }} />
                                </IconButton>
                            </Grid>
                            <Grid item xs={3}>
                                <Typography className={classes.mid2text}>1,273</Typography>
                                <Typography variant="caption" className={classes.smalltext}>Deals Won</Typography>
                            </Grid>
                            <Grid item xs={4}>
                                <Typography className={classes.mid2text}>$8,332,004</Typography>
                                <Typography variant="caption" className={classes.smalltext}>Net Value</Typography>
                            </Grid>
                            <Grid item xs={3}>
                                <IconButton size='small' style={{ backgroundColor: '#dff4e7' }}>
                                    <ArrowUpwardOutlinedIcon style={{ color: '#6ad08d' }} />
                                </IconButton>
                            </Grid>
                        </Grid>
                        <Grid container className={classes.grid1}>
                            <Grid item xs={2}>
                                <IconButton size='medium' style={{ backgroundColor: '#ffeade' }}>
                                    <img src={percentage} alt='percentage' />
                                </IconButton>
                            </Grid>
                            <Grid item xs={3}>
                                <Typography className={classes.mid2text}>13%</Typography>
                                <Typography variant="caption" className={classes.smalltext}>Avg. Discount</Typography>
                            </Grid>
                            <Grid item xs={4}>
                                <Typography className={classes.mid2text}>$873,232</Typography>
                                <Typography variant="caption" className={classes.smalltext}>Discount Value</Typography>
                            </Grid>
                            <Grid item xs={3}>
                                <IconButton size='small' style={{ backgroundColor: '#dff4e7' }}>
                                    <ArrowUpwardOutlinedIcon style={{ color: '#6ad08d' }} />
                                </IconButton>
                            </Grid>
                        </Grid>
                        <Grid container className={classes.grid1}>
                            <Grid item xs={2}>
                                <IconButton size='medium' style={{ backgroundColor: '#fbd9e1' }}>
                                    <ThumbDownAltOutlinedIcon style={{ color: '#ee547c' }} />
                                </IconButton>
                            </Grid>
                            <Grid item xs={3}>
                                <Typography className={classes.mid2text}>243</Typography>
                                <Typography variant="caption" className={classes.smalltext}>Deals Lost</Typography>
                            </Grid>
                            <Grid item xs={4}>
                                <Typography className={classes.mid2text}>$743,221</Typography>
                                <Typography variant="caption" className={classes.smalltext}>Net Value</Typography>
                            </Grid>
                            <Grid item xs={3}>
                                <IconButton size='small' style={{ backgroundColor: '#fbd9e1' }}>
                                    <ArrowDownwardOutlinedIcon style={{ color: '#ee547c' }} />
                                </IconButton>
                            </Grid>
                        </Grid>
                        <Grid container className={classes.grid1}>
                            <Grid item xs={2}>
                                <IconButton size='medium' style={{ backgroundColor: '#ececec' }}>
                                    <WatchLaterOutlinedIcon style={{ color: '#a4a4a4' }} />
                                </IconButton>
                            </Grid>
                            <Grid item xs={5} style={{whiteSpace:'nowrap'}}>
                                <Typography className={classes.mid2text}>78 Days</Typography>
                                <Typography variant="caption" className={classes.smalltext}>Average Deal CloseTime</Typography>
                            </Grid>
                            <Grid item xs={2}>

                            </Grid>
                            <Grid item xs={3}>
                                <IconButton size='small' style={{ backgroundColor: '#dff4e7' }}>
                                    <ArrowUpwardOutlinedIcon style={{ color: '#6ad08d' }} />
                                </IconButton>
                            </Grid>
                        </Grid>
                    </Grid>
                    <Divider orientation="vertical" flexItem variant="middle" ></Divider>
                    <Grid item xs={12}>
                        <ResponsiveContainer width='110%' height={250}>
                            <BarChart
                                width={600}
                                height={300}
                                data={filteredData}


                                margin={{
                                    top: 20,
                                    right: 30,
                                    left: 20,
                                    bottom: 5
                                }}
                            >
                                <CartesianGrid strokeDasharray="3" horizontal={true} vertical={true} />
                                <XAxis  interval={0} tickLine={false} dataKey="name" axisLine={false} allowDataOverflow={false} tick={<CustomizedTick />} />
                                <YAxis tickLine={false} axisLine={false} type='number' domain={[0, 400]} tickCount={5} />
                                <Tooltip />

                                <Bar dataKey="Deals Won" barSize={15} stackId="a" fill="#5967ff"  />
                                <Bar dataKey="Deals Lost" barSize={15} stackId="a" fill="#e46c8b" radius={[8, 8, 0, 0]} />
                            </BarChart>
                        </ResponsiveContainer>
                        <Grid container className={classes.grid1}>
                            <Grid item xs={6}></Grid>
                            <Grid item xs={3}>
                            <Chip label='Deals Won' size="small" className={classes.chip1} />
                            </Grid>
                            <Grid item xs={3}>
                            <Chip label='Deals Lost' size="small" className={classes.chip2} />

                            </Grid>
                        </Grid>
                    </Grid>

                
            </Card>
                </>
                ) : (
                <>
                <Card className={classes.card}>
                <Grid container style={{ margin: '2%' }}>
                    <Grid item xs={8}>
                        <Typography style={{ color: '#5f6e85' }}>Deal Value</Typography>
                    </Grid>
                    <Grid item xs={4}>
                        {/* <Button className={classes.button} variant='outlined' startIcon={<CalendarToday style={{color:'blue'}}/>} endIcon={<ArrowDropDown />}>All Time</Button> */}
                        <FormControl variant="outlined">    
                                <Select
                                    value={time}
                                    onChange={handleChange}
                                >
                                    <MenuItem value={0}><CalendarToday style={{ color: 'blue',width:'20px',height:'20px' }} />All Time</MenuItem>
                                    <MenuItem value={3}><CalendarToday style={{ color: 'blue',width:'20px',height:'20px'  }} />Last 3 Months</MenuItem>
                                    <MenuItem value={6}><CalendarToday style={{ color: 'blue',width:'20px',height:'20px'  }} />Last 6 Months</MenuItem>
                                </Select>
                            </FormControl>
                    </Grid>
                </Grid>
                <Divider className={classes.divider} variant="fullWidth" />
                <Grid container style={{marginBottom:'0.5%'}}>
                    <Grid item xs={5}>
                        <Grid container className={classes.grid1}>
                            <Grid item xs={2}>
                                <IconButton size='medium' style={{ backgroundColor: '#dedfff' }}>
                                    <ThumbUpAltOutlinedIcon style={{ color: '#5b69ff' }} />
                                </IconButton>
                            </Grid>
                            <Grid item xs={3}>
                                <Typography className={classes.mid2text}>1,273</Typography>
                                <Typography variant="caption" className={classes.smalltext}>Deals Won</Typography>
                            </Grid>
                            <Grid item xs={4}>
                                <Typography className={classes.mid2text}>$8,332,004</Typography>
                                <Typography variant="caption" className={classes.smalltext}>Net Value</Typography>
                            </Grid>
                            <Grid item xs={3}>
                                <IconButton size='small' style={{ backgroundColor: '#dff4e7' }}>
                                    <ArrowUpwardOutlinedIcon style={{ color: '#6ad08d' }} />
                                </IconButton>
                            </Grid>
                        </Grid>
                        <Grid container className={classes.grid1}>
                            <Grid item xs={2}>
                                <IconButton size='medium' style={{ backgroundColor: '#ffeade' }}>
                                    <img src={percentage} alt='percentage' />
                                </IconButton>
                            </Grid>
                            <Grid item xs={3}>
                                <Typography className={classes.mid2text}>13%</Typography>
                                <Typography variant="caption" className={classes.smalltext}>Avg. Discount</Typography>
                            </Grid>
                            <Grid item xs={4}>
                                <Typography className={classes.mid2text}>$873,232</Typography>
                                <Typography variant="caption" className={classes.smalltext}>Discount Value</Typography>
                            </Grid>
                            <Grid item xs={3}>
                                <IconButton size='small' style={{ backgroundColor: '#dff4e7' }}>
                                    <ArrowUpwardOutlinedIcon style={{ color: '#6ad08d' }} />
                                </IconButton>
                            </Grid>
                        </Grid>
                        <Grid container className={classes.grid1}>
                            <Grid item xs={2}>
                                <IconButton size='medium' style={{ backgroundColor: '#fbd9e1' }}>
                                    <ThumbDownAltOutlinedIcon style={{ color: '#ee547c' }} />
                                </IconButton>
                            </Grid>
                            <Grid item xs={3}>
                                <Typography className={classes.mid2text}>243</Typography>
                                <Typography variant="caption" className={classes.smalltext}>Deals Lost</Typography>
                            </Grid>
                            <Grid item xs={4}>
                                <Typography className={classes.mid2text}>$743,221</Typography>
                                <Typography variant="caption" className={classes.smalltext}>Net Value</Typography>
                            </Grid>
                            <Grid item xs={3}>
                                <IconButton size='small' style={{ backgroundColor: '#fbd9e1' }}>
                                    <ArrowDownwardOutlinedIcon style={{ color: '#ee547c' }} />
                                </IconButton>
                            </Grid>
                        </Grid>
                        <Grid container className={classes.grid1}>
                            <Grid item xs={2}>
                                <IconButton size='medium' style={{ backgroundColor: '#ececec' }}>
                                    <WatchLaterOutlinedIcon style={{ color: '#a4a4a4' }} />
                                </IconButton>
                            </Grid>
                            <Grid item xs={5} style={{whiteSpace:'nowrap'}}>
                                <Typography className={classes.mid2text}>78 Days</Typography>
                                <Typography variant="caption" className={classes.smalltext}>Average Deal CloseTime</Typography>
                            </Grid>
                            <Grid item xs={2}>

                            </Grid>
                            <Grid item xs={3}>
                                <IconButton size='small' style={{ backgroundColor: '#dff4e7' }}>
                                    <ArrowUpwardOutlinedIcon style={{ color: '#6ad08d' }} />
                                </IconButton>
                            </Grid>
                        </Grid>
                    </Grid>
                    <Divider orientation="vertical" flexItem variant="middle" ></Divider>
                    <Grid item xs={6}>
                        <ResponsiveContainer width='110%' height={250}>
                            <BarChart
                                width={600}
                                height={300}
                                data={filteredData}


                                margin={{
                                    top: 20,
                                    right: 30,
                                    left: 20,
                                    bottom: 5
                                }}
                            >
                                <CartesianGrid strokeDasharray="3" horizontal={true} vertical={true} />
                                <XAxis  interval={0} tickLine={false} dataKey="name" axisLine={false} allowDataOverflow={false} tick={<CustomizedTick />} />
                                <YAxis tickLine={false} axisLine={false} type='number' domain={[0, 400]} tickCount={5} />
                                <Tooltip />

                                <Bar dataKey="Deals Won" barSize={15} stackId="a" fill="#5967ff"  />
                                <Bar dataKey="Deals Lost" barSize={15} stackId="a" fill="#e46c8b" radius={[8, 8, 0, 0]} />
                            </BarChart>
                        </ResponsiveContainer>
                        <Grid container className={classes.grid1}>
                            <Grid item xs={6}></Grid>
                            <Grid item xs={3}>
                            <Chip label='Deals Won' size="small" className={classes.chip1} />
                            </Grid>
                            <Grid item xs={3}>
                            <Chip label='Deals Lost' size="small" className={classes.chip2} />

                            </Grid>
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