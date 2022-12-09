const products = require("../services/products.services")
const errorMessagesm = require("../utils/error")
const { successfullyMessage } = require("../utils/succes")

const getProducts = async (req, res, next) => {
    try {
        const result = await products.getAllProducts()
        successfullyMessage({res,body:result})
    } catch (error) {
        errorMessagesm({res, error})
    }
}

const addProduct = async (req, res, next) => {
    try {
        const product = req.body
        const image = req.hostname + '/api/v1/uploads/' + req.file.filename
        const result = await products.addNewProduct({...product,image})
        successfullyMessage({res,body:result})
    } catch (error) {
        errorMessagesm({res, error})
    }
}

module.exports = {
    getProducts,
    addProduct
}