# Web3 Auction DApp - README

Welcome to the **Web3 Auction DApp** project repository! This decentralized application (DApp) leverages blockchain technology to implement an auction platform on the Ethereum network. Participants can place bids on items of interest, and the highest bidder at the end of the auction wins the item.

## Table of Contents

- [Overview](#overview)
- [Features](#features)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
- [Usage](#usage)
- [Testing](#testing)
- [Frontend](#frontend)
- [Contributing](#contributing)

## Overview

The **Final-Project** provides a user-friendly interface to participate in Ethereum-based auctions. This project ensures transparency and trust in the auction process through the use of smart contracts. Users can place bids, monitor ongoing auctions, and claim their winnings seamlessly.

## Features

- Mint: The mint instruction is responsible for creating NFT. This process is essential for introducing new tokens into the system. Based on the inputs we have (regarding color, description, and rarity), we will create gem metadata and mint our NFT.

- Transfer: The transfer instruction allows tokens or NFTs to be sent from one account to another.

- Burn: The burn instruction is used to destroy tokens or NFTs, removing them from circulation.


## Getting Started

Follow these steps to set up the project locally and start participating in this event.

### Prerequisites

1. Node.js: Ensure Node.js is installed. Download it from [nodejs.org](https://nodejs.org/).

### Installation

1. Clone the repository:

```bash
  git clone https://github.com/vivekjami/Solana-Bootcamp-Final-Project.git
```

2. Navigate to the project directory:

```bash
  cd Solana-Bootcamp-Final-Project
```

3. Install required npm packages:

```bash
 npm install
```

## Usage

1. Start the development server:

```bash
 npm start
```

2. Open your web browser and navigate to `http://localhost:3000` to access the DApp.

3. Connect your Ethereum wallet (e.g., MetaMask) to the DApp.

4. Browse ongoing auctions, place bids, and monitor your auction activity.


## Testing

Smart contract tests are located in the `test` folder. These tests ensure the correct functioning of the smart contract. To run the tests, follow these steps:

1. Open a terminal in the project directory.
2. Run the following command to execute the tests:

```bash
truffle test
```

This command will initiate the smart contract tests and display the results in the terminal.

![image](https://github.com/vivekjami/Solana-Bootcamp-Final-Project/assets/140731987/8dc52183-626c-4f39-9408-a37ba496a345)

## Frontend

The DApp frontend is built using modern web technologies including React.js. It provides an intuitive and interactive user interface for auction participation.

- **React.js**: Powers the DApp's user interface.
- **Web3.js**: The Ethereum JavaScript API for smart contract interaction.
- **MetaMask**: A popular Ethereum wallet browser extension for secure transactions.

## Contributing

Contributions to this project are welcome! To contribute:

1. Fork the repository.
2. Create a new branch for your feature/bug fix.
3. Make changes and test thoroughly.
4. Commit with clear and concise messages.
5. Push changes to your fork.
6. Submit a pull request describing your changes.



---

Thank you for your interest in the Web3 Auction DApp project! For questions or suggestions, reach out to us or open an issue on [GitHub](https://github.com/vivekjami/Solana-Bootcamp-Final-Project).  🚀
