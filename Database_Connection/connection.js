const mongooes = require("mongoose");

mongooes.connect(process.env.DB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

module.exports = mongooes.connection;
