import { connection } from './network.mjs'
import { lampToSol, sendSol, loadAccount } from './utils.mjs'

const account1 = loadAccount('./keypair.json')
const account2 = loadAccount('./keypair2.json')

const txSig = await sendSol({
  source: account1,
  dest: account2,
  amount: 1,
  connection,
  commitment: 'root',
})

console.log(`${lampToSol(await connection.getBalance(account1.publicKey))} Sol`)
console.log(`${lampToSol(await connection.getBalance(account2.publicKey))} Sol`)

process.exit(0)
