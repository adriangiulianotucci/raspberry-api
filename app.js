const express = require("express");
const app = express();
const port = 5000;

app.get("/doble/:number", (req, res) => {
  res.send(`La respuesta es ${req.params.number * 2}!`);
});

app.get("/mitad/:number", (req, res) => {
  res.send(`La respuesta es ${req.params.number / 2}`);
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
