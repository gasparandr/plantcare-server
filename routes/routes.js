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
    app.post( "/sign-up", UserController.signUp );
    app.get( "/invitations/:id", UserController.getInvitations );
    app.get( "/plant-groups/:id", UserController.getPlantGroups );
    app.post( "/invite", UserController.invite );
    app.post( "/accept/invitation", UserController.acceptInvitation );

    /** Plant Group */
    app.post( "/plant-group", UserPlantGroupController.create );
    app.put( "/plant-group/water/:id", UserPlantGroupController.water );
    app.get( "/plant-group/plants/:id", UserPlantGroupController.getPlants );

    /** User Plant */
    app.post( "/user-plant", UserPlantController.create );
    app.put( "/plant/water/:id", UserPlantController.water );
};