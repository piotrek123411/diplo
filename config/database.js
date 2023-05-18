const Sequelize = require('sequelize');
const chalk = require('chalk');

require('dotenv')
    .config();

let database;

if (process.env.NODE_ENV === 'development')
    database = new Sequelize(
        process.env.DB_NAME,
        process.env.DB_USER,
        process.env.DB_PASSWORD,
        {
            logging: false,
            ssl: false,
            dialect: "postgres",
            host: process.env.DB_HOST,
            port: process.env.DB_PORT,
            dialectOptions: {
                useUTC: false
            }
        }
    )
else if (process.env.NODE_ENV === 'production')
    database = new Sequelize(
        process.env.DB_NAME,
        process.env.DB_USER,
        process.env.DB_PASSWORD,
        {
            logging: false,
            ssl: false,
            dialect: "postgres",
            host: process.env.DB_HOST,
            port: process.env.DB_PORT,
            dialectOptions: {
                useUTC: false
            }
        }
    )
else {
    console.log(
        chalk.red('Procces environment is not development or production')
    );
    process.exit(1);
}


module.exports = database;
