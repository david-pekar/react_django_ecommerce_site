import React, { useState } from 'react';
import {
  AppBar,
  Container,
  Toolbar,
  Typography,
  Box,
  Button,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemText,
  InputBase,
} from '@mui/material';
import DevicesIcon from '@mui/icons-material/Devices';
import SearchIcon from '@mui/icons-material/Search';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

export default function Navbar(){
    return (
        <AppBar color= 'primary' position='static'>
            <Container maxWidth='xl' disableGutters>
                <Toolbar sx={{display: 'flex', alignItems: "center", justifyContent: 'space-between'}}>
                    <Box sx={{display: 'flex', alignItems:'center'}}>
                        <DevicesIcon/>
                    </Box>
                    <Box sx={{ display: 'flex', gap: 2}}>
                        <Button color='secondary'>Home</Button>
                        <Button color='secondary'>Products</Button>
                        <Button color='secondary'>Blog</Button>
                        <Button color='secondary'>FAQ</Button>
                        <Button color='secondary'>Contact Us</Button>
                    </Box>
                    <Box sx={{display:'flex', alignItems:'center', gap: 1}}>
                        <IconButton color='secondary'><SearchIcon/></IconButton>
                        <IconButton color='secondary'><ShoppingCartIcon /></IconButton>
                        <Button variant="outlined" color='secondary'>Login / Signup</Button>
                    </Box>
                </Toolbar>
            </Container>
        </AppBar>
    )
}