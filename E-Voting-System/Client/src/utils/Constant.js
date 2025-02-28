import abi from "./Transaction.json";

export const contractABI = abi.abi;

// export const contractAddress = "0x0116686E2291dbd5e317F47faDBFb43B599786Ef"; // Enter your ContractAddress here.
export const contractAddress = "0x5FbDB2315678afecb367f032d93F642f64180aa3"; // Enter your ContractAddress here.
// export const contractAddress = "0x1147C7A5bCeFC7164e0D9850A855FD16f751e7E2"; // Enter your ContractAddress here.
// export const contractAddress = "0x0116686E2291dbd5e317F47faDBFb43B599786Ef"; // Enter your ContractAddress here.
// This variable stores the address of the deployed smart contract. If you have deployed your own contract, replace the empty string with the address of your contract.

// If you can't find the `contractAddress` in the compiled `Transaction.json` file,
// you can manually locate the address by finding the appropriate piece of code in the file.
// The address should be located under the `"networks"` object, which lists the deployed addresses for different networks.
// For example, if you are using the default Ganache network, the `"networks"` object will contain an entry for network ID `5777`.
// Find the `"address"` field under this entry, and copy the address value into the `contractAddress` variable.
// 0x5FbDB2315678afecb367f032d93F642f64180aa3
