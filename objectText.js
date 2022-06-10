const yargs = require("yargs");

// const myObject = {
//     myName: yargs.argv.myName
// };

// const myObject = {
//     [yargs.argv.key]: yargs.argv.value
// };

// const myAge = {
//     myAge: yargs.argv.myAge
// };

// console.log(myObject)

const app = (yargsObj) => {
    if(yargsObj.movie) {
        if (yargsObj.add) {
            console.log({[yargsObj.key]: yargsObj.value})
        } else if (yargsObj.list) {
            console.log({where: {[yargsObj.key]: yargsObj.value}})
        }
    } else if (yargsObj.tv) {
        if(yargsObj.add) {
            console.log({[yargsObj.key]: yargsObj.value})
        }
    }
};

app(yargs.argv);