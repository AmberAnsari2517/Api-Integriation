import React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import SpaceDashboardRoundedIcon from '@mui/icons-material/SpaceDashboardRounded';
import AccountCircleSharpIcon from '@mui/icons-material/AccountCircleSharp';
import SupportAgentIcon from '@mui/icons-material/SupportAgent';
import AccountBalanceIcon from '@mui/icons-material/AccountBalance';
import Avatar from '@mui/material/Avatar';
import { deepPurple } from '@mui/material/colors';
import { logo } from '../Asset';
import { Link } from 'react-router-dom';
import AppBar from '@mui/material/AppBar';
import CssBaseline from '@mui/material/CssBaseline';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { useState } from 'react';

const drawerWidth = 240;

export const Pagelyout = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <Box sx={{ display: 'flex' }}>
         <CssBaseline />
         {/* <AppBar position="fixed"  style={{background:'none', boxShadow:'none'}}>
       
        <div style={{ marginLeft: 'auto'}}>
          <Button
            style={{ marginRight: 17   , marginTop:'15px' ,marginRight:'15px'}}
            id="basic-button"
            aria-controls={anchorEl ? 'basic-menu' : undefined}
            aria-haspopup="true"
            aria-expanded={anchorEl ? 'true' : undefined}
            onClick={handleClick}
          >
            <Avatar sx={{ bgcolor: deepPurple[500] }}>M</Avatar>
          </Button>
          <Menu
            id="basic-menu"
            anchorEl={anchorEl}
            open={Boolean(anchorEl)}
            onClose={handleClose}
            MenuListProps={{
              'aria-labelledby': 'basic-button',
            }}
          >
            <MenuItem onClick={handleClose}><b>Meta Logic</b></MenuItem>
            <MenuItem onClick={handleClose}><p>dynamiclogix@gmail.com</p></MenuItem>
            <MenuItem onClick={handleClose}>
              <Link to='/changepassword' style={{ textDecoration: 'none', color: 'inherit' }}>Change Password</Link>
            </MenuItem>
            <MenuItem onClick={handleClose}>Logout</MenuItem>
          </Menu>
        </div>
    </AppBar> */}
      
      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          '& .MuiDrawer-paper': {
            width: drawerWidth,
            boxSizing: 'border-box',
          },
        }}
        variant="permanent"
        anchor="left"
      >
        <div>
          <img src={logo} alt="Logo" style={{ width: 100, marginTop: 5 }} />
        </div>
        <div style={{ display: 'flex', alignItems: 'center', margin: 15 }}>
        
          <List>
         
            <ListItemButton>
              <ListItemIcon>
              <Avatar sx={{ bgcolor: deepPurple[500], width: 30, height: 30 }}>M</Avatar>

              </ListItemIcon>
              <ListItemText primary="Meta Logic" />
            </ListItemButton>
        
          </List>
        </div>
        <List>
      
          <Link to="/dashboard" style={{ textDecoration: 'none', color: 'inherit' }}>
            <ListItemButton>
              <ListItemIcon>
                <SpaceDashboardRoundedIcon />
              </ListItemIcon>
              <ListItemText primary="Dashboard" />
            </ListItemButton>
          </Link>
          <Link to="/customer" style={{ textDecoration: 'none', color: 'inherit' }}>
            <ListItemButton>
              <ListItemIcon>
                <AccountCircleSharpIcon />
              </ListItemIcon>
              <ListItemText primary="Customer" />
            </ListItemButton>
          </Link>
         
          <Link to="/support-tickets" style={{ textDecoration: 'none', color: 'inherit' }}>
            <ListItemButton>
              <ListItemIcon>
                <SupportAgentIcon />
              </ListItemIcon>
              <ListItemText primary="Support Tickets" />
            </ListItemButton>
          </Link>
          <Link to="/transactions" style={{ textDecoration: 'none', color: 'inherit' }}>
            <ListItemButton>
              <ListItemIcon>
                <AccountBalanceIcon />
              </ListItemIcon>
              <ListItemText primary="Transactions" />
            </ListItemButton>
          </Link>
        </List>
      </Drawer>
      <Box component="main" sx={{ flexGrow: 1, bgcolor: 'background.default', p: 3 }}>
       
       
      </Box>
    </Box>
  );
};



