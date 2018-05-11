const mongoose = require("mongoose");
const Plant = require("./models/plant");
const User = require("./models/user");
const UserPlant = require("./models/user-plant");
const UserPlantGroup = require("./models/user-plant-group");

module.exports = {

    populate(req, res, next) {

        console.log("Populate request arrived!");

        /** Plants */

        const Plant1 = new Plant({
            name: "Plant 1",
            description: "This is Plant 1",
            origin: "Country 1",
            wateringNeededML: 100,
            sensitivity: 1,
            wateringIntervalDAYS: 1
        });

        const Plant2 = new Plant({
            name: "Plant 2",
            description: "This is Plant 2",
            origin: "Country 2",
            wateringNeededML: 200,
            sensitivity: 2,
            wateringIntervalDAYS: 2
        });

        const Plant3 = new Plant({
            name: "Plant 3",
            description: "This is Plant 3",
            origin: "Country 3",
            wateringNeededML: 300,
            sensitivity: 3,
            wateringIntervalDAYS: 3
        });


        /** Users */

        const MobileUser = new User({
            name: "Mobile User",
            email: "mobile@plantcare.com",
            password: "asd123"
        });

        const DesktopUser = new User({
            name: "Desktop User",
            email: "desktop@plantcare.com",
            password: "asd123"
        });

        /** Plant Groups - Mobile User */

        const MobileUserPlantGroup1 = new UserPlantGroup({
            name: "Mobile user plant group 1",
            description: "This is mobile user plant group 1",
            owner: MobileUser
        });

        const MobileUserPlantGroup2 = new UserPlantGroup({
            name: "Mobile user plant group 2",
            description: "This is mobile user plant group 2",
            owner: MobileUser
        });

        const MobileUserPlantGroup3 = new UserPlantGroup({
            name: "Mobile user plant group 3",
            description: "This is mobile user plant group 3",
            owner: MobileUser
        });

        const MobileUserPlantGroup4 = new UserPlantGroup({
            name: "Mobile user plant group 4",
            description: "This is mobile user plant group 4",
            owner: MobileUser
        });

        const MobileUserPlantGroup5 = new UserPlantGroup({
            name: "Mobile user plant group 5",
            description: "This is mobile user plant group 5",
            owner: MobileUser
        });

        /** Plant Groups - Desktop User */

        const DesktopUserPlantGroup1 = new UserPlantGroup({
            name: "Desktop user plant group 1",
            description: "This is mobile user plant group 1",
            owner: DesktopUser
        });

        const DesktopUserPlantGroup2 = new UserPlantGroup({
            name: "Desktop user plant group 2",
            description: "This is mobile user plant group 2",
            owner: DesktopUser
        });

        const DesktopUserPlantGroup3 = new UserPlantGroup({
            name: "Desktop user plant group 3",
            description: "This is mobile user plant group 3",
            owner: DesktopUser
        });

        const DesktopUserPlantGroup4 = new UserPlantGroup({
            name: "Desktop user plant group 4",
            description: "This is mobile user plant group 4",
            owner: DesktopUser
        });

        const DesktopUserPlantGroup5 = new UserPlantGroup({
            name: "Desktop user plant group 5",
            description: "This is mobile user plant group 5",
            owner: DesktopUser
        });

        const DesktopUserPlantGroup6 = new UserPlantGroup({
            name: "Desktop user plant group 6",
            description: "This is mobile user plant group 6",
            owner: DesktopUser
        });

        const DesktopUserPlantGroup7 = new UserPlantGroup({
            name: "Desktop user plant group 7",
            description: "This is mobile user plant group 7",
            owner: DesktopUser
        });

        /** User Plants - Mobile User */

        const MobileUserPlant1 = new UserPlant({
            name: "Mobile user plant 1",
            description: "This is mobile user plant 1",
            source: Plant1,
            group: MobileUserPlantGroup1
        });

        const MobileUserPlant2 = new UserPlant({
            name: "Mobile user plant 2",
            description: "This is mobile user plant 2",
            source: Plant1,
            group: MobileUserPlantGroup1
        });

        const MobileUserPlant3 = new UserPlant({
            name: "Mobile user plant 3",
            description: "This is mobile user plant 3",
            source: Plant2,
            group: MobileUserPlantGroup2
        });

        const MobileUserPlant4 = new UserPlant({
            name: "Mobile user plant 4",
            description: "This is mobile user plant 4",
            source: Plant1,
            group: MobileUserPlantGroup3
        });

        const MobileUserPlant5 = new UserPlant({
            name: "Mobile user plant 5",
            description: "This is mobile user plant 5",
            source: Plant3,
            group: MobileUserPlantGroup1
        });


        /** User Plants - Desktop User */

        const DesktopUserPlant1 = new UserPlant({
            name: "Desktop user plant 1",
            description: "This is desktop user plant 1",
            source: Plant1,
            group: DesktopUserPlantGroup1
        });

        const DesktopUserPlant2 = new UserPlant({
            name: "Desktop user plant 2",
            description: "This is desktop user plant 2",
            source: Plant3,
            group: DesktopUserPlantGroup1
        });

        const DesktopUserPlant3 = new UserPlant({
            name: "Desktop user plant 3",
            description: "This is desktop user plant 3",
            source: Plant2,
            group: DesktopUserPlantGroup1
        });

        const DesktopUserPlant4 = new UserPlant({
            name: "Desktop user plant 4",
            description: "This is desktop user plant 4",
            source: Plant3,
            group: DesktopUserPlantGroup2
        });

        const DesktopUserPlant5 = new UserPlant({
            name: "Desktop user plant 5",
            description: "This is desktop user plant 5",
            source: Plant1,
            group: DesktopUserPlantGroup3
        });


        /** Save data to DB */

        Promise.all([
            Plant1.save(),
            Plant2.save(),
            Plant3.save(),
            MobileUser.save(),
            DesktopUser.save(),
            MobileUserPlantGroup1.save(),
            MobileUserPlantGroup2.save(),
            MobileUserPlantGroup3.save(),
            MobileUserPlantGroup4.save(),
            MobileUserPlantGroup5.save(),
            DesktopUserPlantGroup1.save(),
            DesktopUserPlantGroup2.save(),
            DesktopUserPlantGroup3.save(),
            DesktopUserPlantGroup4.save(),
            DesktopUserPlantGroup5.save(),
            DesktopUserPlantGroup6.save(),
            DesktopUserPlantGroup7.save(),
            MobileUserPlant1.save(),
            MobileUserPlant2.save(),
            MobileUserPlant3.save(),
            MobileUserPlant4.save(),
            MobileUserPlant5.save(),
            DesktopUserPlant1.save(),
            DesktopUserPlant2.save(),
            DesktopUserPlant3.save(),
            DesktopUserPlant4.save(),
            DesktopUserPlant5.save()
        ])
            .then( res.send("Database populated successfully.") )
            .catch( next );



    },

    drop(req, res, next) {

        const { users, plants, userplantgroups, userplants } = mongoose.connection.collections;

        users.drop( () => {
            plants.drop( ()=> {
                userplantgroups.drop( () => {
                    userplants.drop( () => {
                        res.send("Collections dropped successfully!");
                    })
                })
            })
        })

    }


};