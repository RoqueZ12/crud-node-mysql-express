const express = require("express");
const router = express.Router();
const empleadosController = require("../controller/BlogController.js");

router.post("/create", empleadosController.createEmpleado);
router.get("/empleado", empleadosController.getEmpleados);
router.put("/update", empleadosController.updateEmpleado);
router.delete("/delete/:idempleado", empleadosController.deleteEmpleado);

module.exports = router;
