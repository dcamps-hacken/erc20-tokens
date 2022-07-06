const networkConfig = {
    31337: {
        name: "localhost",
    },
    4: {
        name: "rinkeby",
    },
    80001: {
        name: "mumbai",
    },
    43113: {
        name: "fuji",
    },
    4002: {
        name: "fantom-testnet",
    },
}

const developmentChains = ["hardhat", "localhost"]

module.exports = {
    networkConfig,
    developmentChains,
}
