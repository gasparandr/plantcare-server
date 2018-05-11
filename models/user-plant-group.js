const mongoose = require("mongoose");
const Schema = mongoose.Schema;


const UserPlantGroupSchema = new Schema({
    name: {
        type: String,
        required: true
    },

    description: String,

    moderators: {
        type: [ Schema.Types.ObjectId ],
        ref: "User",
        default: []
    },

    owner: {
        type: Schema.Types.ObjectId,
        ref: "User",
        required: true
    },

    wateringHistory: {
        type: [Date],
        default: []
    },

    lastWatered: Date
});

const UserPlantGroup = mongoose.model("UserPlantGroup", UserPlantGroupSchema);

module.exports = UserPlantGroup;