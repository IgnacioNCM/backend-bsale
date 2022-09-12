const { Sequelize } = require('sequelize')

const sequelize = new Sequelize(process.env.DATABASE, process.env.USERNAME_DB, process.env.PASSWORD_DB, {
    host: process.env.HOST,
    dialect: process.env.MOTOR,
    define: {
        timestamps: false
    }
});

module.exports = {
    sequelize
}

