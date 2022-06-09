const {DataTypes} = require("sequelize"); //comes from sequelize library. use to identify data types
const { sequelize} = require("../db/connection");

const Actor = sequelize.define("Actor",{
    fullName: {
        type: DataTypes.STRING,
        allowNull: false, // This means required field
        unique: true
    }
// actor table at 32mins in video
});

module.exports = Actor;