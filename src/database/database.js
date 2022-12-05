const { Sequelize } = require("sequelize");
require('dotenv').config()

const db = new Sequelize({
    database: process.env.DATABASE,
    username: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    port: process.env.DB_PORT,
    host: process.env.DB_HOST,
    dialect:'postgres',
    logging: false,
})

module.exports = db;