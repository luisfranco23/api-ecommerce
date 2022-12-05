const Carts = require("./carts.model");
const Orders = require("./oders.model");
const ProductsInOrders = require("./productInOrders.model");
const Products = require("./products.model");
const ProductsInCars = require("./productsInCarts.model");
const Users = require("./users.model");


const initModels = () => {

    Users.hasMany(Products)
    Products.belongsTo(Users)

    Users.hasMany(Carts)
    Carts.belongsTo(Users)

    Carts.hasMany(ProductsInCars)
    ProductsInCars.belongsTo(Carts)

    Products.hasMany(ProductsInCars)
    ProductsInCars.belongsTo(Products)

    Users.hasMany(Orders)
    Orders.belongsTo(Users)

    Orders.hasMany(ProductsInOrders)
    ProductsInOrders.belongsTo(Orders)

    Products.hasMany(ProductsInOrders)
    ProductsInOrders.belongsTo(Products)
}

module.exports = {
    initModels
}