// // import React from "react";
// // import { AppBar, Toolbar, Typography } from "@mui/material";

// // const Footer = () => (
// //   <>
// //     <AppBar position="static" component="footer" color="default">
// //       <Toolbar style={{ justifyContent: "center" }}>
// //         <Typography variant="caption">©2022</Typography>
// //       </Toolbar>
// //     </AppBar>
// //   </>
// // );

// // export default Footer;

// // import * as React from "react";
// // import { Box, Typography } from "@mui/material";
// // import { Email, Phone, LocationOn } from "@mui/icons-material";

// // export default function Footer() {
// //   return (
// //     <Box
// //       component="footer"
// //       sx={{
// //         py: 3,
// //         px: 2,
// //         mt: "auto",
// //         textAlign: "center",
// //         backgroundColor: "gray",
// //         color: "#E0E0E0",
// //       }}
// //     >
// //       <Typography variant="h6" sx={{ color: "#FFD700" }}>Contact Us</Typography>
// //       <Typography variant="body1">
// //         <Email sx={{ verticalAlign: "middle", color: "#FFD700" }} /> support@evoting.com
// //       </Typography>
// //       <Typography variant="body1">
// //         <Phone sx={{ verticalAlign: "middle", color: "#FFD700" }} /> +1 (123) 456-7890
// //       </Typography>
// //       <Typography variant="body1">
// //         <LocationOn sx={{ verticalAlign: "middle", color: "#FFD700" }} /> 123 Blockchain Street, Tech City, 56789
// //       </Typography>
// //       <Typography variant="body2" sx={{ mt: 2, color: "#B0B0B0" }}>
// //         &copy; {new Date().getFullYear()} E-Voting System. All rights reserved.
// //       </Typography>
// //     </Box>
// //   );
// // }


// import React from "react";
// import "./Footer.css"; // Import the CSS file for styling

// const Footer = () => {
//   return (
    
//     <footer className="footer">
//       <div className="footer-content">
//         {/* Contact Information */}
//         <div className="footer-section">
//           <h3>Contact Us</h3>
//           <p>Email: support@blockchainvoting.com</p>
//           <p>Phone: +1 (123) 456-7890</p>
//           <p>Address: 123 Blockchain Street, Decentraland</p>
//         </div>

//         {/* Social Media Links */}
//         <div className="footer-section">
//           <h3>Follow Us</h3>
//           <div className="social-links">
//             <a
//               href="https://twitter.com/blockchainvote"
//               target="_blank"
//               rel="noopener noreferrer"
//             >
//               Twitter
//             </a>
//             <a
//               href="https://facebook.com/blockchainvote"
//               target="_blank"
//               rel="noopener noreferrer"
//             >
//               Facebook
//             </a>
//             <a
//               href="https://linkedin.com/company/blockchainvote"
//               target="_blank"
//               rel="noopener noreferrer"
//             >
//               LinkedIn
//             </a>
//           </div>
//         </div>

//         {/* Quick Links */}
//         <div className="footer-section">
//           <h3>Quick Links</h3>
//           <ul>
//             <li>
//               <a href="/about">About Us</a>
//             </li>
//             <li>
//               <a href="/faq">FAQ</a>
//             </li>
//             <li>
//               <a href="/privacy-policy">Privacy Policy</a>
//             </li>
//           </ul>
//         </div>
//       </div>

//       {/* Copyright Notice */}
//       <div className="footer-bottom">
//         <p>
//           &copy; {new Date().getFullYear()} Blockchain Voting System. All rights
//           reserved.
//         </p>
//       </div>
//     </footer>
//   );
// };

// export default Footer;


// import React from "react";
// import { AppBar, Toolbar, Typography } from "@mui/material";

// const Footer = () => (
//   <>
//     <AppBar position="static" component="footer" color="default">
//       <Toolbar style={{ justifyContent: "center" }}>
//         <Typography variant="caption">©2022</Typography>
//       </Toolbar>
//     </AppBar>
//   </>
// );

// export default Footer;

// import * as React from "react";
// import { Box, Typography } from "@mui/material";
// import { Email, Phone, LocationOn } from "@mui/icons-material";

// export default function Footer() {
//   return (
//     <Box
//       component="footer"
//       sx={{
//         py: 3,
//         px: 2,
//         mt: "auto",
//         textAlign: "center",
//         backgroundColor: "gray",
//         color: "#E0E0E0",
//       }}
//     >
//       <Typography variant="h6" sx={{ color: "#FFD700" }}>Contact Us</Typography>
//       <Typography variant="body1">
//         <Email sx={{ verticalAlign: "middle", color: "#FFD700" }} /> support@evoting.com
//       </Typography>
//       <Typography variant="body1">
//         <Phone sx={{ verticalAlign: "middle", color: "#FFD700" }} /> +1 (123) 456-7890
//       </Typography>
//       <Typography variant="body1">
//         <LocationOn sx={{ verticalAlign: "middle", color: "#FFD700" }} /> 123 Blockchain Street, Tech City, 56789
//       </Typography>
//       <Typography variant="body2" sx={{ mt: 2, color: "#B0B0B0" }}>
//         &copy; {new Date().getFullYear()} E-Voting System. All rights reserved.
//       </Typography>
//     </Box>
//   );
// }


import React from "react";
import { FaTwitter, FaFacebook, FaLinkedin } from "react-icons/fa"; // Import icons

import "./Footer.css"; // Import the CSS file for styling

const Footer = () => {
  return (
    
    <footer className="footer">
      <div className="footer-content">
        {/* Contact Information */}
        <div className="footer-section">
          <h3>Contact Us</h3>
          <p>Email: support@blockchainvoting.com</p>
          <p>Phone: +1 (123) 456-7890</p>
          <p>Address: 123 Blockchain Street, Decentraland</p>
        </div>

        {/* Social Media Links */}
        <div className="footer-section">
          <h3>Follow Us</h3>
          <div className="social-links">
            <a
              href="https://twitter.com/blockchainvote"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Twitter"
            >
               <FaTwitter className="social-icon" />
            </a>
            <a
              href="https://facebook.com/blockchainvote"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
            >
              <FaFacebook className="social-icon" />
            </a>
            <a
              href="https://linkedin.com/company/blockchainvote"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
            >
              <FaLinkedin className="social-icon" />
            </a>
          </div>
        </div>

        {/* Quick Links */}
        <div className="footer-section">
          <h3>Quick Links</h3>
          <ul>
            <li>
              <a href="/about">About Us</a>
            </li>
            <li>
              <a href="/faq">FAQ</a>
            </li>
            <li>
              <a href="/privacy-policy">Privacy Policy</a>
            </li>
          </ul>
        </div>
      </div>

      {/* Copyright Notice */}
      <div className="footer-bottom">
        <p>
          &copy; {new Date().getFullYear()} Blockchain Voting System. All rights
          reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;