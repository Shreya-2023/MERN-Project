import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import {
  Drawer,
  List,
  ListItem,
  ListItemText,
  ListItemIcon,
  Divider,
  Typography,
  IconButton,
  Menu,
  MenuItem,
  Toolbar,
  AppBar,
} from '@mui/material';
import {
  Menu as MenuIcon,
  AccountCircle as AccountCircleIcon,
  Business as BusinessIcon,
  People as PeopleIcon,
  Home as HomeIcon,
  Logout,
} from '@mui/icons-material';

const DrawerComponent = () => {
  const [openDrawer, setOpenDrawer] = useState(false);
  const [profileAnchorEl, setProfileAnchorEl] = useState(null);
  const navigate = useNavigate()
  const handleMenuClick = (event) => {
    setProfileAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setProfileAnchorEl(null);
  };

  const handleLogout = () => {
    alert("hi")
    navigate('/logout')
  }

  return (
    <>
      <AppBar position="static">
        <Toolbar>
          <IconButton edge="start" color="inherit" onClick={() => setOpenDrawer(true)} sx={{ mr: 2 }}>
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Shriram Solutions
          </Typography>
          <div>
            <IconButton
              color="inherit"
              aria-label="account of current user"
              aria-controls="profile-menu"
              aria-haspopup="true"
              onClick={handleMenuClick}
            >
              <AccountCircleIcon />
            </IconButton>
            <Menu
              id="profile-menu"
              anchorEl={profileAnchorEl}
              keepMounted
              open={Boolean(profileAnchorEl)}
              onClose={handleMenuClose}
            >
              <MenuItem onClick={handleMenuClose}>Settings</MenuItem>
              <MenuItem onClick={handleMenuClose}>Password Change</MenuItem>
              {/* <MenuItem onClick={handleLogout}>Logout</MenuItem> */}
              <MenuItem component={Link} to="/logout">
                Logout
                </MenuItem>
            </Menu>
          </div>
        </Toolbar>
      </AppBar>

      <Drawer anchor="left" open={openDrawer} onClose={() => setOpenDrawer(false)}>
        <div onClick={() => setOpenDrawer(false)} onKeyDown={() => setOpenDrawer(false)} style={{ width: 250 }}>
          <List>
            <ListItem button component={Link} to="/dashboard">
              <ListItemIcon>
                <HomeIcon />
              </ListItemIcon>
              <ListItemText primary="Dashboard" />
            </ListItem>
          </List>
          <Divider />
          <Typography variant="h6" component="div" style={{ padding: '10px' }}>
            Masters
          </Typography>
          <List>
            <ListItem button component={Link} to="/clients">
              <ListItemIcon>
                <BusinessIcon />
              </ListItemIcon>
              <ListItemText primary="Clients" />
            </ListItem>
            <ListItem button component={Link} to="/suppliers">
              <ListItemIcon>
                <BusinessIcon />
              </ListItemIcon>
              <ListItemText primary="Suppliers" />
            </ListItem>
            <ListItem button component={Link} to="/labours">
              <ListItemIcon>
                <PeopleIcon />
              </ListItemIcon>
              <ListItemText primary="Labours" />
            </ListItem>
            <ListItem button component={Link} to="/users">
              <ListItemIcon>
                <PeopleIcon />
              </ListItemIcon>
              <ListItemText primary="Users" />
            </ListItem>
          </List>
        </div>
      </Drawer>
    </>
  );
};

export default DrawerComponent;
