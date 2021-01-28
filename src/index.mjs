import { connection } from './network.mjs'
import { lampToSol, solToLamp, sendSol, loadAccount } from './utils.mjs'

const account1 = loadAccount('./keypair.json')
const account2 = loadAccount('./keypair2.json')

if (process.env.AIRDROP === 'true') {
  await connection.requestAirdrop(account1.publicKey, solToLamp(100))
  await connection.requestAirdrop(account2.publicKey, solToLamp(100))
  process.exit(0)
}

const txSig = await sendSol({
  source: account2,
  dest: account1,
  amount: 1,
  connection,
  commitment: 'root',
})

console.log(`Account 1: ${lampToSol(await connection.getBalance(account1.publicKey))} Sol`)
console.log(`Account 2: ${lampToSol(await connection.getBalance(account2.publicKey))} Sol`)

process.exit(0)
