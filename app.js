const express = require("express");
const app = express();
const morgan = require("morgan");

app.use(morgan("combined"));

app.get("/", (req, res) => {
  res.send(`HOLAAAAA BUENAS TARDES`);
});

app.post("/", (req, res) => {
  console.log(req.params.name);
  res.send("ok");
});

app.listen(process.env.PORT || 5000, () => {
  console.log(`Example app listening`);
});
