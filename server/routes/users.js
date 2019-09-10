const express = require('express')
const userRouter = express.Router()
const db = require('../db.js')

userRouter.get('/', (req,res) => {
    res.send('This is the Users Page!')
})

userRouter.get('/new', (req,res) => {
    db.query('SELECT * FROM pet', (err, rows) => {
        res.send(rows)
    })
})

module.exports = userRouter