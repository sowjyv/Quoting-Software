import React from "react";
import { Drawer, List, ListItem, ListItemIcon, ListItemText, ListItemButton, IconButton } from "@material-ui/core";
import { useState } from "react";
import AppsIcon from '@material-ui/icons/Apps';

export default function DrawerComp() {
    const [open, setOpen] = useState(false);
    const pages = ['Dashboard', 'Opportunities', 'Account', 'Clients', 'Product', 'Deals', "Pipeline", 'Documents']


    return (
        <div>
             <IconButton  onClick={() => { setOpen(!open) }}>
            <AppsIcon />
            </IconButton>
            <Drawer open={open} onClose={() => { setOpen(false) }}>
                <List onClick={()=>{setOpen(false)}}>
                    {
                        pages.map((page,index)=>(
                            <ListItem button key={index}>{page}</ListItem>
                        ))
                    }
                            
                </List>
            </Drawer>
           
        </div>
    );
}