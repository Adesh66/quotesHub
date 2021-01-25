const express = require("express");
const app = express();

app.get("/", (req, res, next) => {
  res.send({
    ok: true,
  });
});

app.listen(9096, () => {
  console.log("app.runninon 3000");
});
