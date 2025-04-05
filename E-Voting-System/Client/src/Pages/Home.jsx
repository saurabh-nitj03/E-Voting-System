

import * as React from "react";
import CssBaseline from "@mui/material/CssBaseline";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { Typography, Box, Button, Container, Paper, Grid, Card, CardContent } from "@mui/material";
import { Link } from "react-router-dom";

const theme = createTheme({
  palette: {
    primary: { main: "#0a192f" },
    secondary: { main: "#1f4068" },
    background: { default: "#010a19", paper: "#162447" },
    text: { primary: "#ffffff", secondary: "#a0c1d1" },
  },
  typography: {
    h4: { fontWeight: 900, color: "#00a8cc", fontFamily: "Oswald, sans-serif" },
    h5: { fontWeight: 700, color: "#00a8cc", fontFamily: "Montserrat, sans-serif" },
    body1: { fontSize: "1.2rem", color: "#1f4068", fontFamily: "Roboto, sans-serif" },
  },
});

const features = [
  { title: "Decentralized Voting", description: "Vote from anywhere with security and transparency." },
  { title: "Immutable Records", description: "Every vote is permanently recorded and cannot be altered." },
  { title: "Anonymity & Privacy", description: "Ensuring voter identity remains confidential while votes are securely counted." },
  { title: "Real-Time Results", description: "Votes are counted instantly, and results are updated in real-time." },
  { title: "Multi-Level Authentication", description: "Extra layers of security verify voter identity and prevent fraud." },
  { title: "Tamper-Proof Logs", description: "All activities are logged securely, ensuring transparency and accountability." },
];

const FeatureCard = ({ title, description }) => (
  <Grid item xs={12} sm={6} md={4}>
    <Card elevation={6} sx={{ backgroundColor: "#e3f2fd", color: "#0a192f", borderRadius: "10px", padding: "20px", height: "100%", boxShadow: "0 4px 10px rgba(0, 0, 0, 0.3)" }}>
      <CardContent sx={{ display: "flex", flexDirection: "column", justifyContent: "space-between", height: "100%" }}>
        <Typography variant="h5">{title}</Typography>
        <Typography variant="body1">{description}</Typography>
      </CardContent>
    </Card>
  </Grid>
);

export default function Home() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Box sx={{
        background: "linear-gradient(-45deg, #e3f2fd, #bbdefb, #90caf9, #64b5f6)",
        backgroundSize: "400% 400%",
        animation: "gradientBG 10s ease infinite",
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center",
        px: 3,
      }}>
        <Container>
          <Paper elevation={10} sx={{ p: 5, borderRadius: "10px", backgroundColor: "rgba(255, 255, 255, 0.9)", width: { xs: "90%", sm: "80%", md: "70%" }, margin: "auto", boxShadow: "0 0 20px rgba(0, 0, 0, 0.3)" }}>
            <Typography variant="h4" gutterBottom sx={{ animation: "fadeIn 2s ease-in-out" }}>
              Secure Blockchain-Based Voting System
            </Typography>
            <Typography variant="body1" paragraph>
              Experience the future of voting with our cutting-edge blockchain technology ensuring security, transparency, and integrity.
            </Typography>
            <Button component={Link} to="/register" variant="contained" color="secondary" sx={{
              mt: 2,
              px: 4,
              py: 1.5,
              borderRadius: "10px",
              textShadow: "0 0 10px #ffffff, 0 0 20px #ffffff, 0 0 30px #00a8cc",
              animation: "glow 1.5s infinite alternate"
            }}>
              Register to Vote
            </Button>
          </Paper>

          <Box sx={{ mt: 4, p: 3, backgroundColor: "rgba(255, 255, 255, 0.9)", borderRadius: "10px", boxShadow: "0 0 25px rgba(0, 0, 0, 0.3)", textAlign: "center" }}>
            <Grid container spacing={3} justifyContent="center" alignItems="stretch">
              {features.map((feature, index) => (
                <FeatureCard key={index} title={feature.title} description={feature.description} />
              ))}
            </Grid>
          </Box>
        </Container>
      </Box>
      <style>
        {`
          @keyframes glow {
            0% { text-shadow: 0 0 10px #ffffff, 0 0 20px #ffffff, 0 0 30px #00a8cc; }
            100% { text-shadow: 0 0 20px #ffffff, 0 0 30px #ffffff, 0 0 40px #00a8cc; }
          }
          @keyframes fadeIn {
            0% { opacity: 0; transform: translateY(-10px); }
            100% { opacity: 1; transform: translateY(0); }
          }
        `}
      </style>
    </ThemeProvider>
  );
}