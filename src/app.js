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

const app = async (yargsObj) => {
    try {
        // Any table thats been defined against my sequelize conenction will be created if it doesnt already exist
        await sequelize.sync();


        if (yargsObj.add) {
            console.log("App: yargsObj added")
            // Take movie key value pairs from yargsObj and send the to a add function and return movie
            await addMovie({
                title: yargsObj.title
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
            console.log("App: incorrect command");
        }


        ///////////////////////////////////////////////////////////////////////////////
    } catch (error) {
        console.log("App: catch error", error);
    }
} //end of 'app'

app(yargs.argv);

// COMMANDS - MOVIE
// ADD: node src/app.js --add --title "movie1"
// LIST: node src/app.js --list
// UPDATE: node src/app.js --movie --update --title "" --newTitle ""
// DELETE: node src/app.js --movie --delete --title ""

// COMMANDS ACTOR
// ADD:
// LIST:
// UPDATE:
// DELETE: