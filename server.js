const express = require("express");
require("dotenv").config();

const routers = require("./routers/index");
const testConnectionDb = require("./authentication/testConnectionDb");
const morgan = require("morgan");
const database = require("./config/database");

const app = express();
const PORT = process.env.PORT || 9001;

if (process.env.NODE_ENV === "development") {
  app.use(morgan("dev"));
}

console.log(database);

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// * routers
app.use(routers);

app.listen(PORT, () => {
  console.log(`server runnnig http://localhost:${PORT}`);
  testConnectionDb();
});
