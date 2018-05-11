const User = require("../models/user");
const UserPlantGroup = require("../models/user-plant-group");


module.exports = {

    login(req, res, next) {
        console.info( "Login request received!" );

        const email = req.body.email;
        const password = req.body.password;

        User.findOne({ email: email })
            .then( (user) => {
                if ( ! user || user.password !== password) {
                    res.send({ success: false, message: "Login failed."  })
                } else {
                    UserPlantGroup.find({ owner: user._id })
                        .then( (plantGroups) => {
                            res.send({
                                success: true,
                                message: "Login successful!",
                                userId: user._id,
                                name: user.name,
                                plantGroups: plantGroups
                            })
                        })
                }
            })
            .catch( next );

    },

    invite(req, res, next) {

    },

    getInvitations(req, res, next) {

    }

};