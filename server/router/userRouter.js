const express = require('express')
const User = require('../model/User')
const router = express.Router()

// get all users
router.get('/', async (req, res) => {
    const list = await User.find({})
    res.send(list)
})

// find by name parameter
router.get('/:name', async (req, res) => {
    const { name } = req.params
    const user = await User.findOne({ name })
    res.send(user)
})

// create user
router.post('/', async (req, res) => {
    const { name, email, age } = req.body
    const user = await User.create({
        name, email, age
    })
    await user.save()
    // console.log(user)
    res.send(user)
})

module.exports = router