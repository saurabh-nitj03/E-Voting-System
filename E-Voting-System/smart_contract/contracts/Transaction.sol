// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.0;

contract Transaction {
    uint256 public transactionCounter;

    event Transfer(address from, address receiver, string user_id, string election_id, string candidate_id, uint timestamp);

    struct TransactionStruct {
        address from;
        address receiver;
        string user_id;
        string election_id;
        string candidate_id;
        uint timestamp;
    }

    mapping(address => bool) public voted; // Tracks if an address has voted
    mapping(string => mapping(string => bool)) public userVotedInElection; // Tracks if a user has voted in a specific election

    TransactionStruct[] public transactions;

    function addToBlockchain(address payable receiver, string memory user_id, string memory election_id, string memory candidate_id) public {
        require(!userVotedInElection[election_id][user_id], "You have already voted in this election");
        transactionCounter += 1;
        transactions.push(TransactionStruct(msg.sender, receiver, user_id, election_id, candidate_id, block.timestamp));
        userVotedInElection[election_id][user_id] = true; // Mark user as voted in this election
        voted[msg.sender] = true;

        emit Transfer(msg.sender, receiver, user_id, election_id, candidate_id, block.timestamp);
    }

    function hasUserVoted(string memory election_id, string memory user_id) public view returns (bool) {
        return userVotedInElection[election_id][user_id];
    }

    function getAllTransaction() public view returns (TransactionStruct[] memory) {
        return transactions;
    }

    function getTransactionCount() public view returns (uint256) {
        return transactionCounter;
    }
}


