const User = require("../models/user");
const UserPlantGroup = require("../models/user-plant-group");
const UserPlant = require("../models/user-plant");


module.exports = {

    create(req, res, next) {
        const { name, description, sourceId, groupId } = req.body;

        console.info( "Creating plant " + name );

        const plant = new UserPlant({
            name: name,
            description: description,
            source: sourceId,
            group: groupId
        });

        plant.save()
            .then( res.send({ success: true, message: "Plant " + name + " successfully added."} ) )
            .catch( next );
    },

    water(req, res, next) {
        const plantId = req.params.id;

        UserPlant.findById(plantId)
            .then( (plant) => {
                const today = new Date();

                plant.lastWatered = today;
                plant.wateringHistory.push( today );

                return plant.save();
            })
            .then( res.send({ success: true, message: "Plant successfully watered." }))
            .catch( next );
    }

};