const { Op } = require("sequelize");
const Products = require("../models/products.model");
const Users = require("../models/users.model");

class products {
    static async getAllProducts() {
        try {
            const products = await Products.findAll({
                include: {
                    model: Users,
                    attributes: ["id"]
                }
            });
            return products;
        } catch (error) {
            throw error;
        }
    }
}

module.exports = products;