const express = require("express");
const app = express();
const port = 5000;
const morgan = require("morgan");

app.use(morgan("combined"));

app.get("/", (req, res) => {
  res.send(`HOLAAAAA`);
});

app.post("/", (req, res) => {
  console.log(req.params.name);
  res.send("ok");
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
