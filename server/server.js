const express = require('express')
const app = express()
const port = 3000
const indexRouter = require('./routes/index.js')
const userRouter = require ('./routes/users.js')

app.use('/', indexRouter)
app.use('/user', userRouter)

app.listen(port, () => console.log('Example app is listening on port '+port))