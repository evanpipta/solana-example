### Usage

**Prerequisites:**

- Have solana installed globally
- Node 15 installed (preferably with nvm)

**Steps to run:**

1. First as always: `npm install`
2. In a separate terminal: `solana-test-validator`
3. Back in the original terminal, run his to fill the accounts first: `npm run airdrop`
4. Then to transfer, run: `npm start`

The program should run until the transaction achieves "root" commitment, and then output the resulting balances
