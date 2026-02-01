const path = require("path");

// Explicitly tells where the env file is!
require("dotenv").config({
  path: path.resolve(__dirname, "../../.env"),
})

const requiredEnv = [
  "PORT",
  "MONGO_URI",
  "JWT_SECRET",
  "JWT_REFRESH_SECRET",
]

requiredEnv.forEach((key) => {
  if (!process.env[key]) {
    throw new Error(`Missing required env variable: ${key}`)
  }
})

const env = {
  PORT: process.env.PORT,
  MONGO_URI: process.env.MONGO_URI,

  JWT_SECRET: process.env.JWT_SECRET,
  JWT_REFRESH_SECRET: process.env.JWT_REFRESH_SECRET,

  JWT_EXPIRES_IN: process.env.JWT_EXPIRES_IN || "15m",
  JWT_REFRESH_EXPIRES_IN: process.env.JWT_REFRESH_EXPIRES_IN || "7d",

  NODE_ENV: process.env.NODE_ENV || "development",
}

module.exports = env
