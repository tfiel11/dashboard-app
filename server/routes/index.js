const express = require('express')
const router = express.Router()
const db = require('../db.js')

router.get('/', (req,res) => {
    res.send('HELLO FREAKIN WORLD')
})

// router.get('/user', (req,res) => {
//     db.query('SELECT * FROM pet', (err, rows) => {
//         res.send(rows)
//     })
// })

module.exports = router