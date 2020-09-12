const express = require("express");
const connection = require("./Database_Connection/connection");
const router = require("./router");
const port = process.env.PORT || 3000;
require("dotenv/config");
connection.on("open", () => {
  console.log("connected to mongo atlast");
  const app = express();

  //use
  app.use(express.json());
  app.use("/", router);

  app.listen(port, () => {
    console.log("listening to " + port);
  });
});
