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
    console.log("F: listActor initial hit");
    try {
        const response = await Actor.findAll();
        console.log("F: await actor hit")
        for (let i = 0; i < response.length; i++) {
            console.log("F: for loop hit",response[i].dataValues.fullName)
        }
    } catch (error) {
        console.log(error);
    }
}