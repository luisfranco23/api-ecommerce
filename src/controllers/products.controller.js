const products = require("../services/products.services")
const errorMessagesm = require("../utils/error")
const { successfullyMessage } = require("../utils/succes")

const getProducts = async (req, res, next) => {
    try {
        const result = await products.getAllProducts()
        successfullyMessage({res,body:result})
    } catch (error) {
        console.log(error)
        errorMessagesm({res, error})
    }
}

module.exports = {
    getProducts,
}