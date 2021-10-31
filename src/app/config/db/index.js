const mongoose = require('mongoose')

const db = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URL)
        console.log('connected to database')
    } catch (error) {
        console.log('not connect to database')
    }
}

module.exports = db