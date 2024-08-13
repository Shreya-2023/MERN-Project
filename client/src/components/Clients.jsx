import React from "react";
import DrawerComponent from "./Drawer";
import { Button } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { Link } from 'react-router-dom';
import UserTable from "./ClientTable";
import Form from "./ClientForm";

const Clients = () => {
    return (
        <>
        <DrawerComponent/>
        {/* <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
           
            <Link to="/clientForm" element={<Form />}>
                <Button variant="contained" color="primary" startIcon={<AddIcon />}>
                    Add New
                </Button>
            </Link>
            <Link to="/clients" element={<Clients/>}>
          <Button variant="contained" color="primary" startIcon={<ArrowBackIcon />}>
            Back
          </Button>
        </Link>
         
        </div> */}
        <h2>This is Clients page</h2> 
        <UserTable />
        {/* <Form /> */}
        </>
    )
}

export default Clients;
