const { DataTypes } = require("sequelize");
const db = require("../database/database");

const ProductsInCars = db.define('products_in_cars',{
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
        unique: true
    },quantity:{
        type: DataTypes.INTEGER,
        allowNull: false,
    },price: {
        type: DataTypes.FLOAT,
        allowNull: false,
    },status: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: false,
    },cartId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        field: 'cart_id',
    },productId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        field: 'product_id',
    }
});

module.exports = ProductsInCars;