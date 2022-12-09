const { Op } = require("sequelize");
const Products = require("../models/products.model");

class products {
    static async getAllProducts() {
        try {
            const products = await Products.findAll({
                attributes: {
                    exclude: ["createdAt", "updatedAt"],
                }
            });
            return products;
        } catch (error) {
            throw error;
        }
    }
    static async addNewProduct(product) {
        try {
            const newProduc = await Products.create(product);
            return newProduc;
        } catch (error) {
            throw error;
        }
    }
}

module.exports = products;