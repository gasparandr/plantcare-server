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
                    UserPlantGroup.find({ $or: [ { owner: user._id }, { moderators: { $in: [  user._id ] }}] })
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

    signUp(req, res, next) {
        const { email, password, name } = req.body;

        console.info( "Sign-up request received from user " + email );

        const user = new User({
            email: email,
            password: password,
            name: name
        });

        user.save()
            .then( res.send({ success: true, message: "User successfully created."}) )
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

                        if ( ! plantGroup ) {
                            res.send( {success: false, message: "Plant group not found for id: " + plantGroupId});
                            return;
                        }

                        const notification = {
                            accepted: false,
                            message: " Invited you to be a moderator on ",
                            inviteFrom: inviteFrom,
                            userPlantGroup: plantGroupId,
                            plantGroupName: plantGroup.name
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
        console.info( "PING for invites." );
        const userId = req.params.id;

        User.findById(userId)
            .then( (user) => res.send(user.invitations))
            .catch( next );
    },

    acceptInvitation(req, res, next) {
        console.info( "Invitation accept received." );
        const userId = req.body.userId;
        const invitationId = req.body.invitationId;

        User.findById( userId )
            .then( (user) => {

                if ( ! user ) {
                    res.send( { success: false, message: "User not found." } );
                    return;
                }

                let inv;

                for ( let i = 0; i < user.invitations.length; i++) {
                    if ( user.invitations[i]._id == invitationId ) {
                        console.log( " Invitation found! " + invitationId);
                        user.invitations[i].accepted = true;
                        inv = user.invitations[i];


                        user.invitations.pull({ _id: user.invitations[i]._id });
                        user.save();
                        break;
                    }
                }


                if ( ! inv ) {
                    res.send( { success: false, message: "Invitation not found." } );
                    return;
                }

                UserPlantGroup.findById( inv.userPlantGroup )
                    .then( (plantGroup) => {

                        if ( ! plantGroup ) {
                            res.send( { success: false, message: "Plant group " + inv.userPlantGroup + " associated with the invitation not found" });
                            return;

                        }

                        plantGroup.moderators.push( userId );

                        Promise.all([
                            user.save(),
                            plantGroup.save()
                        ])
                        .then( res.send( { success: true, message: "Invitation from " + inv.inviteFrom + " accepted!" }))
                        .catch( next )

                    })

            })

    },

    getPlantGroups(req, res, next) {
        console.info( "Get plant groups request received.");
        const userId = req.params.id;

        UserPlantGroup.find({ $or: [ { owner: userId }, { moderators: { $in: [  userId ] }}] })
            .then( (plantGroups) => res.send( plantGroups ))
            .catch( next );
    }

};