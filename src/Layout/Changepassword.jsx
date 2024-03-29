import React from 'react';
import Fab from '@mui/material/Fab';
import Avatar from '@mui/material/Avatar';
import { deepPurple } from '@mui/material/colors';
import { FormControl } from '@mui/material';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
import IconButton from '@mui/material/IconButton';
import OutlinedInput from '@mui/material/OutlinedInput';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import CloseIcon from '@mui/icons-material/Close';
import Stack from '@mui/material/Stack';
import { useState } from 'react';
import { Link } from 'react-router-dom';

export const Changepassword = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const [showPassword, setShowPassword] = React.useState(false);
  const [password, setPassword] = useState('');

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };


  return (
    <div style={{ marginTop: -80 }}>
      <div>
     

        <div className='container'>
          <FormControl sx={{ m: 1, width: '55ch' }} variant="outlined">
            <TextField
              id="outlined-password-input"
              label="First Name"
              type="First Name"
            />
          </FormControl><br/>
          <FormControl sx={{ m: 1, width: '55ch' }} variant="outlined">
            <TextField
              id="outlined-password-input"
              label="Last Name"
              type="Last Name"
            />
          </FormControl>
          <br/>
          <FormControl sx={{ m: 1, width: '55ch' }} variant="outlined">
            <TextField
              id="outlined-password-input"
              label="Email"
              type="Email"
            />
           
          </FormControl>
          <br/>
          <FormControl sx={{ m: 1, width: '55ch' }} variant="outlined">
            <InputLabel htmlFor="outlined-adornment-password">Password</InputLabel>
            <OutlinedInput
              id="outlined-adornment-password"
              type={showPassword ? 'text' : 'password'}
              endAdornment={
                <InputAdornment position="end">
                  <IconButton
                    aria-label="toggle password visibility"
                    onClick={handleClickShowPassword}
                    onMouseDown={handleMouseDownPassword}
                    edge="end"
                  >
                    {showPassword ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                </InputAdornment>
              }
              label="Password"
            />
          </FormControl>
          <br/>
          <FormControl>
            <div style={{ display: 'flex', justifyContent: 'flex-end' }}>

              <Button variant="contained" className='btn'>
                Send
              </Button>

            </div>
          </FormControl>


        </div>
      </div>
    </div>
  );
}
