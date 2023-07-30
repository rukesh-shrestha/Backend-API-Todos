const express = require("express");
require("dotenv").config();
const cors = require("cors");
const swaggerUI = require("swagger-ui-express");
const YAML = require("yamljs");
const app = express();

/**
 *  Customixing the sendStatus method to send message and contenttype along with it.
 * @param {*} statusCode
 * @param {*} type
 * @param {*} message
 * @returns
 */
app.response.sendStatus = function (statusCode, type, message) {
  // code is intentionally kept simple for demonstration purpose
  return this.contentType(type).status(statusCode).send(message);
};

const connectDB = require("./config/dbConfiguration");
const todoRoute = require("./route/todoRoutes");
const userRoute = require("./route/userRoutes");
connectDB();

const corsOptions = {
  origin: process.env.DOMAIN_NAME,
  methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
  credentials: true, // If you need to allow sending cookies or authentication headers
};
app.use(cors(corsOptions));
const swaggerDocument = YAML.load("./swagger/swaggerAPIDoc.yaml");
app.use("/api-docs", swaggerUI.serve, swaggerUI.setup(swaggerDocument));
// app.response.sendStatus = custom();

app.use(express.json());
app.use("/api/todos", todoRoute);
app.use("/api/users", userRoute);
const port = process.env.PORT;
app.listen(port, () => {
  console.log(`The server is listening on  ${port} port.`);
});
