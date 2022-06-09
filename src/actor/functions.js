const Actor = require("./table");

exports.addActor = async (actorObj) => {
    try {
        const newActor = await Actor.create(actorObj);
        console.log(`F: Succesfully added ${newActor.dataValues.fullName} to the database`);
    } catch (error) {
        console.log(error)
    }
}

// List Actors
exports.listActor = async () => {
    try {
        const response = await Actor.findAll();
        for (let i = 0; i < response.length; i++) {
            console.log(response[i].dataValues.fullName)
        }
    } catch (error) {
        console.log(error);
    }
}