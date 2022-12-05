const Users = require("../models/users.model");

class users {
  static async create(user) {
    try {
      if (Object.keys(user).length > 1) {
        console.log("estamos acá");
        const emailExist = await Users.findOne({
          where: {
            email: user.email,
          },
        });

        if (!emailExist) {
          const result = await Users.create(user);
          const response = { username: result.username, email: result.email };
          return response;
        }
        return false;
      }
      throw error;
    } catch (error) {
      throw error;
    }
  }
  static async getUserById(id) {
    try {
      const user = await Users.findOne({
        where: {
          id,
        },
      });
      return user;
    } catch (error) {
      throw error;
    }
  }
  static async getUserByUsername(username) {
    try {
      const result = await Users.findOne({
        where: {
          username
      }})
      return result;
    } catch (error) {
      throw error;
    }
  }
    
}

module.exports = users;
