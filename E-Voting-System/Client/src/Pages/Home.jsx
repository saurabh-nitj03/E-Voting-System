// import * as React from "react";
// import CssBaseline from "@mui/material/CssBaseline";
// import { createTheme, ThemeProvider } from "@mui/material/styles";
// import { Box } from "@mui/material";
// import Voting from "../"

// const theme = createTheme();

// export default function Home() {
//   return (
//     <ThemeProvider theme={theme}>
//       <CssBaseline />
//       <main>
//         <Box
//           style={{
//             display: "flex",
//             alignItems: "center",
//             justifyContent: "center",
//             minHeight: "calc(100vh - 128px)",
//           }}
//         >
//           <img
//             style={{ width: "100vw" }}
//             // src="https://media.kasperskydaily.com/wp-content/uploads/sites/92/2020/10/16044143/M187_Digital-voting-header.png"
//             src="data:image/jpeg;base64,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"
//             alt="random"
//           />
//         </Box>
//       </main>
//     </ThemeProvider>
//   );
// }
// import * as React from "react";
// import CssBaseline from "@mui/material/CssBaseline";
// import { createTheme, ThemeProvider } from "@mui/material/styles";
// import { Box, Button, Typography } from "@mui/material";
// import { Link } from "react-router-dom";

// const theme = createTheme();

// export default function Home() {
//   return (
//     <ThemeProvider theme={theme}>
//       <CssBaseline />
//       <main>
//         <Box
//           sx={{
//             display: "flex",
//             flexDirection: "column",
//             alignItems: "center",
//             justifyContent: "center",
//             minHeight: "calc(100vh - 128px)",
//             gap: 2,
//           }}
//         >
//           <Typography variant="h4" gutterBottom>
//             Welcome to the Online Voting System
//           </Typography>
//           <Box sx={{ display: "flex", gap: 2 }}>
//             <Button
//               component={Link}
//               to="/register"
//               variant="contained"
//               color="primary"
//             >
//               Register
//             </Button>
//             {/* <Button
//               component={Link}
//               to="/login"
//               variant="outlined"
//               color="primary"
//             >
//               Login
//             </Button> */}
//           </Box>
//         </Box>
//       </main>
//     </ThemeProvider>
//   );
// }

// import * as React from "react";
// import CssBaseline from "@mui/material/CssBaseline";
// import { createTheme, ThemeProvider } from "@mui/material/styles";
// import { Typography, Box, Button, Container, Paper, Grid, Card, CardContent } from "@mui/material";
// import { Link } from "react-router-dom";

// const theme = createTheme({
//   palette: {
//     primary: {
//       main: "#1976d2",
//     },
//     secondary: {
//       main: "#ff9800",
//     },
//   },
//   typography: {
//     h4: {
//       fontWeight: 600,
//     },
//     body1: {
//       fontSize: "1.1rem",
//     },
//   },
// });

// export default function Home() {
//   return (
//     <ThemeProvider theme={theme}>
//       <CssBaseline />
     
      
//       <main>
//         <Container>
//           <Box
//             sx={{
//               display: "flex",
//               flexDirection: "column",
//               alignItems: "center",
//               justifyContent: "center",
//               minHeight: "60vh",
//               textAlign: "center",
//               padding: 4,
//               backgroundColor: "#f5f5f5",
//               borderRadius: 2,
//             }}
//           >
//             <Typography variant="h4" gutterBottom>
//               Welcome to the Blockchain-based Online Voting System
//             </Typography>
//             <Typography variant="body1" paragraph>
//               Our platform ensures secure, transparent, and tamper-proof elections using blockchain technology.
//             </Typography>
//             <Button component={Link} to="/register" variant="contained" color="primary" sx={{ mt: 2 }}>
//               Register to Vote
//             </Button>
//           </Box>

//           {/* About Section */}
//           <Grid container spacing={3} sx={{ mt: 4 }}>
//             <Grid item xs={12} md={6}>
//               <Card elevation={4}>
//                 <CardContent>
//                   <Typography variant="h5" gutterBottom>Why Blockchain Voting?</Typography>
//                   <Typography variant="body1">
//                     Blockchain technology guarantees security and transparency, eliminating fraud and ensuring each vote counts.
//                   </Typography>
//                 </CardContent>
//               </Card>
//             </Grid>
//             <Grid item xs={12} md={6}>
//               <Card elevation={4}>
//                 <CardContent>
//                   <Typography variant="h5" gutterBottom>Secure & Anonymous</Typography>
//                   <Typography variant="body1">
//                     Your vote remains anonymous, encrypted, and securely stored on the blockchain, preventing tampering or alteration.
//                   </Typography>
//                 </CardContent>
//               </Card>
//             </Grid>
//           </Grid>

//           {/* How to Vote Section */}
//           <Paper elevation={3} sx={{ padding: 3, marginTop: 4, backgroundColor: "#e3f2fd" }}>
//             <Typography variant="h5" gutterBottom>How to Vote?</Typography>
//             <Typography variant="body1" paragraph>
//               1. Register on the platform with required credentials.
//             </Typography>
//             <Typography variant="body1" paragraph>
//               2. Check for the elections happening.
//             </Typography>
//             <Typography variant="body1" paragraph>
//               3. Choose your preferred candidate and cast your vote.
//             </Typography>
//             <Typography variant="body1" paragraph>
//               4. Your vote is recorded securely on the blockchain and is immutable.
//             </Typography>
//           </Paper>
//         </Container>
        
//       </main>

//     </ThemeProvider>
//   );
// }

import * as React from "react";
import CssBaseline from "@mui/material/CssBaseline";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { Typography, Box, Button, Container, Paper, Grid, Card, CardContent } from "@mui/material";
import { Link } from "react-router-dom";

const theme = createTheme({
  palette: {
    primary: {
      main: "#1976d2",
    },
    secondary: {
      main: "#ff9800",
    },
  },
  typography: {
    h4: {
      fontWeight: 600,
    },
    body1: {
      fontSize: "1.1rem",
    },
  },
});

export default function Home() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <main>
        <Container>
          {/* Split into Two Columns */}
          <Grid container spacing={4} sx={{ mt: 4 }}>
            {/* Welcome Content (Left Side) */}
            <Grid item xs={12} md={8}>
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "flex-start",
                  justifyContent: "center",
                  height: "100%",
                  textAlign: "left",
                }}
              >
                <Typography variant="h4" gutterBottom>
                  Welcome to the Blockchain-based Online Voting System
                </Typography>
                <Typography variant="body1" paragraph>
                  Our platform leverages cutting-edge blockchain technology to ensure secure, transparent, and tamper-proof elections. Whether you're a voter, candidate, or election administrator, we provide a seamless and trustworthy voting experience.
                </Typography>
                <Typography variant="body1" paragraph>
                  <strong>Why choose us?</strong>
                </Typography>
                <Typography variant="body1" component="ul" paragraph>
                  <li>End-to-end encryption for maximum security.</li>
                  <li>Decentralized voting to eliminate fraud.</li>
                  <li>Real-time results with complete transparency.</li>
                  <li>User-friendly interface for easy voting.</li>
                </Typography>
                <Typography variant="body1" paragraph>
                  Join us in revolutionizing the way elections are conducted. Your vote matters, and we ensure it counts!
                </Typography>
              </Box>
            </Grid>

            {/* Register Section (Right Side) */}
            <Grid item xs={12} md={4}>
              <Paper
                elevation={4}
                sx={{
                  padding: 3,
                  backgroundColor: "#e3f2fd",
                  textAlign: "center",
                  borderRadius: 2,
                }}
              >
                <Typography variant="h6" gutterBottom>
                  Ready to Vote?
                </Typography>
                <Typography variant="body2" paragraph>
                  Register now to participate in secure and transparent elections.
                </Typography>
                <Button
                  component={Link}
                  to="/register"
                  variant="contained"
                  color="primary"
                  fullWidth
                  sx={{ mt: 2 }}
                >
                  Register to Vote
                </Button>
                <Typography variant="body2" sx={{ mt: 2 }}>
                  Already registered?{" "}
                  <Link to="/election" style={{ color: "#1976d2", textDecoration: "none" }}>
                    go to election
                  </Link>
                </Typography>
              </Paper>
            </Grid>
          </Grid>

          {/* About Section */}
          <Grid container spacing={3} sx={{ mt: 4 }}>
            <Grid item xs={12} md={6}>
              <Card elevation={4}>
                <CardContent>
                  <Typography variant="h5" gutterBottom>
                    Why Blockchain Voting?
                  </Typography>
                  <Typography variant="body1">
                    Blockchain technology guarantees security and transparency, eliminating fraud and ensuring each vote counts.
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={12} md={6}>
              <Card elevation={4}>
                <CardContent>
                  <Typography variant="h5" gutterBottom>
                    Secure & Anonymous
                  </Typography>
                  <Typography variant="body1">
                    Your vote remains anonymous, encrypted, and securely stored on the blockchain, preventing tampering or alteration.
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          </Grid>

          {/* How to Vote Section */}
          <Paper elevation={3} sx={{ padding: 3, marginTop: 4, marginBottom:4, backgroundColor: "#e3f2fd", borderRadius: 2 }}>
            <Typography variant="h5" gutterBottom>
              How to Vote?
            </Typography>
            <Typography variant="body1" paragraph>
              1. Register on the platform with required credentials.
            </Typography>
            <Typography variant="body1" paragraph>
              2. Check for the elections happening.
            </Typography>
            <Typography variant="body1" paragraph>
              3. Choose your preferred candidate and cast your vote.
            </Typography>
            <Typography variant="body1" paragraph>
              4. Your vote is recorded securely on the blockchain and is immutable.
            </Typography>
          </Paper>
        </Container>
            <hr></hr>
      </main>
    </ThemeProvider>
  );
}