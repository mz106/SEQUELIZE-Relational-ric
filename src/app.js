const yargs = require("yargs"); // require yargs to access teh terminal and issue commands
const {
    sequelize
} = require("./db/connection");

const {
    addMovie,
    listMovie,
    updMovie,
    delMovie
} = require("./movie/functions");

const {
    addActor,
    listActor
} = require("./actor/functions");
const { Actor, Movie } = require("./associations.js");
// const { belongsTo } = require("sequelize/types");

const app = async (yargsObj) => {
    try {
        // Any table thats been defined against my sequelize connection will be created if it doesnt already exist
        await sequelize.sync({alter:true});
        console.log("A: sync method hit");

        // Create 1-1 table relationship. Add movieID col to the Actor table
        // Actor.hasOne(Movie, {
        //     foreignKey: "movieID"
        // });
        // Movie.belongsTo(Actor);
        // console.log("A: 1-1 rel hit");

        if (yargsObj.movie) {
            console.log("A: Movie command list");
            if (yargsObj.add) {
                console.log("App: yargsObj added")
                // Take movie key value pairs from yargsObj and send the to a add function and return movie
                await addMovie({
                    title: yargsObj.title,
                    ActorId: yargsObj.actorId
                });

            } else if (yargsObj.list) {
                // List all movies from datatbase
                await listMovie();

            } // Take filter and update k/v pairs from yargsObj, send them to upd function and return success/failure message
            else if (yargsObj.update) {
                await updMovie({
                    title: yargsObj.newTitle
                }, {
                    title: yargsObj.title
                })

            } // Take filter k/v pair from yargsObj and send to delete function, return success/failure message
            else if (yargsObj.delete) {
                await delMovie({
                    title: yargsObj.title
                });

            } else {
                console.log("A: incorrect command");
            }
        } else if (yargsObj.actor) { // Actor command list ////////////////////////////////////////////////////////
            console.log("A: Actor command list hit"); 

            if (yargsObj.add) {
                await addActor({
                    fullName: yargsObj.fullName
                })
            } else if (yargsObj.list) {
                await listActor();
            }
            else{
                console.log("App: incorrect command");
                console.log("Not specified if Movie or Actor entry");
            }
        } // End of Actor command list
        
    } catch (error) {
        console.log("App: catch error", error);
    }
} //end of 'app'

app(yargs.argv);

// COMMANDS - MOVIE
// ADD: node src/app.js --movie --add --title "movie1" --actorId "1"
// LIST: node src/app.js --movie --list
// UPDATE: node src/app.js --movie--movie --update --title "" --newTitle ""
// DELETE: node src/app.js --movie --delete --title ""

// COMMANDS ACTOR
// ADD: node src/app.js --actor --add --fullName "actor1"
// LIST: node src/app.js --actor --list
// UPDATE:
// DELETE:

// COMMANDS - MOVIE + ACTOR
