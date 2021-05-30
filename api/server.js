// build your server here and require it from index.js
const express = require('express')
const server = express()
const projectRouter = require('./project/router')

server.use(express.json())

server.use('/api/projects' , projectRouter)

module.exports = server
