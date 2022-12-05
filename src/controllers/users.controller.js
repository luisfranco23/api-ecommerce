const { successfullyMessage } = require("../utils/succes");
const users = require("../services/users.services");
const errorMessagesm = require("../utils/error");

module.exports = {
    newUser: async(req, res, next) => {
        try {
            const user = req.body
            const result = await users.create(user)
            if (result) {
                successfullyMessage({res,code: 201, message: 'user created successfully', body: result})
            }
            errorMessagesm({res,message: 'failed to create user, verify email or username'})
        } catch (error) {
            errorMessagesm({res,message: "Missing data, review the information username, email and password", error: error.message})
        }
    },
}