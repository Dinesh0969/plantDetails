import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Box,
} from '@mui/material';
import { styled } from '@mui/material/styles';

const StyledAppBar = styled(AppBar)(({ theme }) => ({
  backgroundColor: theme.palette.primary.main,
  boxShadow: '0 2px 5px rgba(0,0,0,0.1)',
}));

const NavButton = styled(Button)(({ theme }) => ({
  color: theme.palette.common.white,
  marginLeft: theme.spacing(2),
  '&:hover': {
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
  },
}));

function Navbar() {
  return (
    <StyledAppBar position="static">
      <Toolbar>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          Plant Collection
        </Typography>
        <Box>
          <NavButton component={RouterLink} to="/plants">
            All Plants
          </NavButton>
          <NavButton component={RouterLink} to="/add-plant">
            Add New Plant
          </NavButton>
          <NavButton component={RouterLink} to="/">
            Logout
          </NavButton>
        </Box>
      </Toolbar>
    </StyledAppBar>
  );
}

export default Navbar; 