const User = require("../models/user");
const UserPlantGroup = require("../models/user-plant-group");
const UserPlant = require("../models/user-plant");


module.exports = {

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