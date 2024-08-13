import React, { useState } from 'react';
import { TextField, Button, Container, Typography,  TextareaAutosize  } from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { useNavigate, Link } from 'react-router-dom';
import axios from 'axios';
import Suppliers from './Suppliers';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function SuppliersForm() {
  const [formData, setFormData] = useState({
    // Sr_No: '',
     Name: '',
     Addhar_no: '',
     GST_No: '',
     PAN_No: '',
     Gender: '',
     Mobile_No: '',
     Address: '',
   });
   const [errors, setErrors] = useState({});
   const navigate = useNavigate();
 
   const handleChange = (e) => {
     const { name, value } = e.target;
     setFormData({ ...formData, [name]: value });
   };
 
   const validateForm = () => {
     let valid = true;
     const newErrors = {};
 
     // Check for required fields and additional validation rules
     if (formData.Addhar_no.trim().length !== 12) {
       newErrors.Addhar_no = 'Aadhar number must be 12 digits';
       valid = false;
     }
 
     if (formData.GST_No.trim().length !== 10) {
       newErrors.GST_No = 'GST number must be 10 digits';
       valid = false;
     }
 
     if (formData.PAN_No.trim().length !== 10) {
       newErrors.PAN_No = 'PAN number must be 10 characters';
       valid = false;
     }
 
     if (formData.Mobile_No.trim().length !== 10) {
       newErrors.Mobile_No = 'Mobile number must be 10 digits';
       valid = false;
     }
 
     // Check for required fields
     Object.entries(formData).forEach(([key, value]) => {
       if (value.trim() === '' && key !== 'Address') {
         newErrors[key] = `${key.replace('_', ' ')} is required`;
         valid = false;
       }
     });
 
     setErrors(newErrors);
     return valid;
   };
 
   const handleSubmit = async (e) => {
     e.preventDefault();
 
     if (!validateForm()) {
       return;
     }
 
     try {
       const response = await axios.post('http://localhost:5000/supFormRoute/validateSupForm', formData);
       console.log('Form data submitted successfully:', response.data);
       toast.success('Form submitted successfully');
       setFormData({
        // Sr_No: '',
         Name: '',
         Addhar_no: '',
         GST_No: '',
         PAN_No: '',
         Gender: '',
         Mobile_No: '',
         Address: '',
       });
      // Add a delay before redirecting to the client table
    setTimeout(() => {
      navigate('/suppliersTable');
    }, 2000); // 2000 milliseconds = 2 seconds
  } catch (error) {
    console.error('Error submitting form data:', error);
  }
};

  return (
    <Container maxWidth="xl">
      <ToastContainer />
      <div style={{ display: "flex", alignItems: "center", marginBottom: "1rem" }}>
        <Button component={Link} to="/suppliers" variant="contained" color="primary" startIcon={<ArrowBackIcon />}>
          Back
        </Button>
      </div>
      <Typography variant="h4" align="center" gutterBottom>
        Suppliers Form
      </Typography>
      <form onSubmit={handleSubmit}>
        {/* <TextField
          label="Sr No"
          name="Sr_No"
          value={formData.Sr_No}
          onChange={handleChange}
          fullWidth
          margin="normal"
          error={!!errors.Sr_No}
          helperText={errors.Sr_No}
        /> */}
        <TextField
          label="Name"
          name="Name"
          value={formData.Name}
          onChange={handleChange}
          fullWidth
          margin="normal"
          error={!!errors.Name}
          helperText={errors.Name}
        />
        <TextField
          label="Aadhar No"
          name="Addhar_no"
          value={formData.Addhar_no}
          onChange={handleChange}
          fullWidth
          margin="normal"
          error={!!errors.Addhar_no}
          helperText={errors.Addhar_no}
        />
        <TextField
          label="GST No"
          name="GST_No"
          value={formData.GST_No}
          onChange={handleChange}
          fullWidth
          margin="normal"
          error={!!errors.GST_No}
          helperText={errors.GST_No}
        />
        <TextField
          label="PAN No"
          name="PAN_No"
          value={formData.PAN_No}
          onChange={handleChange}
          fullWidth
          margin="normal"
          error={!!errors.PAN_No}
          helperText={errors.PAN_No}
        />
        <TextField
          label="Gender"
          name="Gender"
          value={formData.Gender}
          onChange={handleChange}
          fullWidth
          margin="normal"
          error={!!errors.Gender}
          helperText={errors.Gender}
        />
        <TextField
          label="Mobile No"
          name="Mobile_No"
          value={formData.Mobile_No}
          onChange={handleChange}
          fullWidth
          margin="normal"
          error={!!errors.Mobile_No}
          helperText={errors.Mobile_No}
        />
        <TextareaAutosize
          aria-label="minimum height"
          minRows={3}
          placeholder="Address"
          name="Address"
          value={formData.Address}
          onChange={handleChange}
          //fullWidth
          margin="normal"
        />
        <Button type="submit" variant="contained" color="primary" fullWidth>
          Submit
        </Button>
      </form>
    </Container>
  );
}

export default SuppliersForm;
