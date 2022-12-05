const { DataTypes } = require("sequelize");
const db = require("../database/database");

const ProductsInOrders = db.define('products_in_Orders', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
        unique: true
    },quantity: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },price: {
        type: DataTypes.FLOAT,
        allowNull: false,
    },status:{
        type: DataTypes.ENUM(["disabled","available","aggregated"]),
        allowNull: false,
        defaultValue: "aggregated"
    },
    orderId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        field: "order_id",
    },productId : {
        type: DataTypes.INTEGER,
        allowNull: false,
        field: "product_id",
    }
})
module.exports = ProductsInOrders;