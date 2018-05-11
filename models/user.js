const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const InvitationSchema = require("./invitation");


const UserSchema = Schema({
    name: {
        type: String,
        required: true
    },

    email: {
        type: String,
        required: true
    },

    password: {
        type: String,
        required: true
    },

    invitations: {
        type: [ InvitationSchema ],
        default: []
    }
});


const User = mongoose.model("User", UserSchema);

module.exports = User;