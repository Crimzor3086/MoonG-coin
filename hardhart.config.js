require("@nomicfoundation/hardhat-toolbox");
require("dotenv").config();
const networks = require("./config/networks.json");

module.exports = {
  solidity: "0.8.20",
  networks: {
    hardhat: {},
    "0gTestnet": {
      url: networks["0gTestnet"].url,
      chainId: networks["0gTestnet"].chainId,
      accounts: [process.env.PRIVATE_KEY]
    },
    "0gMainnet": {
      url: networks["0gMainnet"].url,
      chainId: networks["0gMainnet"].chainId,
      accounts: [process.env.PRIVATE_KEY]
    }
  }
};
