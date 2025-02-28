import React, { useState } from "react";
import { ethers } from "ethers";
import { contractABI, contractAddress } from "../utils/Constant";

export const TransactionContext = React.createContext();

const { ethereum } = window;

export const TransactionProvider = ({ children }) => {
  const [currentAccount, setCurrentAccount] = useState("");
  const [transactionCount, setTransactionCount] = useState(
    localStorage.getItem("transactionCount")
  );
  const [transactions, setTransactions] = useState([]);

  const createEthereumContract = () => {
    const provider = new ethers.providers.Web3Provider(ethereum);
    const signer = provider.getSigner();
    const transactionContract = new ethers.Contract(
      contractAddress,
      contractABI,
      signer
    );

    return transactionContract;
  };

  const connectWallet = async () => {
    try {
      if (!ethereum) {
        alert("Please install MetaMask.");
        window.location.href = "/";
        return;
      }

      const accounts = await ethereum.request({
        method: "eth_requestAccounts",
      });

      setCurrentAccount(accounts[0]);
    } catch (error) {
      console.log(error);

      throw new Error("No ethereum object");
    }
  };

  const sendTransaction = async (election_id, candidate_id, user_id) => {
    try {
      if (ethereum) {
        const transactionsContract = createEthereumContract();
        console.log(transactionsContract);
        const transactionHash = await transactionsContract.addToBlockchain(
          currentAccount,
          user_id,
          election_id,
          candidate_id
        );

        console.log(`Loading - ${transactionHash.hash}`);
        await transactionHash.wait();
        console.log(`Success - ${transactionHash.hash}`);

        // console.log("nnjvcsk");
        // // const transactionsCount = await transactionsContract.getTransactionCount();
        // console.log("ncos");
        // console.log(transactionsCount);

        return { valid: true, mess: "Transaction Successfull" };
      } else {
        console.log("No ethereum object");
        return { valid: false, mess: "No ethereum object" };
      }
    } catch (error) {
      console.log(error);
      if (error.code === "ACTION_REJECTED") {
        return { valid: false, mess: "User Rejected Transaction" };
      } else {
        return { valid: false, mess: "Internal Send Transaction Error" };
      }
    }
  };

  // const getAllTransactions = async () => {
  //   try {
  //     if (ethereum) {
  //       const transactionsContract = createEthereumContract();
  //       console.log("Before getting transaction");
  //       const availableTransactions =
  //         await transactionsContract.getAllTransaction();
  //       console.log(availableTransactions, "in context");
  //       const structuredTransactions = availableTransactions.map(
  //         (transaction) => ({
  //           addressFrom: transaction.from,
  //           timestamp: new Date(
  //             transaction.timestamp.toNumber() * 1000
  //           ).toLocaleString(),
  //           election_id: transaction.election_id,
  //           candidate_id: transaction.candidate_id,
  //           user_id: transaction.user_id,
  //         })
  //       );

  //       setTransactions(structuredTransactions);
  //       return structuredTransactions;
  //     } else {
  //       console.log("Ethereum is not present");
  //     }
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };
  const getAllTransactions = async () => {
    try {
      if (!window.ethereum) {
        console.log("Ethereum is not present");
        return;
      }
  
      const transactionsContract = createEthereumContract();
      console.log(transactionsContract);
      console.log("Fetching transactions from blockchain...");
      const availableTransactions = await transactionsContract.getAllTransaction();
  
      console.log("Raw transactions:", availableTransactions);
  
      const structuredTransactions = availableTransactions.map((transaction) => ({
        addressFrom: transaction.from,
        timestamp: new Date(transaction.timestamp.toNumber() * 1000).toLocaleString(),
        election_id: transaction.election_id,
        candidate_id: transaction.candidate_id,
        user_id: transaction.user_id,
      }));
  
      console.log("Formatted Transactions:", structuredTransactions);
      setTransactions(structuredTransactions);
      return structuredTransactions;
    } catch (error) {
      console.error("Error fetching transactions:", error);
    }
  };
  const checkDuplicateVote = async (user_id, election_id) => {
    try {
      if (!ethereum) {
        alert("Please install MetaMask.");
        window.location.href = "/";
        return;
      }

      const transactionsContract = createEthereumContract();
      console.log(transactionsContract);
      const hasVoted = await transactionsContract.hasUserVoted(
        String(election_id),
        String(user_id),
        { gasLimit: 300000 }
      );
      console.log(hasVoted, "Has user voted?");

      if (hasVoted) {
        alert("You have already voted in this election.");
        window.location.href = "/";
      }
    } catch (error) {
      console.error("Error checking duplicate vote:", error);
      alert("An error occurred while checking your vote status.");
    }
  };

  return (
    <>
      <TransactionContext.Provider
        value={{
          connectWallet,
          currentAccount,
          sendTransaction,
          getAllTransactions,
          checkDuplicateVote,
          transactions,
        }}
      >
        {children}
      </TransactionContext.Provider>
    </>
  );
};
