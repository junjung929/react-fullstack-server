const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send({ hi: "there" });
});

const PORT = process.env.PORT;
process.stdout.write("Litsening... port " + PORT);
app.listen(PORT);
