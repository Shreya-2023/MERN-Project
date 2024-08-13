import React, { useState, useEffect } from 'react';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Button, IconButton } from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import { useNavigate } from 'react-router-dom';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import AddIcon from '@mui/icons-material/Add';
import axios from 'axios';
import { Link } from 'react-router-dom';
import Form from './ClientForm'
import Clients from './Clients';

function ClientsTable() {
  const [data, setData] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    axios({
      method: 'post',
      url: 'http://localhost:5000/tableRoute/getClientTable',
    })
      .then(response => {
        setData(response.data);
        console.log(response.data)
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }, []);

  // Edit function to navigate to the edit form
  const handleEdit = (id) => {
    navigate(`/clientForm/${id}`);
  };

  // Delete function to send a request to delete the item
  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:5000/tableRoute/${id}`);
      // Update the frontend state to remove the deleted item
      const updatedData = data.filter(item => item._id !== id);
      setData(updatedData);
      console.log(`Item with id ${id} deleted from the table`);
    } catch (error) {
      console.error('Error deleting item:', error);
    }
  };



  const navigateToAddNew = () => {
    navigate('/clientForm');
  };

  const navigateToClient = () => {
    navigate('/clients');
  };

  return (
    <div>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>

        <Link to="/clientForm" element={<Form />}>
          <Button variant="contained" color="primary" startIcon={<AddIcon />}>
            Add New
          </Button>
        </Link>
        <Link to="/dashboard" element={<Clients />}>
          <Button variant="contained" color="primary" startIcon={<ArrowBackIcon />}>
            Back
          </Button>
        </Link>


      </div>
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Sr No</TableCell>
              <TableCell>Name</TableCell>
              <TableCell>Addhar No</TableCell>
              <TableCell>GST No</TableCell>
              <TableCell>PAN No</TableCell>
              <TableCell>Gender</TableCell>
              <TableCell>Mobile No</TableCell>
              <TableCell>Address</TableCell>
              <TableCell>Action</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {data.map(item => (
              <TableRow key={item._id}>
                <TableCell>{item.Sr_No}</TableCell>
                <TableCell>{item.Name}</TableCell>
                <TableCell>{item.Addhar_no}</TableCell>
                <TableCell>{item.GST_No}</TableCell>
                <TableCell>{item.PAN_No}</TableCell>
                <TableCell>{item.Gender}</TableCell>
                <TableCell>{item.Mobile_No}</TableCell>
                <TableCell>{item.Address}</TableCell>
                <TableCell>
                  <IconButton onClick={() => handleEdit(item._id)}>
                    <EditIcon />
                  </IconButton>
                  <IconButton onClick={() => handleDelete(item._id)}>
                    <DeleteIcon />
                  </IconButton>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}

export default ClientsTable;
