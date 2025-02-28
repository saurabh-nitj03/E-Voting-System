// import React from "react";
// import ContentHeader from "../../../Components/ContentHeader";
// import { useEffect } from "react";
// import axios from "axios";
// import { useState } from "react";
// import DashboardCard from "../../../Components/DashboardCard";

// const ViewDashboard = () => {
//   const [users, setUsers] = useState(0);
//   const [candidates, setCandidates] = useState(0);
//   const [elections, setElections] = useState(0);

//   useEffect(() => {
//     async function getUsers() {
//       let res = await axios.get("http://localhost:1322/api/auth/users");
//       let users = res.data;
//       res = null;
//       setUsers(users.length);
//       res = await axios.get("http://localhost:1322/api/auth/candidates");
//       let candidates = res.data;
//       setCandidates(candidates.length);
//       res = await axios.get("http://localhost:1322/api/auth/elections");
//       let elections = res.data;
//       setElections(elections.length);
//     }
//     getUsers();
//   }, []);

//   return (
//     <div className="admin__content">
//       <ContentHeader />
//       <div
//         style={{
//           display: "flex",
//           width: "100%",
//           gap: "15px",
//           justifyContent: "space-between",
//         }}
//       >
//         <DashboardCard title="Users" data={users} />
//         <DashboardCard title="Candidates" data={candidates} />
//         <DashboardCard title="Elections" data={elections} />
//       </div>
//     </div>
//   );
// };

// export default ViewDashboard;
import React, { useEffect, useState } from "react";
import ContentHeader from "../../../Components/ContentHeader";
import axios from "axios";
import DashboardCard from "../../../Components/DashboardCard";
import { Box, Grid, Typography, useTheme } from "@mui/material";
import { motion } from "framer-motion"; // For animations

const ViewDashboard = () => {
  const [users, setUsers] = useState(0);
  const [candidates, setCandidates] = useState(0);
  const [elections, setElections] = useState(0);
  const theme = useTheme();

  useEffect(() => {
    async function getUsers() {
      try {
        let res = await axios.get("http://localhost:1322/api/auth/users");
        let users = res.data;
        setUsers(users.length);

        res = await axios.get("http://localhost:1322/api/auth/candidates");
        let candidates = res.data;
        setCandidates(candidates.length);

        res = await axios.get("http://localhost:1322/api/auth/elections");
        let elections = res.data;
        setElections(elections.length);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    }
    getUsers();
  }, []);

  return (
    <Box className="admin__content" sx={{ p: 3 }}>
      <ContentHeader />
      <Typography variant="h4" sx={{ mb: 4, fontWeight: "bold", color: theme.palette.primary.main }}>
        Dashboard Overview
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6} md={4}>
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <DashboardCard
              title="Users"
              data={users}
              backgroundColor={theme.palette.primary.main}
            />
          </motion.div>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <DashboardCard
              title="Candidates"
              data={candidates}
              backgroundColor={theme.palette.secondary.main}
            />
          </motion.div>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <DashboardCard
              title="Elections"
              data={elections}
              backgroundColor={theme.palette.success.main}
            />
          </motion.div>
        </Grid>
      </Grid>
    </Box>
  );
};

export default ViewDashboard;