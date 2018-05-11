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
        console.info("Invite request received.");

        const inviteFrom = req.body.inviteFrom;
        const plantGroupId = req.body.plantGroupId;
        const email = req.body.email;

        User.findOne({ email: email })
            .then( (user) => {
                if ( ! user ) res.send({ success: false, message: "Unregistered email address: " + email });

                UserPlantGroup.findById(plantGroupId)
                    .then( (plantGroup) => {
                        const notification = {
                            accepted: false,
                            message: " Invited you to be a moderator on " + plantGroup.name,
                            inviteFrom: inviteFrom
                        };

                        user.invitations.push( notification );

                        user.save()
                            .then( res.send({
                                success: true,
                                message: "You invited " + user.name + " successfully to moderate " + plantGroup.name  }))
                    })
                    .catch( next );

            })
            .catch( next );


    },

    getInvitations(req, res, next) {
        const userId = req.params.id;

        User.findById(userId)
            .then( (user) => res.send(user.invitations))
            .catch( next );
    }

};