const mongoose = require("mongoose");
const Schema = mongoose.Schema;


const InvitationSchema = new Schema({
    accepted: {
       type: Boolean,
       required: true
    },

    message: String,

    inviteFrom: {
        type: String,
        required: true
    },

    userPlantGroup: {
        type: Schema.Types.ObjectId,
        ref: "UserPlantGroup"
    }
});


module.exports = InvitationSchema;