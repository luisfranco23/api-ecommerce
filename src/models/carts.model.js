const { DataTypes } = require("sequelize");
const db = require("../database/database");

const Carts = db.define("carts", {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
    allowNull: false,
    unique: true,
  },
  totalPrice: {
    type: DataTypes.FLOAT,
    allowNull: false,
    field: "total_price",
    validate: {
      min: 0,
    },
  },
  userId: {
    type: DataTypes.INTEGER,
    allowNull: false,
    field: "user_id",
  },
});
module.exports = Carts;
