# Blockchain game

Build a play to earn blockchain runner game that rewards tokens and NFTs

## Technology Stack & Dependencies

- Solidity (Writing Smart Contract)
- HTML, Css, Javascript For the website
- [Infura](https://infura.io/) Account on Infura as a node provider
- [NodeJS](https://nodejs.org/en/) To install Dependencies
- [Hardhat](https://hardhat.org/) Ethereum development environment
- [Ethers.js](https://docs.ethers.io/v5/) To interact with the blockchain

### 1. Clone/Download the Repository

### 2. Install Dependencies:

```
$ cd contract
```

```
$ npm install or
$ yarn
```

### 3. Deploy NFT collection to Goerli testnet

- Setup your env file with both private key and goerli RPC

```
$ npx hardhat run scripts/deployNFTCollection.js --network goerli
```

### 4. Deploy Run token to Goerli testnet

- Setup your env file with both private key and goerli RPC

```
$ npx hardhat run scripts/deployRunToken.js --network goerli
```

### 5. Provide the smart contract addresses in blockchain.js file

Images in the game are taken from https://www.flaticon.com/
