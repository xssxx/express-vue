const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
    id: mongoose.Types.ObjectId,
    name: String,
    email: {
        type: String,
        required: true
    },
    age: Number
})

module.exports = mongoose.model('User', userSchema)