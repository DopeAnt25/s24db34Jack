const mongoose = require("mongoose")
const droneSchema = mongoose.Schema({
    model: {
        type: String,
        required: true,
        minlength: 2 // Minimum length of 2 characters
    },
    purpose: String,
    flight_range: {
        type: Number, 
        min: 0, 
        max: 1000
    }
})
module.exports = mongoose.model("Drone", droneSchema)