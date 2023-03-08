import React, { useState, useEffect } from "react";
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { useTheme } from "@material-ui/core";
import { Typography, Select, InputLabel, MenuItem, Button, Card, Grid, makeStyles, Divider, Table, TableContainer, TableHead, TableBody, TableCell, TableRow, Avatar, Chip, FormControl } from "@material-ui/core";
import {  CalendarToday } from "@material-ui/icons";
import { PieChart, Pie, Cell, Label, ResponsiveContainer } from "recharts";
const data2 = [
    {
        'time': 0,
        'data': [
            { name: "In Progress", value: 605 },
            { name: "Deals Lost", value: 400 },
            { name: "Deals Won", value: 234 }
        ]
    },
    {
        'time': 3,
        'data': [
            { name: "In Progress", value: 205 },
            { name: "Deals Lost", value: 200 },
            { name: "Deals Won", value: 134 }
        ]
    },
    {
        'time': 6,
        'data': [
            { name: "In Progress", value: 405 },
            { name: "Deals Lost", value: 300 },
            { name: "Deals Won", value: 234 }]

    }



];
const COLORS = ["#5fd8e4", "#ebebeb", "#5967ff"];
const useStyles = makeStyles({
    grid1: {
        margin: '3%',
        padding:'1%'

    },
    card: {
        boxShadow: 3,
        marginBottom: '2%'

    },
    divider: {
        width: '100%',
        marginTop: '2%'
    },
    button: {
        fontSize: '15px',
        textTransform: 'none',
    },
    chip1: {
        backgroundColor: '#dedfff',
        color: '#7f8aff',
        display: 'block',
        width: '60%',
        height: 'auto',
        fontSize: '12px',
        fontWeight: 'bold',
        fontFamily: 'Arial',
        textAlign:'center'
    },
    chip2: {
        backgroundColor: '#def5ff',
        color: '#93cce4',
        display: 'block',
        width: '60%',
        height: 'auto',
        fontSize: '12px',
        fontWeight: 'bold',
        fontFamily: 'Arial',
        textAlign:'center'

    },
    chip3: {
        backgroundColor: '#ececec',
        color: '#b6b6b6',
        display: 'block',
        width: '60%',
        height: 'auto',
        fontSize: '12px',
        fontWeight: 'bold',
        fontFamily: 'Arial',
        textAlign:'center'

    },
    mid2text: {
        fontSize: '18px',
        color: '#515f76',
        fontWeight: 'bold',
        fontFamily:'Arial',
        textAlign:'center'

    },

})

export default function OpportunityIndex() {
    const theme = useTheme();
        const isMatch = useMediaQuery(theme.breakpoints.down('sm'));
    const classes = useStyles();
    const [time, setTime] = useState(0);
    const [filteredData, setFilteredData] = useState(data2[0].data);
    const [total, setTotal] = useState(getTotal(filteredData));
    const [dealsWon,setDealsWon] = useState(getDealsWon(filteredData))
    const [dealsLost,setDealsLost] = useState(getDealsLost(filteredData));
    const [dealsInProgress, setdealsInProgress] = useState(getDealsInProgress(filteredData));

    const handleChange = (e) => {
        console.log("Changed Value: ", e?.target?.value);
        setTime(e?.target?.value);
        const val = data2.filter(item => {
            return item.time === e?.target?.value;
        });
        
        // console.log("filtered data: ", val[0].data);
        setFilteredData(val[0].data);
        setTotal(getTotal(val[0].data))
        const dealswon1 = filteredData.filter(item => {
               return item.name === "Deals Won";
       })

       const dealslost = filteredData.filter(item => {
        return item.name === "Deals Lost";
        })
       const inprogress = filteredData.filter(item => {
        return item.name === "In Progress";
        })
       console.log("deals won: ",dealswon1[0].value)

        setDealsWon(dealswon1[0].value)
        setdealsInProgress(inprogress[0].value)
        setDealsLost(dealslost[0].value)

    }

    function getTotal(fdata) {
        let temp = 0;
        fdata.map(item =>{
            temp = temp + item.value
            // console.log(temp)
        })
        return(temp)
    }
    function getDealsWon(fdata) {
        const dealswon1 = fdata.filter(item => {
            return item.name === "Deals Won";
    })
        return(dealswon1[0].value)
    }

    function getDealsLost(fdata) {
        const dealswon1 = fdata.filter(item => {
            return item.name === "Deals Lost";
    })
        return(dealswon1[0].value)
    }

    function getDealsInProgress(fdata) {
        const dealswon1 = fdata.filter(item => {
            return item.name === "In Progress";
    })
        return(dealswon1[0].value)
    }

    
    
    return (
        <div>

            <Card className={classes.card}>
                <Grid container className={classes.grid1}>
                    <Grid item xs={7}>
                        <Typography style={{ color: '#5f6e85' }}>Opportunity Index</Typography>
                    </Grid>
                    <Grid item xs={5}>
                        {/* <Button className={classes.button} variant='outlined' startIcon={<CalendarToday style={{color:'blue'}}/>} endIcon={<ArrowDropDown />}>All Time</Button> */}
                        <FormControl variant="outlined" >    
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
                <ResponsiveContainer width='100%' height={250} >
                    <PieChart width={600} height={200} >
                        <Pie
                            data={filteredData}
                            // cx={120}
                            // cy={200}
                            innerRadius={70}
                            outerRadius={80}
                            fill="#8884d8"
                            cornerRadius={40}
                            paddingAngle={1}
                            dataKey="value"
                            startAngle={-250}
                        >
                            <Label value={total} position='centerBottom' fontSize={35} color="black"></Label>
                            <Label value='Opportunities' position='centerTop' fontSize={12} fontWeight='bold' style={{ margin: '10px', color: 'grey' }} />

                            {filteredData.map((entry, index) => (
                                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                            ))}
                        </Pie>
                    </PieChart>
                </ResponsiveContainer>
                <Grid container className={classes.grid1} style={{marginBottom:'13%'}}>
                    <Grid item xs={4}>
                        <Typography className={classes.mid2text}>{dealsWon}</Typography>
                        <Chip label='Deals Won' size="small" className={classes.chip1} />
                    </Grid>
                    <Grid item xs={4}>
                        <Typography className={classes.mid2text}>{dealsInProgress}</Typography>
                        <Chip label='In Progress' size="small" className={classes.chip2} />
                    </Grid>
                    <Grid item xs={4}>
                        <Typography className={classes.mid2text}>{dealsLost}</Typography>
                        <Chip label='Deals Lost' size="small" className={classes.chip3} />
                    </Grid>

                </Grid>
            </Card>
        </div>
    );
}