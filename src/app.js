const express = require("express")
const morgan = require("morgan")
const cors = require("cors")

const routes = require("./route")
const errorHandler = require("./middlewares/error.middleware")

const app = express()

// Middleware
app.use(cors())
app.use(morgan("dev"))
app.use(express.json())

// routes
app.use('/api/auth', require("./routes/auth.routes"))


// Error handling middleware
// app.use(errorHandler)

module.exports = app
