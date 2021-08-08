const express = require("express");
const app = express();
const port = 5000;
const morgan = require("morgan");

app.use(morgan("combined"));

app.get("/doble/:number", (req, res) => {
  res.send(`La respuesta es ${req.params.number * 2}!`);
});

app.get("/mitad/:number", (req, res) => {
  res.send(`La respuesta es ${req.params.number / 2}`);
});

app.get("/:nombre", (req, res) => {
  res.send(`Hola ${req.params.nombre}!`);
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
