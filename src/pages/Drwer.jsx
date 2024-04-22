import React, { useState } from 'react';
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
import { Link, useLocation } from 'react-router-dom';
import AppBar from '@mui/material/AppBar';
import CssBaseline from '@mui/material/CssBaseline';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Modal from '@mui/material/Modal';
import { Changepassword } from '../Layout/Changepassword';
import { useNavigate } from 'react-router-dom';
import { Logout } from '../Layout/Logout';

const drawerWidth = 240;

export const Pagelyout = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [oldPassword, setOldPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const userEmail = localStorage.getItem("email");

  const location = useLocation();
  const navigate = useNavigate();

  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  // handle logout
  const handleLogout = async () => {
    const success = await Logout(navigate);
  };

  // handle open model
  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  // handle password change
  const handleChangePassword = async () => {
    try {
      const token = localStorage.getItem('token');
      const success = await Changepassword({
        oldPassword: oldPassword,
        newPassword: newPassword,
        token: token
      });
      if (success) {
        alert('Password changed successfully!');
        setIsModalOpen(false);
      } else {
        alert('Failed to change password. Please try again.');
      }
    } catch (error) {
      console.error('Error changing password:', error.response);
      alert('Failed to change password. Please try again.');
    }
  };

  const isSelected = (path) => {
    return location.pathname === path;
  };

  return (
    <div>
      <Box sx={{ display: 'flex' }}>
        <CssBaseline />

        <AppBar position="fixed" style={{ background: 'white', boxShadow: 'none' }}>
          <div style={{ marginLeft: 'auto' }}>
            <Button
              style={{ marginRight: 17, marginTop: '15px', marginRight: '15px' }}
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
              <MenuItem onClick={handleClose}>{userEmail}</MenuItem>
              <MenuItem onClick={handleOpenModal}>Change Password</MenuItem>
              <MenuItem onClick={handleLogout}>Logout</MenuItem>
            </Menu>
          </div>
          <div>
          </div>

        </AppBar>
        <Modal
          open={isModalOpen}
          onClose={handleCloseModal}
          aria-labelledby="change-password-modal"
          aria-describedby="change-password-modal-description"
        >
          <Box
            sx={{
              position: 'absolute',
              top: '50%',
              left: '50%',
              transform: 'translate(-50%, -50%)',
              width: 400,
              bgcolor: 'background.paper',
              border: '2px solid #000',
              boxShadow: 24,
              p: 4,
            }}
          >
            <Changepassword
              oldPassword={oldPassword}
              newPassword={newPassword}
              setOldPassword={setOldPassword}
              setNewPassword={setNewPassword}
              setConfirmPassword={setConfirmPassword}
              handleChangePassword={handleChangePassword}
            />
          </Box>
        </Modal>

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

              <ListItemButton selected={isSelected('/metalogic')}>
                <ListItemIcon>
                  <Avatar sx={{ bgcolor: deepPurple[500], width: 30, height: 30 }}>M</Avatar>
                </ListItemIcon>
                <ListItemText primary="Meta Logic" />
              </ListItemButton>

            </List>
          </div>
          <List>
            <Link to="/dashboard" style={{ textDecoration: 'none', color: 'inherit' }}>
              <ListItemButton selected={isSelected('/dashboard')}>
                <ListItemIcon>
                  <SpaceDashboardRoundedIcon />
                </ListItemIcon>
                <ListItemText primary="Dashboard" />
              </ListItemButton>
            </Link>
            <Link to="/customer" style={{ textDecoration: 'none', color: 'inherit' }}>
              <ListItemButton selected={isSelected('/customer')}>
                <ListItemIcon>
                  <AccountCircleSharpIcon />
                </ListItemIcon>
                <ListItemText primary="Customer" />
              </ListItemButton>
            </Link>

            <Link to="/support-tickets" style={{ textDecoration: 'none', color: 'inherit' }}>
              <ListItemButton selected={isSelected('/support-tickets')}>
                <ListItemIcon>
                  <SupportAgentIcon />
                </ListItemIcon>
                <ListItemText primary="Support Tickets" />
              </ListItemButton>
            </Link>
            <Link to="/transactions" style={{ textDecoration: 'none', color: 'inherit' }}>
              <ListItemButton selected={isSelected('/transactions')}>
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
    </div>
  );
};
