const { getUserByUsername } = require("../services/users.services")
const bcrypt = require('bcrypt')

class authentication {
    static async login(username, password) {
        try {
            const result = await getUserByUsername(username)
            if ((result && password) !== undefined) {
                const verify = bcrypt.compareSync(password, result.password)
                if (verify) {
                    return result
                }
            }
            return false
        } catch (error) {
            throw error
        }
    }
}

module.exports = authentication