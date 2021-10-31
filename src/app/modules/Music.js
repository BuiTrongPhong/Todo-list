const mongoose = require('mongoose')
const Schema = mongoose.Schema

const MusicSchema = new Schema({
    name: {
        type: String
    },
    img:
    {
        data: Buffer,
        contentType: String
    }
})
const Music = mongoose.model('music', MusicSchema)

module.exports = Music