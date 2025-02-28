import { Button, Typography, Box, Grid, Paper } from "@mui/material";
import React, { useContext, useState } from "react";
import { useLocation } from "react-router-dom";
import InputField from "../Components/Form/InputField";
import { ErrorMessage } from "../Components/Form/ErrorMessage";
import { TransactionContext } from "../context/TransactionContext";
import { useEffect } from "react";
import { serverLink, isFaceRecognitionEnable } from "../Data/Variables";
import { ObjectGroupBy } from "../Data/Methods";
import axios from "axios";

const Login = () => {
  const location = useLocation();
  const data = location.state.info;
  const { connectWallet, sendTransaction, getAllTransactions,checkDuplicateVote } =
    useContext(TransactionContext);
  const [election, setElection] = useState({});

  useEffect(() => {
    connectWallet();

    async function getData() {
      console.log(data);
      let link = serverLink + "election/" + data.election_id;
      let res = await axios.get(link);
      let election = res.data;
      setElection(election);
    }
    getData();
  }, []);

  // const checkDuplicateVote = async (user_id) => {
  //   let transactions = await getAllTransactions();
  //   console.log(transactions,"in check");
  //   if(!transactions) return;
  //   var electionGroup = ObjectGroupBy(transactions, "election_id");
  //   console.log(electionGroup)
  //   var candidate = ObjectGroupBy(electionGroup[election._id], "user_id");
  //   console.log(candidate);
  //   if (candidate[user_id].length > 0) {
  //     alert("You already Voted");
  //     window.location.href = "/";
  //   }
  // };

//   const checkDuplicateVote = async (user_id, election_id) => {
//     try {
//       let transactions = await getAllTransactions();
//       if (!transactions) return;

//       // Group transactions by election_id
//       const electionGroup = transactions.reduce((acc, transaction) => {
//         if (!acc[transaction.election_id]) {
//           acc[transaction.election_id] = [];
//         }
//         acc[transaction.election_id].push(transaction);
//         return acc;
//       }, {});

//       // Check if the user has already voted in the specified election
//       const userVotesInElection = (electionGroup[election_id] || []).filter(
//         (transaction) => transaction.user_id === user_id
//       );

//       if (userVotesInElection.length > 0) {
//         alert("You already voted in this election");
//         window.location.href = "/";
//         return true; // Indicate that a duplicate vote was found
//       }

//       return false; // No duplicate vote found
//     } catch (error) {
//       console.log(error);
//     }
// };


  // const checkDuplicateVote = async (user_id, election_id) => {
  //   let transactions = await getAllTransactions();
  //   if(!transactions) return;
  //   let electionGroup = ObjectGroupBy(transactions, "election_id");
  
  //   if (!electionGroup[election_id]) return; // Ensure election_id exists in the transactions
  
  //   let candidate = ObjectGroupBy(electionGroup[election_id], "user_id");
  
  //   if (candidate[user_id] && candidate[user_id].length > 0) {
  //     alert("You already voted");
  //     window.location.href = "/";
  //   }
  // };
  

  const handleSubmit = async (e) => {
    e.preventDefault();
    const password = e.target.password.value;
    const username = e.target.username.value;
    const tmp = {
      username,
      password,
      election
    };
    // axios.post(serverLink + "votingEmail", { id: data.user_id });

    let check = await axios.post(serverLink + "login", tmp);
    if (check.status === 202) {
      alert(check.data);
    } 
    else if(check.status === 203){
      console.log(check.data);
      alert(check.data);
      window.location.href = "/";
    }
    else if (check.status === 201) {
      await connectWallet();
      let trans = false;
      console.log(check.data._id);
      console.log(election._id);
      // await checkDuplicateVote(check.data._id,election._id);
      trans = await sendTransaction(
        data.election_id,
        data.candidate_id,
        check.data._id
      );

      if (trans.valid) {
        window.location.href = "/";
        axios.post(serverLink + "votingEmail", { id: check.data._id });
        axios.post(serverLink+"voted",{username,election});
        alert("Thank You For the Vote");
      } else {
        alert(trans.mess);
      }
    }
  };

  return (
    <>
      <div className="content">
        <form onSubmit={handleSubmit} method="POST">
          <Paper elevation={3}>
            <Box px={3} py={2}>
              <Typography variant="h6" align="center" margin="dense">
                Enter Credentials
              </Typography>
              <Grid container pt={3} spacing={3}>
                <Grid item xs={12} sm={12}>
                  <InputField
                    label="username"
                    name="username"
                    fullWidth={true}
                    value={data.user_username}
                    id="outlined-disabled"
                    disabled={isFaceRecognitionEnable}
                  />
                  <ErrorMessage />
                </Grid>
                <Grid item xs={12} sm={12}>
                  <InputField
                    label="Election Id"
                    name="election_id"
                    fullWidth={true}
                    type="password"
                    value={data.election_id}
                    id="outlined-disabled"
                  />
                  <ErrorMessage />
                </Grid>
                <Grid item xs={12} sm={12}>
                  <InputField
                    label="Candidate Name"
                    name="candidate_name"
                    fullWidth={true}
                    value={data.candidate_username}
                    id="outlined-disabled"
                    disabled
                  />
                  <ErrorMessage />
                </Grid>
                <Grid item xs={12} sm={12}>
                  <InputField
                    label="Password"
                    name="password"
                    fullWidth={true}
                    type="password"
                    id="password"
                  />
                  <ErrorMessage />
                </Grid>
              </Grid>
              <Box mt={3}>
                <Button type="submit" variant="contained" color="primary">
                  Vote
                </Button>
              </Box>
            </Box>
          </Paper>
        </form>
      </div>
    </>
  );
};

export default Login;
