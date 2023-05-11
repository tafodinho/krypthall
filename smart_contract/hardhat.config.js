// https://eth-sepolia.g.alchemy.com/v2/bW3EJvagtUls3uEYqfIJB74QMm1dJJjB
require("@nomiclabs/hardhat-waffle");

module.exports = {
  solidity: "0.8.0",
  networks: {
    sepolia: {
      url: "https://eth-sepolia.g.alchemy.com/v2/bW3EJvagtUls3uEYqfIJB74QMm1dJJjB",
      accounts: [
        "944f004081bd72ae04eea830f5fa65d5a460db1e8debcecd5e5eede2eb324315",
      ],
    },
  },
};
