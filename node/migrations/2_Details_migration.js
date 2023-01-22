// Help Truffle find `TruffleTutorial.sol` in the `/contracts` directory
const Details = artifacts.require("Details");

module.exports = function(deployer) {
  // Command Truffle to deploy the Smart Contract
  deployer.deploy(Details);
}; 