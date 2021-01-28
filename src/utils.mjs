import fs from 'fs'
import { Account, SystemProgram, Transaction, sendAndConfirmTransaction } from '@solana/web3.js'

const solToLamp = (n) => Math.floor(n * 1000000000)
const lampToSol = (n) => n / 1000000000

// load an account from a json file on disk
const loadAccount = (filename) => {
  const jsonData = JSON.parse(fs.readFileSync(filename))
  const sk = new Uint8Array(jsonData.secretKey)
  const account = new Account(sk)
  return account
}

// save an account to a json file on disk
const saveAccount = (account, filename) => {
  const data = JSON.stringify({
    publicKey: Array.from(account._keypair.publicKey),
    secretKey: Array.from(account._keypair.secretKey),
  })

  fs.writeFileSync(filename, data)
}

// Send Sols from a source account to destination account - in one async function call
const sendSol = async ({ connection, source, dest, amount, commitment = 'root' }) => {
  const tx = new Transaction({
    feePayer: source.publicKey,
    recentBlockhash: (await connection.getRecentBlockhash()).blockhash,
  })

  tx.add(
    SystemProgram.transfer({
      fromPubkey: source.publicKey,
      toPubkey: dest.publicKey,
      lamports: solToLamp(amount),
    })
  )

  tx.sign(source)

  return await sendAndConfirmTransaction(connection, tx, [source], {
    commitment,
  })
}

export { solToLamp, lampToSol, loadAccount, saveAccount, sendSol }
