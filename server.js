const express = require("express");
const app = express();
const port = 5000;

app.listen(port, function() {
  console.log("Iniciando servidor...");
  console.log("http://localhost:" +port);
});

app.use(express.static("public"));
