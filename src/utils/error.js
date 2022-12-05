const errorMessagesm = ({res, code = 400, message,error}) => {
    res.status(code).json({message,error});
}

module.exports = errorMessagesm;