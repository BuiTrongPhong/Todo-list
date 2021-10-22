const mongoose = require('mongoose')
const Schema = mongoose.Schema
const todoSchema = new Schema({
    name: {
        type: String
    },
    status: {
        type: Boolean,
        default: true
    }
})

const Todo = mongoose.model('todo', todoSchema)
module.exports = Todo