import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import DrawerComponent from './Drawer';
import { AppBar, Typography, Button, Menu, MenuItem } from '@mui/material';
import IconButton from '@mui/material/IconButton';
//import Menu from '@mui/material/Menu';
import { AccountCircle as AccountCircleIcon } from '@mui/icons-material';
import axiosInstance from './server'; // Import your Axios instance

const Dashboard = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(true); // Initially assuming the user is authenticated
  const [profileAnchorEl, setProfileAnchorEl] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const checkAuthentication = async () => {
      try {
        const response = await axiosInstance.get('/Auth/checkAuth');
        console.log('Authentication check response:', response.data);
        if (response.data.isAuthenticated === false) {
          setIsAuthenticated(false);
          console.log('User is not authenticated');
        } else {
          setIsAuthenticated(true);
          console.log('User is authenticated');
          resetTimer();
        }
      } catch (error) {
        setIsAuthenticated(false);
        console.error('Error while checking authentication:', error);
      }
    };

    checkAuthentication();

    let timer;
    const resetTimer = () => {
      // Reset the timer when the user interacts with the page
      const timer = setTimeout(() => {
        console.log('Redirecting to login page due to inactivity.');
        navigate('/login'); // Navigate to login route
      }, 300000); // 5 minutes in milliseconds

      // Clear the timer if the component unmounts or the user logs out
      return () => clearTimeout(timer);
    };
  }, []);

  return (
    <div>
      <DrawerComponent />
      <div>
        {isAuthenticated ? (
          <div>
            <h3>This is Dashboard</h3>
            <div>
              <Link to="/about">
                <Button variant="contained" color="primary">
                  Go to about us page
                </Button>
              </Link>
            </div>
            <h4>Description</h4>
            <hr />
          </div>
        ) : (
          <div>
            <h3>Unauthorized Access</h3>
            <p>Please sign in to access the dashboard.</p>
            <Link to="/login">Sign In</Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default Dashboard;
