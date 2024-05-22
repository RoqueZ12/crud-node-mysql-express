
const express = require("express");
const cors = require("cors");
const empleadosRoutes = require("./router/routes.js");

const app = express();
const PORT = 3001;

app.use(express.json());
app.use(cors());
app.use("/", empleadosRoutes);

app.listen(PORT, () => {
  console.log(`Servidor corriendo en el puerto ${PORT}`);
});
