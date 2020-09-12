const mongooes = require("mongoose");

const uri =
  "mongodb+srv://admin:mongoadmin@cluster0.d4qsl.mongodb.net/testdb?retryWrites=true&w=majority";

mongooes.connect(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

module.exports = mongooes.connection;
