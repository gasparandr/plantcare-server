const mongoose = require("mongoose");
const Schema = mongoose.Schema;


const PlantSchema = new Schema({
    name: {
        type: String,
        required: true
    },

    description: {
        type: String,
        required: true
    },

    origin: String,

    wateringNeededML: {
        type: String,
        required: true
    },

    sensitivity: Number,

    wateringInterval: Number

});


const Plant = mongoose.model("Plant", PlantSchema);

module.exports = Plant;