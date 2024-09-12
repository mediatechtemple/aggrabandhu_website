'use client'
import React, { useState } from 'react';
import { TextField, Button, Typography } from '@mui/material';

const PincodeForm = () => {
  const [formData, setFormData] = useState({
    pincode: '',
    state: '',
    district: '',
  });
  const [errorMessage, setErrorMessage] = useState('');

  // Handle pincode change and fetch state and district based on pincode
  const handlePincodeChange = async (e) => {
    const pincode = e.target.value;
    setFormData((prevState) => ({ ...prevState, pincode })); // Preserve old state

    if (pincode.length === 6) {
      try {
        // Fetch data from the Postal API based on the pincode
        const response = await fetch(`https://api.postalpincode.in/pincode/${pincode}`);
        const data = await response.json();

        if (data[0].Status === 'Success') {
          const postOffice = data[0].PostOffice[0];
          setFormData((prevState) => ({
            ...prevState, // Preserve existing pincode
            state: postOffice.State,
            district: postOffice.District,
          }));
          setErrorMessage('');
        } else {
          setErrorMessage('Invalid Pincode. Please enter a valid 6-digit pincode.');
        }
      } catch (error) {
        setErrorMessage('Error fetching data. Please try again later.');
      }
    }


    
  };

  return (
    <>
      <TextField
        label="Pincode"
        type="text"
        variant="outlined"
        fullWidth
        value={formData.pincode}
        onChange={handlePincodeChange}
        sx={{ mb: 2 }}
      />

      {errorMessage && (
        <Typography color="error" variant="body2" sx={{ mb: 2 }}>
          {errorMessage}
        </Typography>
      )}

      <TextField
        label="State"
        type="text"
        variant="outlined"
        fullWidth
        value={formData.state}
        disabled
        sx={{ mb: 2 }}
      />

      <TextField
        label="District"
        type="text"
        variant="outlined"
        fullWidth
        value={formData.district}
        disabled
        sx={{ mb: 2 }}
      />

      <Button variant="contained" color="primary" fullWidth>
        Submit
      </Button>
    </>
  );
};

export default PincodeForm;
