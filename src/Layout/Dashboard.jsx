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
import { Link } from 'react-router-dom';


export const Dashboard = () => {

  return (
    <div style={{ marginTop: -80 }}>
      <div>
       


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
