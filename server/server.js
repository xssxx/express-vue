const express = require('express')
const cors = require('cors')
const mongoose = require('mongoose')
const userRouter = require('./router/userRouter.js')

const app = express()

app.use(cors())
app.use(express.json())

app.use('/user', userRouter)

app.listen(9000, () => {
    // connect to mongodb localhost
    mongoose.connect('mongodb://127.0.0.1:27017/UserDb', { useNewUrlParser: true })
        .then(() => {
            console.log('connected')
            console.log('Running on host:9000')
        }).catch(err => {
            console.log(err.message)
        })
})

