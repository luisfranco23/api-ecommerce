const { DataTypes } = require("sequelize");
const db = require("../database/database");

const Products = db.define("products", {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    allowNull: false,
    autoIncrement: true,
    unique: true,
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  price: {
    type: DataTypes.FLOAT,
    allowNull: false,
    validate: {
      min: 0,
    },
  },
  availableQty: {
    type: DataTypes.INTEGER,
    allowNull: false,
    field: "available_qty",
    validate: {
      min: 0,
    },
  },
  image: {
    type: DataTypes.STRING,
  },
  status: {
    type: DataTypes.ENUM("Active", "Disabled"),
    allowNull: false,
    defaultValue: "Active"
  },
  userId: {
    type: DataTypes.INTEGER,
    allowNull: false,
    field: "user_id",
  },
});

module.exports = Products;
