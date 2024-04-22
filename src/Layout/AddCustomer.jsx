import React from 'react';
import Fab from '@mui/material/Fab';
import AddIcon from '@mui/icons-material/Add';
import { Snackbar } from "@mui/material";

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
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

export const AddCustomer = () => {
    const [successAlert, setSuccessAlert] = useState(false);
    const [errorAlert, setErrorAlert] = useState(false);
    const [errorMessage, setErrorMessage] = useState('');
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        password: '',
        industryType: '', // Added industryType state
        customerType: '' // Added customerType state
    });

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setFormData({ ...formData, [name]: value });
    };

    // const handleSubmit = async (event) => {
    //     const { firstName, lastName, email, password, industryType, customerType } = formData;

    //     event.preventDefault();
    //     try {
    //         const response = await axios.post('http://146.190.164.174:4000/api/customer/signup_customer', {
    //             first_name: firstName,
    //             last_name: lastName,
    //             email: email,
    //             password: password,
    //             industry_type: industryType, // Send industryType in request
    //             customer_type: customerType, // Send customerType in request
    //         });
    //         console.log('Customer added successfully:', response.data);
    //         setFormData({
    //             firstName: '',
    //             lastName: '',
    //             email: '',
    //             password: '',
    //             industryType: '', // Reset industryType state
    //             customerType: '' // Reset customerType state
    //         });
    //         setSuccessAlert(true);
    //     } catch (error) {
    //         console.error('Error adding customer:', error.response);
    //         setErrorAlert(true);
    //         setErrorMessage(error.response.data.message);
    //     }
    // };
    const handleSubmit = async (e) => {
        e.preventDefault();

     

        const requestObj = {
            first_name: formData.firstName,
            last_name: formData.lastName,
            email: formData.email,
            password: formData.password,
            industry_type:formData.industryType,
            customer_type:formData.customerType,
            
    
        };

        const headers = { 'Content-Type': 'application/json' };

        try {
            const response = await axios.post(
                'http://146.190.164.174:4000/api/customer/signup_customer',
                requestObj,
                { headers }
            );
            if (response.status === 200) {
                console.log('Add Customer successful:', response.data);
                setSuccessAlert(true); // Display success alert
                navigate("/customer")
            } else {
                console.error('Error fetching data:', response.statusText);
            }
        } catch (error) {
            console.error('Add Customer error:', error.response);
            setErrorAlert(true); // Display error alert
            setErrorMessage(error.response.data.message); // Set error message
        }
    };

    const handleCloseAlert = () => {
        setSuccessAlert(false);
        setErrorAlert(false);
        setErrorMessage('');
    };

    const navigate = useNavigate();
    const handleCancel = () => {
        navigate("/customer");
    };



    const [showPassword, setShowPassword] = React.useState(false);

    const handleClickShowPassword = () => setShowPassword((show) => !show);

    const handleMouseDownPassword = (event) => {
        event.preventDefault();
    };

    const currencies = [
        {
            label: 'Website',
            value: 'Website' // Added value for each option
        },
        {
            label: 'Front-end',
            value: 'Front-end' // Added value for each option
        },
        {
            label: 'Back-end',
            value: 'Back-end' // Added value for each option
        },
        {
            label: 'Web-app',
            value: 'Web-app' // Added value for each option
        },
    ];

   


    return (
        <div style={{ marginTop: -10}}>

                <div className='container'>




                    <form onSubmit={handleSubmit}>
                        <FormControl sx={{ m: 1, width: '55ch' }} variant="outlined">

                            <TextField
                                id="outlined-password-input"
                                label="First Name"
                                type="First Name"
                                name="firstName"
                                value={formData.firstName}
                                onChange={handleInputChange}
                                required
                            />
                        </FormControl>
                        <FormControl sx={{ m: 1, width: '55ch' }} variant="outlined">
                            <TextField
                                id="outlined-password-input"
                                label="Last Name"
                                type="Last Name"
                                name='lastName'
                                value={formData.lastName}
                                onChange={handleInputChange}
                                required
                            />
                        </FormControl>
                        <FormControl sx={{ m: 1, width: '55ch' }} variant="outlined">
                            <TextField
                                id="outlined-password-input"
                                label="Email"
                                type="Email"
                                name="email"

                                value={formData.email}
                                onChange={handleInputChange}
                                required
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
                                name="password"
                                value={formData.password}
                                onChange={handleInputChange}

                            />
                        </FormControl>
                        <br />
                        <FormControl sx={{ m: 1, width: '55ch' }} variant="outlined">
                            <TextField
                                id="outlined-select-industry-type"
                                select
                                label="Industry Type"
                                name="industryType"
                                value={formData.industryType}
                                onChange={handleInputChange}
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
                                label="Customer Type"
                                name="customerType"
                                value={formData.customerType}
                                onChange={handleInputChange}
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
                                    <Button onClick={handleCancel} type="submit"
                                        variant="outlined" color='success' startIcon={<CloseIcon />}>
                                        Close
                                    </Button>
                                    <Button type='submit' variant="contained" className='btn' onClick={handleSubmit}>
                                        Send
                                    </Button>
                                </Stack>
                            </div>
                        </FormControl>
                        <Snackbar
                            open={successAlert}
                            autoHideDuration={6000}
                            onClose={handleCloseAlert}
                            message="Customer added successfully"
                            anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
                        />
                        <Snackbar
                            open={errorAlert}
                            autoHideDuration={6000}
                            onClose={handleCloseAlert}
                            message={errorMessage}
                            anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
                        />
                    </form>
                </div>
            </div>


    );
}
