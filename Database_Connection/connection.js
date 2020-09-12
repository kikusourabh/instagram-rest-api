const mongooes = require("mongoose");
require("dotenv/config");

mongooes.connect(process.env.DB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

module.exports = mongooes.connection;
