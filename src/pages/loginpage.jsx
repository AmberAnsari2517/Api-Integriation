import React from 'react'
import './style.css';
import { Link } from 'react-router-dom';
import { logo } from '../Asset'
import { image2 } from '../Asset'
import '@fontsource/roboto/500.css';
import FormControl from '@mui/material/FormControl';
import TextField from '@mui/material/TextField';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import IconButton from '@mui/material/IconButton';
import InputAdornment from '@mui/material/InputAdornment';
import { Button } from '@mui/material';



export const Loginpages = () => {
  const [showPassword, setShowPassword] = React.useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);
//: React.MouseEvent<HTMLButtonElement>
  const handleMouseDownPassword = (event)  => {
    event.preventDefault();
  }
  return (
    <div >

      <div className='logo'>
      <img src={logo} alt='Logo' />
      </div>

      <div className='container'>
      <div className='row'>
        <div className='col-7'>



       
            <FormControl sx={{ m: 1, width: '45ch' }} variant="outlined">
              <h3 className='myHeading'>Sign  in to your Mailcub account</h3>
              <br />
              <p className='handlingText'  >Dont't have you an account  ye?<span > <Link to= 'Sighnup' className='spanColor'> sign up</Link></span> </p>
              
              <TextField
                id="outlined-email-input"
                label="Email"
                type="email"

              /></FormControl>

            <FormControl sx={{ m: 1, width: '45ch' }} variant="outlined">



              <InputLabel htmlFor="outlined-adornment-password">Password</InputLabel>
              <OutlinedInput
                size="medium"
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
              <br />
              <div>
                <p className='greenParagraph'>Forget your password</p>
              </div>
              <br />
              <Button className='myBtn' variant="contained" size="medium" style={{ textTransform: 'capitalize' }}>
                Sign in
              </Button>
            </FormControl>

          </div>

      
        <div className='col-5'>
          <img src={image2} className='w-100' />

        </div>

        </div>
      </div>
    </div>
  )
}
