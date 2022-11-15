const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const morgan = require('morgan')

const app = express()
app.use(morgan('combine'))
app.use(bodyParser.json())
app.use(cors())

app.post('/register', (req, res) => {
    res.send({
        message: `User ${req.body.email} registered`
    })
    console.log("register get hit")
})

app.listen(process.env.PORT || 8081, () => {
    console.log(`listening on ${process.env.PORT || 8081}`)
})