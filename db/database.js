
const mysql = require("mysql2");

const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  database: "test",
  password: "CZ~Top~9X19",
});

connection.connect((err) => {
  if (err) throw err;
  console.log("connected");
});

module.exports = connection;
