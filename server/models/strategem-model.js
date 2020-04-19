const mongoose = require('mongoose')
const Schema = mongoose.Schema

const Strategem = new Schema(
    {
        faction: {type: String, required: true},
        name: { type: String, required: true },
        description: { type: String, required: true },
        tags: {type: [String], required: true},
        cost: {type: Number, required: true}
    }
)

module.exports = mongoose.model('strategems', Strategem)