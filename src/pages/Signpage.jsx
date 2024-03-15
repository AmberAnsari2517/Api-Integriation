import React, { useState } from 'react'

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
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';

export const Signpage = () => {
  const [password, setPassword] = useState('');

  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    password: '',
  });
  

  const [showPassword, setShowPassword] = useState(false);
  const handelchange = (e) => {
    setPassword(e.target.value)
  }
  //form
  const handelSubmit= (e)=>{
    e.preventDefault();

  }
  const handleClickShowPassword = () => setShowPassword((show) => !show);
  //: React.MouseEvent<HTMLButtonElement>
  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  }
  const isLowerCase = /[a-z]/.test(password);
  const isUpperCase = /[A-Z]/.test(password);
  const hasNumber = /\d/.test(password);
  const isMinLength = password.length >= 8;
  return (
    <div >




      <div className='container-fluid'>
        <div className='row'>
          <div className='col-7'>
            <div className='logoTwo'>
              <img src={logo} alt='Logo' />
            </div>
            <div className='container'>



              <FormControl sx={{ m: 1, width: '45ch' }} variant="outlined">
                <h3 className='myHeading'>Get started with a Forever Free  plan</h3>
                <p className='heading'>Sign up  in scond. No credit card required.</p>

                <TextField
                  required
                  id="outlined-required , outline-size-small"
                  label="Required "
                  defaultValue="First Name"
                  size="small"
                />
              </FormControl>

              <FormControl sx={{ m: 1, width: '45ch' }} variant="outlined">
                <TextField
                  id=" outline-size-small"
                  label='Last Name'
                  size="small"
                />
              </FormControl>

              <FormControl sx={{ m: 1, width: '45ch' }} variant="outlined">
                <TextField
                  required
                  id="outlined-required , outline-size-small"
                  label="Required "
                  defaultValue="Email"
                  size="small"
                />
              </FormControl>

              <FormControl sx={{ m: 1, width: '45ch' }} variant="outlined">
                <TextField
                  id=" outline-size-small"
                  label='Phone '
                  size="small"
                />
              </FormControl>

              <FormControl sx={{ m: 1, width: '45ch' }} variant="outlined">
                <InputLabel htmlFor="outlined-adornment-password" size="small">Password</InputLabel>
                <OutlinedInput
                  size="small"
                  id="outlined-adornment-password"
                  type={showPassword ? 'text' : 'password'}
                  onChange={handelchange}
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

                <div className='row'>

                  <div className='col-6'>
                    <div className='validationDiv'>
                      <FiberManualRecordIcon sx={{ color: isLowerCase ? '#00A95A' : 'gray', fontSize: 'small' }} />
                      <span>One Lowercase character</span>
                    </div>

                    <div className='validationDiv'>
                      <FiberManualRecordIcon sx={{ color: isUpperCase ? '#00A95A' : 'gray', fontSize: 'small' }} />
                      <span>One Uppercase character</span>
                    </div>
                  </div>

                  <div className='col-6'>

                    <div className='validationDiv'>
                      <FiberManualRecordIcon sx={{ color: hasNumber ? '#00A95A' : 'gray', fontSize: 'small' }} />
                      <span >One Number</span>
                    </div>

                    <div className='validationDiv'>
                      <FiberManualRecordIcon sx={{ color: isMinLength ? '#00A95A' : 'gray', fontSize: 'small' }} />
                      <span >8 character minimum</span>
                    </div>

                  </div >
                  <span className='validationDivSpan'>  By clicking.you agree to term of Use.Privacy Policy and Anti-Spam Policy
                  </span>
                </div>




              </FormControl>






              <FormControl sx={{ m: 1, width: '45ch' }} variant="outlined">
                <Button className='myBtn' 
                variant="contained" 
                size="medium"
                 style={{ textTransform: 'capitalize' }}
                  onClick={handelSubmit}>
                  Create my account
                </Button>
              </FormControl>

            </div>

          </div>
          <div className='col-5 RightSection' >
            <div className='RightSectionText'>


              <ul>
                <li>
                  <h3>
                    Try Advanced Feature htmlFor 30 days.
                  </h3>
                  
                </li>
                <p>Your  30-daystrail of Advanced features includes:</p>
                <li>
                  <span><CheckCircleIcon sx={{ fontSize: 'medium' }} /></span>
                  <span style={{ marginLeft: '5px' }}>Access to premium features</span>
                </li>
                <p>Live chat templates library, auto-resend promotion, pop-ups, AI writing assistant, and more</p>

                <li>
                  <span><CheckCircleIcon sx={{ fontSize: 'medium' }} /></span>
                  <span style={{ marginLeft: '5px' }}>Access to main features</span>
                </li>
                <p>Email landing page, website building, and more</p>

                <li>
                  <span><CheckCircleIcon sx={{ fontSize: 'medium' }} /></span>
                  <span style={{ marginLeft: '5px' }}>Up to 1,000 subscribers</span>
                </li>

                <li>
                  <span><CheckCircleIcon sx={{ fontSize: 'medium' }} /></span>
                  <span style={{ marginLeft: '5px' }}>Send up to 12,000 emails per month</span>
                </li>

                <li>
                  <span><CheckCircleIcon sx={{ fontSize: 'medium' }} /></span>
                  <span style={{ marginLeft: '5px' }}>24/7 live chat support</span>
                </li>

                <li>
                  <span><CheckCircleIcon sx={{ fontSize: 'medium' }} /></span>
                  <span style={{ marginLeft: '5px' }}>Upgrade anytime</span>
                </li>
              </ul>

            </div>

          </div>

        </div>
      </div>
    </div>


  )
}
