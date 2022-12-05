const successfullyMessage = ({ res, code = 200, message = "Request successful", body, next }) => {
  res.status(code).json({
    message,
    body,
  });
};

module.exports = {
  successfullyMessage,
};
