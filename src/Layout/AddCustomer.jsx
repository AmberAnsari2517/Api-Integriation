import React from 'react'
import Fab from '@mui/material/Fab';
import AddIcon from '@mui/icons-material/Add';
import Avatar from '@mui/material/Avatar';
import { deepPurple } from '@mui/material/colors';
import { FormControl } from '@mui/material';
import LanguageIcon from '@mui/icons-material/Language';
import DoDisturbIcon from '@mui/icons-material/DoDisturb';
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

export const AddCustomer = () => {
    const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
 
  const [showPassword, setShowPassword] = React.useState(false);
  const [password, setPassword] = useState('')

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event) => {
      event.preventDefault();
  };
  const handleChange = (event) => {
      setPassword(event.target.value);
  };
  const currencies = [
      {
          label: 'Website',
      },
      {
          label: 'Front-end',
      },
      {
          label: 'Back-end',
      },
      {

          label: 'Web-app',
      },
  ];

 
      return (
    <div style={{ marginTop: -80 }}>
      <div>
        <div style={{ display: 'flex', justifyContent: 'flex-end' }}>

          <Button style={{ marginRight: 17 }}
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




        <div className='container'>





<FormControl sx={{ m: 1, width: '55ch' }} variant="outlined">

    <TextField
        id="outlined-password-input"
        label="First Name"
        type="First Name"
    />
</FormControl>
<FormControl sx={{ m: 1, width: '55ch' }} variant="outlined">
    <TextField
        id="outlined-password-input"
        label="Last Name"
        type="Last Name"
    />
</FormControl>
<FormControl sx={{ m: 1, width: '55ch' }} variant="outlined">
    <TextField
        id="outlined-password-input"
        label="Email"
        type="Email"
    />
</FormControl>
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
<br />
<FormControl sx={{ m: 1, width: '55ch' }} variant="outlined">
    <TextField
        id="outlined-select-currency"
        select
        label="Customer Type"
        type='Customer type'

    >
        {currencies.map((option) => (
            <MenuItem key={option.value} value={option.value}>
                {option.label}
            </MenuItem>
        ))}
    </TextField>
</FormControl>
<FormControl sx={{ m: 1, width: '55ch' }} variant="outlined">
    <TextField
        id="outlined-select-currency"
        select
        label="Insustry Type"


    >
        {currencies.map((option) => (
            <MenuItem key={option.value} value={option.value}>
                {option.label}
            </MenuItem>
        ))}
    </TextField>

    <br />
    <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
        <Stack direction="row" spacing={2}>
            <Button variant="outlined" color='success' startIcon={<CloseIcon />}>
                Close
            </Button>
            <Button variant="contained" className='btn'>
                Send
            </Button>
        </Stack>
    </div>
</FormControl>
</div>
</div>

</div> 
 );
}
