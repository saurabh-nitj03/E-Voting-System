// import React from "react";
// import { Toolbar, Typography, AppBar, Grid } from "@mui/material";
// import HowToVoteOutlinedIcon from "@mui/icons-material/HowToVoteOutlined";
// import { NavbarData } from "../../Data/NavbarData";
// import { Link } from "react-router-dom";

// // react.school/material-ui

// export default function ButtonAppBar() {
//   const style = {
//     logo: {
//       fontSize: 35,
//       paddingRight: 10,
//     },
//     navLink: {
//       fontSize: 20,
//       color: "white",
//     },
//   };

//   return (
//     <>
//       <AppBar>
//         <Toolbar>
//           <Grid container spacing={0}>
//             <Grid item xs={6} display="flex">
//               <HowToVoteOutlinedIcon style={style.logo} />
//               <Typography variant="h5">Voting System</Typography>
//             </Grid>
//             <Grid item xs={6}>
//               <Grid container gap={6} justifyContent="flex-end">
//                 {NavbarData.map((item, index) => {
//                   return (
//                     <Link to={item.link} key={index}>
//                       <Typography style={style.navLink}>
//                         {item.title}
//                       </Typography>
//                     </Link>
//                   );
//                 })}
//               </Grid>
//             </Grid>
//           </Grid>
//         </Toolbar>
//       </AppBar>
//       <Toolbar />
//     </>
//   );
// }
import React, { useState } from "react";
import { Toolbar, Typography, AppBar, Grid, IconButton, Menu, MenuItem } from "@mui/material";
import HowToVoteOutlinedIcon from "@mui/icons-material/HowToVoteOutlined";
import MenuIcon from "@mui/icons-material/Menu";
import { NavbarData } from "../../Data/NavbarData";
import { Link, useLocation } from "react-router-dom";

export default function ButtonAppBar() {
  const [mobileMenuAnchor, setMobileMenuAnchor] = useState(null); // State for mobile menu
  const location = useLocation(); // Get current route location

  const style = {
    logo: {
      fontSize: 35,
      paddingRight: 10,
      color: "white",
    },
    navLink: {
      fontSize: 20,
      color: "white",
      textDecoration: "none",
      transition: "color 0.3s ease, transform 0.3s ease",
      "&:hover": {
        color: "#ffeb3b", // Yellow color on hover
        transform: "scale(1.1)", // Slightly enlarge on hover
      },
    },
    activeLink: {
      color: "#ffeb3b", // Yellow color for active link
      fontWeight: "bold",
    },
  };

  // Handle mobile menu open
  const handleMobileMenuOpen = (event) => {
    setMobileMenuAnchor(event.currentTarget);
  };

  // Handle mobile menu close
  const handleMobileMenuClose = () => {
    setMobileMenuAnchor(null);
  };

  return (
    <>
      <AppBar position="fixed">
        <Toolbar>
          <Grid container spacing={0} alignItems="center">
            {/* Logo and Brand Name */}
            <Grid item xs={6} display="flex" alignItems="center">
              <HowToVoteOutlinedIcon style={style.logo} />
              <Typography variant="h5" style={{ color: "white" }}>
                Voting System
              </Typography>
            </Grid>

            {/* Desktop Navigation Links */}
            <Grid item xs={6} display={{ xs: "none", md: "block" }}>
              <Grid container gap={6} justifyContent="flex-end">
                {NavbarData.map((item, index) => (
                  <Link
                    to={item.link}
                    key={index}
                    style={{
                      ...style.navLink,
                      ...(location.pathname === item.link && style.activeLink), // Apply active link style
                    }}
                  >
                    {item.title}
                  </Link>
                ))}
              </Grid>
            </Grid>

            {/* Mobile Menu Button */}
            <Grid item xs={6} display={{ xs: "flex", md: "none" }} justifyContent="flex-end">
              <IconButton
                edge="end"
                color="inherit"
                aria-label="menu"
                onClick={handleMobileMenuOpen}
              >
                <MenuIcon />
              </IconButton>
            </Grid>
          </Grid>
        </Toolbar>

        {/* Mobile Menu */}
        <Menu
          anchorEl={mobileMenuAnchor}
          open={Boolean(mobileMenuAnchor)}
          onClose={handleMobileMenuClose}
        >
          {NavbarData.map((item, index) => (
            <MenuItem
              key={index}
              component={Link}
              to={item.link}
              onClick={handleMobileMenuClose}
              style={{
                ...style.navLink,
                ...(location.pathname === item.link && style.activeLink), // Apply active link style
              }}
            >
              {item.title}
            </MenuItem>
          ))}
        </Menu>
      </AppBar>
      <Toolbar /> {/* Add spacing below the AppBar */}
    </>
  );
}