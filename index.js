const express = require("express");
const path = require("path");

const app = express();
app.use(express.static(__dirname + "/movieapp/build/"));

app.get("/*", function (req, res) {
  res.sendFile(path.join(__dirname + "/movieapp/build/index.html"));
});

app.listen(process.env.PORT || 5000, function () {
  console.log("started");
});
