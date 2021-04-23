const express = require('express')
const usersRouter = require('./users/users-router')
const server = express()

server.use(express.json())

server.use('/api/users', usersRouter)

server.use('*',(req,res) => {
    res.status(404).json({message:"Api is working"})
})

module.exports = server