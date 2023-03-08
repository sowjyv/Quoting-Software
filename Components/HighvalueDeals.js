import React, { useState } from "react";
import { Typography, Select ,FormControl,MenuItem,Button, Card, Grid, makeStyles, Divider, Table,TableContainer,TableHead,TableBody,TableCell,TableRow,Avatar,Chip } from "@material-ui/core";
import {  CalendarToday } from "@material-ui/icons";
import { AvatarGroup } from "@material-ui/lab";
import girl2 from '../images/girl2.png'
import person1 from '../images/person1.png'
import person2 from '../images/person2.png'
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { useTheme } from "@material-ui/core";

const useStyles = makeStyles({
    grid1: {
        margin: '4%'
        
    },
    card: {
        boxShadow: 3,
        marginBottom:'2%'

    },
    divider: {
        width: '100%',
        marginTop: '2%'
    },
    button:{
        fontSize:'15px',
        textTransform:'none',
    },
})

const data = [
    {
        "time": 0,
        "data": [               
            {
            "accName": "Alpha Corp",
            "opprt": "Develpment of Unit Gen...",
            "dealSize": 124323,
            "approvers": [girl2, person1, person2],
            "pendingDays":3
        },
        {
            "accName": "Zelta Century",
            "opprt": "Multiplex Solution for Com..",
            "dealSize": 314323,
            "approvers": [girl2],
            "pendingDays":1
        },
        {
            "accName": "Bezel Soft Inc",
            "opprt": "Mastermind DevOps: Make..",
            "dealSize": 244323,
            "approvers": [person1,person2],
            "pendingDays":3
        },
        {
            "accName": "GrisWalleque",
            "opprt": "Data Driven Complex for A3",
            "dealSize": 214323,
            "approvers": [girl2],
            "pendingDays":1
        },
        {
            "accName": "CrisperTech",
            "opprt": "Magic Solution Web/app",
            "dealSize": 27601,
            "approvers": [person2],
            "pendingDays":3
        }
    ]        
    },
    {
        "time": 6,
        "data": [               
            {
                "accName": "Alpha Corp",
                "opprt": "Develpment of Unit Gen...",
                "dealSize": 124323,
                "approvers": [girl2, person2],
                "pendingDays":3
            },
            {
                "accName": "Zelta Century",
                "opprt": "Multiplex Solution for Com..",
                "dealSize": 21323,
                "approvers": [girl2, person1],
                "pendingDays":1
            },
            {
                "accName": "Bezel Soft Inc",
                "opprt": "Mastermind DevOps: Make..",
                "dealSize": 204323,
                "approvers": [girl2, person1, person2],
                "pendingDays":3
            },
            {
                "accName": "GrisWalleque",
                "opprt": "Data Driven Complex for A3",
                "dealSize": 34323,
                "approvers": [person1,girl2],
                "pendingDays":3
            },
            {
                "accName": "CrisperTech",
                "opprt": "Magic Solution Web/app",
                "dealSize": 2601,
                "approvers": [person2,person1,girl2],
                "pendingDays":1
            }
    ]        
    },
    {
        "time": 3,
        "data": [ 
        {
            "accName": "Alpha Corp",
            "opprt": "Develpment of Unit Gen...",
            "dealSize": 124323,
            "approvers": [girl2, person1, person2],
            "pendingDays":3
        },
        {
            "accName": "Zelta Century",
            "opprt": "Multiplex Solution for Com..",
            "dealSize": 314323,
            "approvers": [girl2, person2],
            "pendingDays":1
        },
        {
            "accName": "Bezel Soft Inc",
            "opprt": "Mastermind DevOps: Make..",
            "dealSize": 344323,
            "approvers": [ person1],
            "pendingDays":3
        },
        {
            "accName": "GrisWalleque",
            "opprt": "Data Driven Complex for A3",
            "dealSize": 14323,
            "approvers": [girl2,person2],
            "pendingDays":3
        },
        {
            "accName": "CrisperTech",
            "opprt": "Magic Solution Web/app",
            "dealSize": 2601,
            "approvers": [person2,person1],
            "pendingDays":2
        }
    ]
    }

];

export default function Task() {
    const theme = useTheme();
    const isMatch = useMediaQuery(theme.breakpoints.down('sm'));
    const classes = useStyles();
    const [time, setTime] = useState(0); 
    const [filteredData, setFilteredData] = useState([data[0]]); 
    const [totalValue, setTotalValue] = useState(924893);
    
const handleChange = (e) => {
    console.log("Changed Value: ",e?.target?.value);
    setTime(e?.target?.value);
    const val = data.filter(item => {        
        return item.time === e?.target?.value;
      });
      //console.log("filtered data: ",val[0]);
      calculateTotalValue(val);
      setFilteredData(val);
}
const calculateTotalValue = (item) => {
    let tempVal = 0;   
    item[0].data.map(val => {
        tempVal = tempVal + val.dealSize
      })
setTotalValue(tempVal);
}
    return (
        <div>
            {
                isMatch ? (
                <>
                 <Card className={classes.card}>
                <Grid container style={{margin:'2%'}}>
                    <Grid item xs={7}>
                        <Typography style={{color:'#5f6e85'}}>High Value Deals</Typography>
                    </Grid>
                    <Grid item xs={5}>
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
                <Divider className={classes.divider} variant="fullWidth"  />

                <Button variant="contained" style={{margin:'2%',color:'grey',backgroundColor:'#dedfff',borderRadius:'8px',textTransform:'none'}}>Total Value :  <span style={{color:'black',fontWeight:'bold'}}>${totalValue}</span></Button>
              
                <TableContainer  >
                    <Table size="small" style={{tableLayout:'auto'}} >
                        <TableHead >
                            <TableRow >
                                <TableCell style={{borderBottom:'none',whiteSpace: "nowrap"}} ><Typography style={{fontSize:11,color:'grey',fontFamily:'Arial',fontWeight:'bold'}}>ACCOUNT NAME</Typography></TableCell>
                                <TableCell style={{borderBottom:'none'}} ><Typography style={{fontSize:11,color:'grey',fontFamily:'Arial',fontWeight:'bold'}}>OPPORTUNITY</Typography></TableCell>
                                <TableCell style={{borderBottom:'none', whiteSpace: "nowrap"}} ><Typography style={{fontSize:11,color:'grey',fontFamily:'Arial',fontWeight:'bold'}}>DEAL SIZE</Typography></TableCell>
                                <TableCell style={{borderBottom:'none'}}><Typography style={{fontSize:11,color:'grey',fontFamily:'Arial',fontWeight:'bold'}}>APPROVERS</Typography></TableCell>
                                <TableCell style={{borderBottom:'none', whiteSpace: "nowrap"}}><Typography style={{fontSize:11,color:'grey',fontFamily:'Arial',fontWeight:'bold'}}>PENDING DAYS</Typography></TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                        {filteredData[0]?.data.map((item,index) => (  
                            <TableRow key={index}>
                                <TableCell style={{borderBottom:'none', whiteSpace: "nowrap"}}><Typography style={{fontSize:'12px',color:'#3c4e6a',fontFamily:'Arial'}}>{item.accName}</Typography></TableCell>
                                <TableCell style={{borderBottom:'none', whiteSpace: "nowrap"}}><Typography style={{fontSize:'12px',color:'#3c4e6a',fontFamily:'Arial'}}>{item.opprt}</Typography></TableCell>
                                <TableCell style={{borderBottom:'none', whiteSpace: "nowrap"}}><Typography style={{fontSize:'12px',color:'#3c4e6a',fontFamily:'Arial'}}>${item.dealSize}</Typography></TableCell>
                                {/* <TableCell style={{borderBottom:'none', whiteSpace: "nowrap"}}>{item.approvers}</TableCell> */}
                                <TableCell style={{borderBottom:'none', whiteSpace: "nowrap"}}>
                                <AvatarGroup max={3} spacing='small'>
                                    {item.approvers.map((approver) => (
                                        <Avatar src={approver} alt='GIRL2'></Avatar>
                                    ))}
                                    </AvatarGroup>
                                </TableCell>
                                <TableCell style={{borderBottom:'none', whiteSpace: "nowrap"}}><Typography style={{fontSize:'12px',color:'#3c4e6a',fontFamily:'Arial'}}>{item.pendingDays}</Typography></TableCell>

                            </TableRow> 
                            ))} 
                           
                        </TableBody>
                    </Table>
                </TableContainer>
                
            </Card>
                </>
                ):(
                <>
                 <Card className={classes.card}>
                <Grid container style={{margin:'1%'}}>
                    <Grid item xs={8}>
                        <Typography style={{color:'#5f6e85'}}>High Value Deals</Typography>
                    </Grid>
                    <Grid item xs={4}>
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
                <Divider className={classes.divider} variant="fullWidth"  />

                <Button variant="contained" style={{margin:'2%',color:'grey',backgroundColor:'#dedfff',borderRadius:'8px',textTransform:'none'}}>Total Value :  <span style={{color:'black',fontWeight:'bold'}}>${totalValue}</span></Button>
              
                <TableContainer  >
                    <Table size="small" style={{tableLayout:'auto'}} >
                        <TableHead >
                            <TableRow >
                                <TableCell style={{borderBottom:'none',whiteSpace: "nowrap"}} ><Typography style={{fontSize:11,color:'grey',fontFamily:'Arial',fontWeight:'bold'}}>ACCOUNT NAME</Typography></TableCell>
                                <TableCell style={{borderBottom:'none'}} ><Typography style={{fontSize:11,color:'grey',fontFamily:'Arial',fontWeight:'bold'}}>OPPORTUNITY</Typography></TableCell>
                                <TableCell style={{borderBottom:'none', whiteSpace: "nowrap"}} ><Typography style={{fontSize:11,color:'grey',fontFamily:'Arial',fontWeight:'bold'}}>DEAL SIZE</Typography></TableCell>
                                <TableCell style={{borderBottom:'none'}}><Typography style={{fontSize:11,color:'grey',fontFamily:'Arial',fontWeight:'bold'}}>APPROVERS</Typography></TableCell>
                                <TableCell style={{borderBottom:'none', whiteSpace: "nowrap"}}><Typography style={{fontSize:11,color:'grey',fontFamily:'Arial',fontWeight:'bold'}}>PENDING DAYS</Typography></TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                        {filteredData[0]?.data.map((item,index) => (  
                            <TableRow key={index}>
                                <TableCell style={{borderBottom:'none', whiteSpace: "nowrap"}}><Typography style={{fontSize:'12px',color:'#3c4e6a',fontFamily:'Arial'}}>{item.accName}</Typography></TableCell>
                                <TableCell style={{borderBottom:'none', whiteSpace: "nowrap"}}><Typography style={{fontSize:'12px',color:'#3c4e6a',fontFamily:'Arial'}}>{item.opprt}</Typography></TableCell>
                                <TableCell style={{borderBottom:'none', whiteSpace: "nowrap"}}><Typography style={{fontSize:'12px',color:'#3c4e6a',fontFamily:'Arial'}}>${item.dealSize}</Typography></TableCell>
                                {/* <TableCell style={{borderBottom:'none', whiteSpace: "nowrap"}}>{item.approvers}</TableCell> */}
                                <TableCell style={{borderBottom:'none', whiteSpace: "nowrap"}}>
                                <AvatarGroup max={3} spacing='small'>
                                    {item.approvers.map((approver) => (
                                        <Avatar src={approver} alt='GIRL2'></Avatar>
                                    ))}
                                    </AvatarGroup>
                                </TableCell>
                                <TableCell style={{borderBottom:'none', whiteSpace: "nowrap"}}><Typography style={{fontSize:'12px',color:'#3c4e6a',fontFamily:'Arial'}}>{item.pendingDays}</Typography></TableCell>

                            </TableRow> 
                            ))} 
                           
                        </TableBody>
                    </Table>
                </TableContainer>
                
            </Card>
                </>
                )
            }
           
        </div>
    );
}