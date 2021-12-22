const maria = require("mysql");
const conn = maria.createConnection({
  host: "localhost",
  port: 3306,
  user: "syusmm",
  password: "1234",
  database: "mysql",
});

module.exports = conn;
