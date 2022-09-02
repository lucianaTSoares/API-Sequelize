const bodyParser = require("body-parser");
const userRoutes = require("./userRoutes");

module.exports = (app) => {
  app.use(bodyParser.json());
  app.use(userRoutes)
};
