const DataHelper = require("../data-helper");


module.exports = (app) => {

    app.get( "/api", (req, res) => res.send( "Plant care API is up and running"));

    app.get( "/populate", DataHelper.populate );
    app.get( "/drop", DataHelper.drop );

};