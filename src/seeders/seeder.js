const db = require("../database/database")
const Carts = require("../models/carts.model")
const Products = require("../models/products.model")
const Users = require("../models/users.model")

const users = [{
    username: "lafrancol",
    email: "lafrancol@gmail.com",
    password: "root"
}]

const carts = [{
    totalPrice: 245,
    userId: 1
},{
    totalPrice: 230,
    userId: 1
},{
    totalPrice: 200,
    userId: 1
}]

const products = [{
    name: "Tv challenger",
    price: "600",
    availableQty: "10",
    userId: 1
},{
    name: "Portatil Asus",
    price: "800",
    availableQty: "10",
    userId: 1
},{
    name: "Parlante de Sonido",
    price: "600",
    availableQty: "10",
    userId: 1
},{
    name: "Iphone 11",
    price: "500",
    availableQty: "15",
    userId: 1
}]

db.sync({force: true}).then(() => {
    console.log('Initiated...')
    carts.forEach(cart => {
        Carts.create(cart)
    })
    setTimeout(() => {
        products.forEach(product => {
            Products.create(product)})
    },100)
    setTimeout(() => {
        users.forEach(user => Users.create(user))},200)

    console.log('successfully finished')
})