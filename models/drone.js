const mongoose = require("mongoose")
const droneSchema = mongoose.Schema({
    model: String,
    purpose: String,
    flight_range: Number
})
module.exports = mongoose.model("Drone", droneSchema)