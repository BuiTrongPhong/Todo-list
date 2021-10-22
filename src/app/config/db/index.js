const mongoose = require('mongoose')

const db = async () => {
    try {
        await mongoose.connect('mongodb://localhost:27017/todolist')
        console.log('connected to database')
    } catch (error) {
        console.log('not connect to database')
    }
}

module.exports = db