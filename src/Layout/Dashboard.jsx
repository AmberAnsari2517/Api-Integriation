import React, { useState, useEffect } from 'react';
import Fab from '@mui/material/Fab';

import { FormControl } from '@mui/material';
import LanguageIcon from '@mui/icons-material/Language';
import DoDisturbIcon from '@mui/icons-material/DoDisturb';
import {CardContent} from '@mui/material';
import axios from 'axios';

export const Dashboard = () => {
  const [VerifiedDomains, setVerifiedDomains] = useState(10)
  const [UnverifiedDomains, setUnverifiedDomains] = useState(5)
  const [totaluser, setTotaluser] = useState(0)


  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const token = localStorage.getItem("token")
      const headers = {
        'x-sh-auth': token,
      };
      const response = await axios.post(`http://146.190.164.174:4000/api/customer/get_customers`, {

      }, { headers: headers });
      setTotaluser(response.data.count);
      console.log("successful", response.data)
    } catch (error) {
      console.error('Error fetching domain data:', error.response);
    }
  };


  return (
    <div >
      <div>
        <FormControl sx={{ m: 1 }} variant="outlined">
          <h4 className='txtst'>Hi, Welcome Back</h4>
          <div className='three '>
            <div className='first'>
              <div className='fab'>
              <CardContent sx={{ backgroundColor: "#c7eab1", padding: '20px', borderRadius: '50%', width: '60px', height: '60px', margin: '0 auto', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <i className="fa fa-users" aria-hidden="true"></i>
                </CardContent>
              </div>
              <div className='text'>
                <h3>{totaluser}</h3>
                <p>Total Users</p>
              </div>
            </div>
            <div className='first1'>

              <div className='fab'>
              <CardContent sx={{ backgroundColor: "#abd4f1", padding: '20px', borderRadius: '50%', width: '60px', height: '60px', margin: '0 auto', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <LanguageIcon />

                </CardContent>
               
              </div>
              <div className='text'>
                <h3>{VerifiedDomains}</h3>
                <p>verified Domains</p>
              </div>
            </div>
            <div className='first2'>
              <div className='fab'>
              <CardContent sx={{ backgroundColor: "#f3c6bf", padding: '20px', borderRadius: '50%', width: '60px', height: '60px', margin: '0 auto', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <DoDisturbIcon />

                </CardContent>
               
              </div>
              <div className='text'>
                <h3>{UnverifiedDomains}</h3>
                <p>Unverified Domains</p>
              </div>
            </div>
          </div>
        </FormControl>
      </div>
    </div>
  );
}
