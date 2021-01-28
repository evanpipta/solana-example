### Usage

**Prerequisites:**

- Have solana installed globally
- Node 15 installed (preferably with nvm)

**Steps to run:**

1. First as always: `npm install`
2. Create a `.env` file with the following line in it: `CONNECTION_ENDPOINT='http://localhost:8899/'`
3. In a separate terminal run: `solana-test-validator`
4. Back in the original terminal, run this to fill the accounts first: `npm run airdrop`
5. Then to transfer, run: `npm start`

The program should run until the transaction achieves "root" commitment, and then output the resulting balances
