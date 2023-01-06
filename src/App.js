import logo from './logo.svg';
import './App.css';
import * as React from 'react';
import TextField from '@mui/material/TextField';
import MenuIcon from '@mui/icons-material/Menu';
import profilePhoto from "./image/profile-img.jpeg";
import MenuProfile from "./image/Menu-profile.png";
//import React, { useState } from "react";
import { styled, alpha } from "@mui/material/styles";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import DevicesIcon from '@mui/icons-material/Devices';
import MarkAsUnreadIcon from '@mui/icons-material/MarkAsUnread';
import PlaylistAddCheckIcon from '@mui/icons-material/PlaylistAddCheck';
import PowerSettingsNewIcon from '@mui/icons-material/PowerSettingsNew';
import AddPhotoAlternateIcon from '@mui/icons-material/AddPhotoAlternate';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import FormControlLabel from '@mui/material/FormControlLabel';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import Switch from '@mui/material/Switch';
import PlayBold from './fonts/Play-Bold.ttf'
import PlayRegular from './fonts/Play-Regular.ttf'


//drawer elements used
import Drawer from "@mui/material/Drawer";
import Divider from "@mui/material/Divider";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import { fontFamily } from '@mui/system';
import { FormGroup } from '@mui/material';

function NewAppBar() {
  const [open, setState] = React.useState(false);
  const toggleDrawer = (open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }
    setState(open);
  };

  return (
    <AppBar position='static'>
      <Box sx={{ flexGrow: 1 }} backgroundColor="#14324c">
        <IconButton
          edge="start"
          color="inherit"
          aria-label="menu"
          sx={{ mr: 2, flexGrow: 1 }}
          onClick={toggleDrawer(true)} >
          <MenuIcon />
        </IconButton>
        <IconButton
          aria-label="more"
          id="long-button"
          sx={{ color: "white" }}
          position="right"
        >
          <MoreVertIcon />
        </IconButton>
        {/* The outside of the drawer */}
        <Drawer
          anchor="left" //from which side the drawer slides in
          variant="temporary" //if and how easily the drawer can be closed
          open={open} //if open is true, drawer is shown
          onClose={toggleDrawer(false)} //function that is called when the drawer should close
          onOpen={toggleDrawer(true)} //function that is called when the drawer should open
        >

          <Box sx={{
            backgroundColor: "white",
          }}>

            {/* 
            when clicking the icon it calls the function toggleDrawer 
            and closes the drawer by setting the variable open to false
            */}
            <Box>
              <img src={MenuProfile} alt="profile" className='menu-profile' />
            </Box>

            <Box sx={{ mb: 2 }}>
              <ListItemButton sx={{ backgroundColor: "lightgrey" }}>
                <ListItemIcon>
                  <AccountCircleIcon sx={{ color: "#14324c" }} />
                </ListItemIcon>
                <ListItemText className='textfield' primary="Account Settings" sx={{ color: "#14324c" }} />
              </ListItemButton>

              <ListItemButton>
                <ListItemIcon>
                  <DevicesIcon sx={{ color: "grey" }} />
                </ListItemIcon >
                <ListItemText primary="Paired Devices" sx={{ color: "grey" }} />
              </ListItemButton>

              <ListItemButton>
                <ListItemIcon>
                  <MarkAsUnreadIcon sx={{ color: "grey" }} />
                </ListItemIcon>
                <ListItemText primary="Invites" sx={{ color: "grey" }} />
                <div class="numberCircle">2</div>
              </ListItemButton>

              <Divider sx={{ mb: 1, paddingTop: 10, }} />

              <ListItemButton>
                <ListItemIcon>
                  <PlaylistAddCheckIcon sx={{ color: "grey" }} />
                </ListItemIcon>
                <ListItemText primary="Triggers" sx={{ color: "grey" }} />
              </ListItemButton>

              <Divider sx={{ mb: 1, mt: 1 }} />

              <ListItemButton>
                <ListItemIcon>
                  <PowerSettingsNewIcon sx={{ color: "grey" }} />
                </ListItemIcon>
                <ListItemText primary="Logout" sx={{ color: "grey" }} />
              </ListItemButton>
            </Box>
          </Box>
        </Drawer>
      </Box>
    </AppBar>

  );
}

function ContainedButtons() {
  const [name] = React.useState('');

  console.log(name);
  return (
    <Stack direction="row" spacing={2}>
      <Button
        disabled
        sx={{ color: "#60cffa" }}
      >CANCEL</Button>
      <Button
        label="save"
        variant="contained"
        onClick={() => { name(App().setName); }}
        sx={{ backgroundColor: '#60cffa' }}
      >SAVE</Button>
    </Stack>
  );
}

function Pairing() {
  const [auth, setAuth] = React.useState(true);
  const handleChange = (event) => {
    setAuth(event.target.checked);
  };

  return (
    <FormControlLabel
      control={
        <Switch
          checked={auth}
          onChange={handleChange}
          aria-label="login switch"
        //sx={{alignContent: 'center', justifyContent: 'center'}}
        />
      }
      label={auth ? 'ENABLE PAIRING' : 'PAIRING DISABLED'}
    />
  );
}

function App() {
  const [name, setName] = React.useState('');
  return (
    <div className="App">
      <NewAppBar></NewAppBar>
      <header className="App-header">
        < div className="imgs">
          < div className="container-image">
            <img src={profilePhoto} alt="profile" className="profile" />
            <ListItemButton sx={{ "&:hover": { backgroundColor: "transparent", } }}>
              <ListItemIcon>
                <AddPhotoAlternateIcon sx={{ color: "white" }} />
              </ListItemIcon>
            </ListItemButton>
          </div>
        </div>
        <h2>Janet Perkins</h2>
      </header>
      <body className='App-body'>
        <FormGroup>
          <div>
            <TextField variant="standard" label="Name" sx={{ input: { color: 'White', fontFamily: 'PlayRegular' } }}
              required value={name} onChange={e => setName(e.target.value)} />
          </div>
          <div>
            <TextField variant="standard" label="Phone Number" sx={{ input: { color: 'Grey', fontFamily: 'PlayRegular' } }} />
          </div>
          <div>
            <TextField variant="standard" label="Email" type="email" sx={{ input: { color: 'Grey', fontFamily: 'PlayRegular' } }} />
          </div>
          <div>
            <TextField variant="standard" label="Password" type="password" sx={{ input: { color: 'Grey', fontFamily: 'PlayRegular' } }} />
          </div>
          <div>
            <TextField variant="standard" label="Access Pin" sx={{ color: '#60cffa', input: { color: 'Grey', fontFamily: 'PlayRegular' } }} />
          </div>
          
        </FormGroup>
        <Pairing></Pairing>
      </body>
      <footer className='App-footer'>
        <ContainedButtons></ContainedButtons>
      </footer>
    </div>
  );
}

export default App;