const db = require("../database/db.js")

const empleadosController = {
  createEmpleado: (req, res) => {
    const { nombre, edad, pais, cargo, anios } = req.body;
    db.query(
      "INSERT INTO empleado (nombre, edad, pais, cargo, anios) VALUES (?, ?, ?, ?, ?)",
      [nombre, edad, pais, cargo, anios],
      (err, result) => {
        if (err) {
          console.error(err);
          res.status(500).send("Error al registrar el empleado");
        } else {
          res.send("Registro exitoso");
        }
      }
    );
  },

  getEmpleados: (req, res) => {
    db.query("SELECT * FROM empleado", (err, result) => {
      if (err) {
        console.error(err);
        res.status(500).send("Error al obtener los empleados");
      } else {
        res.send(result);
      }
    });
  },

  updateEmpleado: (req, res) => {
    const { idempleado, nombre, edad, pais, cargo, anios } = req.body;
    db.query(
      "UPDATE empleado SET nombre=?, edad=?, pais=?, cargo=?, anios=? WHERE idempleado=?",
      [nombre, edad, pais, cargo, anios, idempleado],
      (err, result) => {
        if (err) {
          console.error(err);
          res.status(500).send("Error al actualizar el empleado");
        } else {
          res.send("Actualización exitosa");
        }
      }
    );
  },

  deleteEmpleado: (req, res) => {
    const { idempleado } = req.params;
    db.query(
      "DELETE FROM empleado WHERE idempleado=?",
      [idempleado],
      (err, result) => {
        if (err) {
          console.error(err);
          res.status(500).send("Error al eliminar el empleado");
        } else {
          res.send("Empleado eliminado correctamente");
        }
      }
    );
  },
};

module.exports = empleadosController;
