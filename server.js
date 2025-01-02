const express = require("express");
const app = express();
const session = require("express-session");
const methodOverride = require("method-override");
const flash = require("express-flash");
const logger = require("morgan");
const passport = require("passport");
const path = require("path");

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(logger("dev"));
app.use(methodOverride("_method"));
app.use(flash());


const PORT = process.env.PORT || 8000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});