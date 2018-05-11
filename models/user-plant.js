const mongoose = require("mongoose");
const Schema = mongoose.Schema;


const UserPlantSchema = new Schema({
    name: {
        type: String,
        required: true
    },

    description: String,

    source: {
        type: Schema.Types.ObjectId,
        ref: "Plant"
    },

    group: {
        type: Schema.Types.ObjectId,
        ref: "UserPlantGroup"
    }
});


const UserPlant = mongoose.model("UserPlant", UserPlantSchema);

module.exports = UserPlant;