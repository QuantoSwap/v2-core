require("@nomicfoundation/hardhat-toolbox");
require('@nomiclabs/hardhat-truffle5');
require('@openzeppelin/hardhat-upgrades');

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.5.16",
  networks: {
    eth: {
      url: 'https://rpc.mevblocker.io',
      accounts: [],
      blockGasLimit: '1000000000'
    }
  },
  etherscan: {
    apiKey: ''
  }
};
