const { DataTypes } = require("sequelize");
const db = require("../database/database");

const Orders = db.define("orders", {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    allowNull: false,
    autoIncrement: true,
    unique: true,
  },
  totalPrice: {
    type: DataTypes.FLOAT,
    allowNull: false,
    field: "total_price",
  },
  status: {
    type: DataTypes.ENUM(["completed", "pending"]),
    defaultValue: "pending",
    allowNull: false,
  },
  userId: {
    type: DataTypes.INTEGER,
    allowNull: false,
    field: "user_id",
  }
});

module.exports = Orders;
