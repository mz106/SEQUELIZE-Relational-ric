const yargs = require("yargs"); // require yargs to access teh terminal and issue commands
const {sequelize} = require("./db/connection");

const app = async (yargsObj) =>{
    try {
        if (yargsObj.add){
            // Take movie key value pairs from yargsObj and send the to a add function and return movie
        } else if (yargsObj.list){
            // List all movies from datatbase
        }else if (yargsObj.upd){
            // Take filter and update k/v pairs from yargsObj, send them to upd function and return success/failure message
        } else if(yargsObj.del){
            // Take filter k/v pair from yargsObj and send to delete function, return success/failure message
        } else {
            console.log ("App: incorrect command");
        }


    ///////////////////////////////////////////////////////////////////////////////
    } catch (error){
        console.log(error);
    }
}//end of 'app'

app(yargs.argv);