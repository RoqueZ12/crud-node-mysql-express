const mysql = require("mysql");

const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "empresa",
});

db.connect((err) => {
  if (err) {
    console.error("Error al conectar con la base de datos:", err);
    return;
  }
  console.log("Conexión exitosa a la base de datos MySQL");
});

module.exports = db;
