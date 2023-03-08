import { AppBar, IconButton, Toolbar, Tabs, Tab, makeStyles, Avatar, Grid } from "@material-ui/core";
import { React, useState } from "react";
import logo from '../images/logo.png'
import NotificationsIcon from '@material-ui/icons/Notifications';
import HelpIcon from '@material-ui/icons/Help';
import SettingsIcon from '@material-ui/icons/Settings';
import ArrowDropDown from "@material-ui/icons/ArrowDropDown";
import girl from '../images/girl.png';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { useTheme } from "@material-ui/core";
import DrawerComp from "./Drawer";
import Morevert from "./Morevert";
const useStyles = makeStyles({
    appbar: {
        backgroundColor: 'white',
    },
    customLabelColor: {
        color: "black"
    },
    tab: {
        textTransform: 'none',
        minWidth: '0.5%',
        '&: hover':{
            backgroundColor:'#e7e9ff',
            color:'#606bca'
        }        
    },
    box:{
        marginLeft:'auto',
    
    }
    

})
export default function Navbar() {
    const pages = ['Dashboard', 'Opportunities', 'Account', 'Clients', 'Product', 'Deals', "Pipeline", 'Documents']
    const [value, setValue] = useState(0);
    const classes = useStyles();
    const theme = useTheme();
    console.log(theme);
    const isMatch = useMediaQuery(theme.breakpoints.down('sm'));
    console.log(isMatch);
   

    return (
        <div>
            <AppBar className={classes.appbar} position='static'>
                <Toolbar className={classes.toolbar}>
                    {
                        isMatch ? (
                            <>                           
                              <DrawerComp/>
                                <img src={logo} alt='camuquotes logo' />
                                <Morevert/>
                                
                                </>

                        ) : (
                            <>
                                <DrawerComp/>
                                <img src={logo} alt='camuquotes logo' />
                                <Tabs onChange={(e, value) => { setValue(value) }} value={value} indicatorColor='primary'  textColor='primary' >
                                    {
                                        pages.map((page, index) => (
                                            <Tab key={index} label={page} color='primary'  classes={{root: classes.tab}}   />
                                        ))
                                    }
                                </Tabs>
                                <Grid item className={classes.box} xs={3} sm={3} md={3} xl={3} >
                                    <IconButton>
                                        <NotificationsIcon style={{ color: 'grey' }} />
                                    </IconButton>
                                    <IconButton>
                                        <HelpIcon style={{ color: 'grey' }} />
                                    </IconButton>
                                    <IconButton>
                                        <SettingsIcon style={{ color: 'grey' }} />
                                    </IconButton>
                                    <IconButton>
                                        <Avatar src={girl} alt='girl' />
                                    </IconButton>
                                    <IconButton>
                                        <ArrowDropDown style={{ color: 'grey' }} />
                                    </IconButton>
                                </Grid>
                            </>
                        )
                    }

                </Toolbar>
            </AppBar>
        </div>
    );
}