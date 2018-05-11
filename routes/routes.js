const DataHelper = require("../data-helper");
const UserController = require("../controllers/user-controller");
const UserPlantGroupController = require("../controllers/user-plant-group-controller");
const UserPlantController = require("../controllers/user-plant-controller");

module.exports = (app) => {
    /** API */
    app.get( "/api", (req, res) => res.send( "Plant care API is up and running"));

    /** DATA */
    app.get( "/populate", DataHelper.populate );
    app.get( "/drop", DataHelper.drop );

    /** User */
    app.post( "/login", UserController.login );
    app.get( "/invitations", UserController.getInvitations );
    app.get( "/invite", UserController.invite );

    /** Plant Group */
    app.put( "/plant-group/water/:id", UserPlantGroupController.water );
    app.get( "/plant-group/plants/:id", UserPlantGroupController.getPlants );

    /** User Plant */
    app.put( "/plant/water/:id", UserPlantController.water );

};