const path = require("path");
const express = require("express");
const bodyParser = require("body-parser");
const session = require("express-session");

const app = express();

app.use(
  session({
    secret: "gsafdg978ygsdfglkhj",
    resave: true,
    saveUninitialized: true
  })
);

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(express.static(__dirname + '/public'));
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

app.get("/skincare", (req, res) => {
  res.render("test");
});

app.get("/about", (req, res) => {
  res.render("about");
});

const PORT = process.env.PORT || 5000;
app.listen(PORT);
