# ERC20 TOKENS

This project is used to deploy 3 test ERC20 tokens to play with the **DEX** project:

-   StableCoin ($USD)
-   Wizard ($WZD)
-   Elf ($ELF)

All of them inherit from the **OpenZeppelin** ERC20 standard, only adding a constructor that mints 100 million tokens to the deployer and a mint function to create extra tokens for any wallet.

# QUICK START 🚀

Interact directly with the deployed contracts using a [Metamask](https://metamask.io/) account in any of these networks:

-   Ethereum Rinkeby Testnet:
    [StableCoin](https://rinkeby.etherscan.io/address/0x81f7f9be026841b133bfF7F96EC97c330048E38b#code),
    [Wizard](https://rinkeby.etherscan.io/address/0x15329cB93f68EF6431Ca449710eCACf32B9f0B26#code),
    [Elf](https://rinkeby.etherscan.io/address/0x2d38BFb20Ec8Cc08ba0D4fC15441Ff289EF10dCE#code)
    <br>

    > Obtain test $ETH to interact with the contracts from [Rinkeby faucet](https://rinkebyfaucet.com/)

-   Polygon Mumbai Testnet:
    [StableCoin](https://mumbai.polygonscan.com/address/0x021EdbAc1699F3c9d7550946c3bCBb3D81Dff43c#code),
    [Wizard](https://mumbai.polygonscan.com/address/0x5fEa889B4193A74F8cCf28bcc629ac32c0a83F0F#code),
    [Elf](https://mumbai.polygonscan.com/address/0xFF6649e09F9d3bB70C219738B3b017Ddd6B1B6A9#code)
    <br>
    > Obtain test $MATIC to interact with the contracts from [Polygon faucet](https://faucet.polygon.technology)

# HARDHAT PROJECT 🚀

Download the repo and play around with tests, tasks or your own scripts:

```
git clone https://github.com/fields93/erc20-tokens.git
```

## Deploy the contracts

The simplest way to play with the ERC20 is on the hardhat local network, since you will not need any wallet with funds or extra tools. The smart contracts of the ERC20 tokens `$USD`, `$WZD` and `$ELF` must be deployed in order to interact with them.

First of all, the hardhat local node has to be initialized:

```
yarn hardhat node --network localhost
```

You can deploy all the contrats at once using:

```
yarn hardhat deploy
```

> the deploy script used in this command can be found in _deploy/01-deploy-tokens.js_

## Testing the contracts

Since all contracts inherit from **OpenZeppelin**'s widely tested ERC20 contracts, only the extra methods of the contracts are tested:

-   The `Constructor`, that will mint an initial amount of tokens to the deployer address
-   Function `mint`, which will mint additional tokens to the specified address

Use the following command to test the said functions in all contracts:

```
yarn hardhat test
```

> The script used for testing is found in _test/unit/test.js_

### Solidity Coverage:

> ⌛️Coming soon⌛️

## Tasks

See all the available tasks and their description by typing:

```
yarn hardhat
```

To see the options of the task you want to use type:

```
yarn hardhat help mint-wizard
```

Two tasks have been created to interact with the contracts after their deployment:

-   `get-token` will print the amount of tokens the _user1_ has
-   `mint-token --amount tokenAmount` will mint tokenAmount of tokens for _user1_ and print its balance

    > _token_ corresponds to `usd`, `wizard`or `elf` > _tokenAmount_ is the number of tokens you want to mint.

> Task script found at _tasks/mint-balance.js_
