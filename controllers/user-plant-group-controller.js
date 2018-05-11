const User = require("../models/user");
const UserPlantGroup = require("../models/user-plant-group");
const UserPlant = require("../models/user-plant");


module.exports = {

    water(req, res, next) {
        console.info( "Water plant group request received." );

        const plantGroupId = req.params.id;

        UserPlantGroup.findById( plantGroupId )
            .then( (plantGroup) => {

                if ( ! plantGroup ) {
                    res.send( { success: false, message: "Plant group not found for id: " + plantGroupId } );
                }

                const today = new Date();

                UserPlant.find({ group: plantGroup._id })
                    .then( (plants) => {

                        if ( ! plants.length ) {
                            res.send( {success: false, message: "Plant group empty"} );
                            return;
                        }

                        for (let i = 0; i < plants.length; i++) {
                            plants[i].lastWatered = today;
                            plants[i].wateringHistory.push( today );
                            plants[i].save();
                        }

                        plantGroup.lastWatered = today;
                        plantGroup.save()
                            .then( res.send( { success: true, message: "Plant group successfully watered." }))


                    })


            })
            .catch( next );
    },

    getPlants(req, res, next) {
        console.info( "Get plants request received." );

        const plantGroupId = req.params.id;

        UserPlant.find( { group: plantGroupId} )
            .then( (plants) => res.send( plants ))
            .catch( next );
    }

};