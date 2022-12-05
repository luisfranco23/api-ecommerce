const authentication = require("./auth.services");
const jwt = require("jsonwebtoken");
const { successfullyMessage } = require("../utils/succes");
const errorMessagesm = require("../utils/error");
require("dotenv").config();

const login = async (req, res, next) => {
  try {
    const { username, password } = req.body;
      authentication.login(username, password)
      .then((response) => {
        if (response) {
            const token = jwt.sign(
                {
                  id: response.id,
                  username: response.username,
                  // role : response.role
                },
                process.env.SECRET,{
                  expiresIn: "1 hour"
                }
                );
                successfullyMessage({ res,message: "succes",body: token });
        } else {
          errorMessagesm({res, message:"Credentials invalid"});
      }});
    // errorMessagesm({ res, message: "Missing credentials" });
  } catch (error) {
    errorMessagesm({ res, message: "Missing Data", error: error });
  }
};
module.exports = login;
