import React from "react";
import { MoreVert } from "@material-ui/icons";
import { Menu, MenuItem, IconButton } from "@material-ui/core";
import { useState } from "react";

export default function Morevert() {
    const [open, setOpen] = useState(false);

    const pages = ['Notifications', 'Help', 'Settings', 'Account', 'Logout'];
    const [anchorEl, setAnchorEl] = useState(false);

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(false);
    };
    return (
        <div>
            <IconButton onClick={handleClick} style={{ position:'absolute',right:0,top:0 }}>
                <MoreVert />
            </IconButton>
            <Menu
                id="simple-menu"
                anchorEl={anchorEl}
                //   keepMounted
                open={anchorEl}
                onClose={handleClose}
                onClick={() => { setAnchorEl(false) }}
            >
                {
                    pages.map((page, index) => (
                        <MenuItem key={index}>{page}</MenuItem>
                    ))
                }

            </Menu>

        </div>
    )
}