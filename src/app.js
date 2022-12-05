const express = require("express");
const db = require("./database/database");
const { initModels } = require("./models/initModels");
const routes = require('./routes/index')
const cors = require("cors");
const morgan = require("morgan");
require("dotenv").config();

const app = express();

app.use(express.json());
app.use(morgan("dev"));
app.use(cors());

initModels();

db.authenticate()
  .then(() => console.log("autentication successful"))
  .catch((err) => console.log(err));

db.sync({ force: false })
  .then(() => console.log("Sincronized database"))
  .catch((err) => console.log(err));

app.use('/api/v1',routes)

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}!`);
});
