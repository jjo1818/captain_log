// Setup some data
// pokemon mondel for database
const mongoose = require('mongoose')

const Schema = mongoose.Schema

const capLogSchema = new Schema({
    title: {type: String, required: true},
    entry: {type: String, required: true},
    shipIsBroken: {type: Boolean, required: true},
    ts: {type: String, required: true},
})

//model is created using the schema and exported
const CapLog = mongoose.model('capLog', capLogSchema)

module.exports = CapLog
