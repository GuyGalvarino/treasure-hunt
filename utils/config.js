(process.env.NODE_ENV === 'dev' || process.env.NODE_ENV === 'test') ? require('dotenv').config() : null

const MONGODB_URI = process.env.NODE_ENV === 'test' ? process.env.MONGODB_URI_TEST : process.env.MONGODB_URI

module.exports = { MONGODB_URI }
