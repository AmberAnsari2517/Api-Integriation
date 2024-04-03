import React, { useState } from 'react'
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
import axios from 'axios';
import { useNavigate } from 'react-router-dom';



export const Loginpages = () => {
  const navigate = useNavigate()

  const [errorMsg, seterrorMsg] = useState('');


  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({

    email: '',
    password: '',
  });

  const handleClickShowPassword = () => setShowPassword((show) => !show);
  //: React.MouseEvent<HTMLButtonElement>
  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  }
  const handelchange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handelSubmit = async (e) => {
    e.preventDefault();

    if (formData.email.trim() === '') {
      seterrorMsg('email is required');
      return;
    }
    const requestObj = {

      email: formData.email,
      password: formData.password,
      type:0,
    };

    const headers = { "Content-Type": "application/json" };

    try {
      const response = await axios.post(
        "http://146.190.164.174:4000/api/app_api/login",
        requestObj,
        { headers }
      );
      if (response.status === 200) {
        localStorage.setItem('token', response.data.token);
        localStorage.setItem('email',formData.email);
        console.log('login successful:', response.data);
        navigate('/dashboard');
      } else {
        console.error('Error fetching data:', response.statusText);
      }
    } catch (error) {
      console.error('loginerror error:', error.response);
    }
  };
  return (
    <div >

      <div className='logo'>
        <img src={logo} alt='Logo' />
      </div>

      <div className='container'>
        <div className='row'>
          <div className='col-7'>



            <form onSubmit={handelSubmit}>
              <FormControl sx={{ m: 1, width: '45ch' }} variant="outlined">
                <h3 className='myHeading'>Sign  in to your Mailcub account</h3>
                <br />
                <p className='handlingText'  >Dont't have you an account  ye?<span > <Link to='/Signup' className='spanColor'> sign up</Link></span> </p>

                <TextField
                name='email'
                  id="outlined-email-input"
                  label="Email"
                  type="email"
                  onChange={handelchange}

                /></FormControl>

              <FormControl sx={{ m: 1, width: '45ch' }} variant="outlined">



                <InputLabel htmlFor="outlined-adornment-password">Password</InputLabel>
                <OutlinedInput
                 name='password'
                  onChange={handelchange}
                
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
                  <p className='greenParagraph'>
                    <Link to='/forget' style={{textDecoration:'none', color:'inherit'}}> Forget your password</Link></p>
                </div>


              </FormControl>
              <FormControl sx={{ m: 1, width: '45ch' }} variant="outlined">
                <Button className='myBtn'
                onClick={handelSubmit}
                  type="submit"
                  variant="contained"
                  size="medium"
                  required
                  style={{ textTransform: 'capitalize' }}
                >
                  Sign in
                </Button>
              </FormControl>    
            </form>
          </div>


          <div className='col-5'>
            <img src={image2} className='w-100' />

          </div>

        </div>
      </div>
    </div>
  )
}
