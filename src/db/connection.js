// Set up sequelize connection
require ("dotenv").config(); //Give access to .env file
const { Sequelize}=require("sequelize");

exports.sequelize = new Sequelize(process.env.MYSQL_URI); //Creates a connection to effect the database

