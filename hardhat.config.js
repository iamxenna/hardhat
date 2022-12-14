require("@nomicfoundation/hardhat-toolbox");

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.17",
  defaultNetwork: "hardhat",
  networks: {
    hardhat: {
      blockGasLimit: 30000000000,
      allowUnlimitedContractSize: true
    }
  },
  settings: {
    optimizer: {
      enabled: true,
      runs: 200
    }
  },
};
