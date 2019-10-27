var express = require("express");
var PORT = process.env.PORT || 3007;
var app = express();

app.use(express.static("./app/public"));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

let routes = require("./app/controllers/controller")
app.use(routes);

app.listen(PORT, function() {
    console.log("App now listening at http://localhost:" + PORT);
  });