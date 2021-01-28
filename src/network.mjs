import dotenv from 'dotenv'
dotenv.config()

import { Connection } from '@solana/web3.js'

const connection = new Connection(process.env.CONNECTION_ENDPOINT)

export { connection }
