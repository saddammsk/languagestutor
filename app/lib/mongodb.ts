import { MongoClient } from 'mongodb'

if (!process.env.MONGODB_URI) {
  throw new Error('⚠️ MONGODB_URI is not defined in .env.local')
}

const uri = process.env.MONGODB_URI

const isDev = process.env.NODE_ENV !== 'production'

const options = isDev
  ? {
      tls: true,
      tlsAllowInvalidCertificates: true,
      tlsAllowInvalidHostnames: true,
    }
  : {}

let client: MongoClient
let clientPromise: Promise<MongoClient>

declare global {
  var _mongoClientPromise: Promise<MongoClient>
}

if (!global._mongoClientPromise) {
  client = new MongoClient(uri, options)
  global._mongoClientPromise = client.connect()
}
clientPromise = global._mongoClientPromise

export default clientPromise
