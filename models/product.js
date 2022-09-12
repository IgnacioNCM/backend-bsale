const { DataTypes } = require('sequelize');
const { sequelize } = require('../database/config');

const Product = sequelize.define('Product', {
    name: {
        type: DataTypes.STRING
    },
    url_image: {
        type: DataTypes.STRING
    },
    price: {
        type: DataTypes.FLOAT
    },
    discount: {
        type: DataTypes.INTEGER
    },
    category: {
        type: DataTypes.INTEGER,
        references: {
            model: 'Category',
            key: 'id'
        }
    },
}, {
    tableName: 'product'
});


module.exports = {
    Product
}