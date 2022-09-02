const express = require("express");
const chalk = require("chalk");
const routes = require("./src/routes");

const app = express();
routes(app)

const port = 3000;
app.listen(port, () =>
  console.log(chalk.blueBright(`INFO: API is working on port ${port}\n`))
);

module.exports = app