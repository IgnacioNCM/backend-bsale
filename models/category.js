const { DataTypes } = require('sequelize');
const { sequelize } = require('../database/config');

const Category = sequelize.define('Category', {
    name: {
        type: DataTypes.STRING
    }
}, {
    tableName: 'category'
});

module.exports = {
    Category
}