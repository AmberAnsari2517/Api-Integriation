import React from 'react'
import Fab from '@mui/material/Fab';
import AddIcon from '@mui/icons-material/Add';
import Avatar from '@mui/material/Avatar';
import { deepPurple } from '@mui/material/colors';
import { FormControl } from '@mui/material';
import LanguageIcon from '@mui/icons-material/Language';
import DoDisturbIcon from '@mui/icons-material/DoDisturb';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { useState } from 'react';


export const Dashboard = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <div style={{ marginTop: -80 }}>
      <div>
        <div style={{ display: 'flex', justifyContent: 'flex-end' }}>

          <Button style={{marginRight:17}}
            id="basic-button"
            aria-controls={open ? 'basic-menu' : undefined}
            aria-haspopup="true"
            aria-expanded={open ? 'true' : undefined}
            onClick={handleClick}
          >
            <Avatar sx={{ bgcolor: deepPurple[500] }}>M</Avatar>

          </Button>
          <Menu
            id="basic-menu"
            anchorEl={anchorEl}
            open={open}
            onClose={handleClose}
            MenuListProps={{
              'aria-labelledby': 'basic-button',
            }}
          >
            <MenuItem onClick={handleClose}><b>Meta Logic</b>

            </MenuItem>
            <MenuItem onClick={handleClose}> <p>dynamiclogix@gmail.com</p></MenuItem>

            <MenuItem onClick={handleClose}>Change Password</MenuItem>
            <MenuItem onClick={handleClose}>Logout</MenuItem>
          </Menu>
        </div>


        <FormControl sx={{ m: 1, }} variant="outlined">

          <h4 className='txtst'>Hi,Welcome Back</h4>
          <div className='three '>
            <div className='first'>
              <div className='fab'>
                <Fab color="secondary" aria-label="add">
                  <i class="fa-solid fa-users"></i>
                </Fab>
              </div>

              <div className='text'>
                <h3>363</h3>
                <p>Total Users</p>

              </div>
            </div>



            <div className='first1'>

              <div className='fab'>
                <Fab color="secondary" aria-label="add">
                  <LanguageIcon />
                </Fab>
              </div>

              <div className='text'>
                <h3>93</h3>
                <p>Unverified Domains</p>

              </div>
            </div>
            <div className='first2'>

              <div className='fab'>
                <Fab color="secondary" aria-label="add">
                  <DoDisturbIcon />
                </Fab>
              </div>

              <div className='text'>
                <h3>104</h3>
                <p>Unverified Domains</p>

              </div>
            </div>


          </div>
        </FormControl>
      </div>
    </div>
  );
}
