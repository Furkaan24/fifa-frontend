import React, { useState } from 'react';
import { Box, AppBar, Toolbar, Typography, FormControl, InputLabel, Select, MenuItem, Button } from '@mui/material';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

export default function NavBar({ setSelectedCurrency }) {
  const navItems = ["Github", "Players", "Teams"];
  const [currentCurrency, setCurrentCurrency] = useState("EUR");

  // Log the setSelectedCurrency function to ensure it's being passed correctly
  console.log("setSelectedCurrency in NavBar:", setSelectedCurrency);

  const handleCurrencyChange = (event) => {
    setCurrentCurrency(event.target.value);
    setSelectedCurrency(event.target.value);
  };

  return (
    <Box sx={{ display: "flex" }}>
      <AppBar component="nav">
        <Toolbar>
          <Typography
            variant="h6"
            component="div"
            sx={{ flexGrow: 1, display: { xs: "none", sm: "flex" } }}
          >
            <Link
              to="/"
              style={{ textDecoration: "inherit", color: "inherit" }}
            >
              FIFA KBE
            </Link>
            <Box sx={{ minWidth: 120 }}>
              <FormControl>
                <InputLabel id="demo-simple-select-label"></InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={currentCurrency}
                  onChange={handleCurrencyChange}
                >
                  <MenuItem value={"EUR"}>Euro</MenuItem>
                  <MenuItem value={"USD"}>Dollar</MenuItem>
                  <MenuItem value={"BTC"}>Bitcoin</MenuItem>
                  <MenuItem value={"GBP"}>Pound</MenuItem>
                  <MenuItem value={"CHF"}>Swiss Franc</MenuItem>
                </Select>
              </FormControl>
            </Box>
          </Typography>

          <Box sx={{ display: { xs: "none", sm: "block" } }}>
            {navItems.map((item) => (
              <Link
                key={item}
                to={`/${item.toLowerCase()}`} // Ensure route paths are in lower case to match the routes in App
                style={{ textDecoration: "inherit", color: "inherit" }}
              >
                <Button color="inherit" style={{ textDecoration: "inherit" }}>
                  {item}
                </Button>
              </Link>
            ))}
          </Box>
        </Toolbar>
      </AppBar>
      <Box component="nav"></Box>
      <Box component="main" sx={{ p: 3 }}></Box>
      <Toolbar />
    </Box>
  );
}

NavBar.propTypes = {
  setSelectedCurrency: PropTypes.func.isRequired,
};
