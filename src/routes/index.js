const bodyParser = require("body-parser");
const userRoutes = require("./userRoutes");
const levelRoutes = require("./levelRoutes");
const classRoutes = require("./classRoutes");

module.exports = (app) => {
  app.use(bodyParser.json());
  app.use(userRoutes);
  app.use(levelRoutes);
  app.use(classRoutes);
};
