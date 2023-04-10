const express = require("express");
const app = express();
const chalk = require("chalk");
const port = 3000;
const morgan = require("morgan");
const expressLayouts = require("express-ejs-layouts");

const { User } = require("./dbs-model");
require("./dbs-connect");

app.use(morgan("dev"));
app.set("view engine", "ejs");
app.use(expressLayouts);
app.use(express.urlencoded({ extended: true }));

app.post("/add-contact", (req, res) => {
  res.redirect("/contact");
});

app.get("/", (req, res) => {
  res.render("home", {
    title: "Home",
    layout: "layouts/main-layout",
  });
});

app.get("/about", (req, res) => {
  res.render("about", { title: "About", layout: "layouts/main-layout" });
});

app.get("/contact", async (req, res) => {
  const user = await User.find();
  res.render("contact", {
    title: "Contact",
    layout: "layouts/main-layout",
    user,
  });
});

app.get("/add-contact", (req, res) => {
  res.render("add-contact", {
    title: "Add Contact",
    layout: "layouts/main-layout",
  });
});

app.get("/detail/:username", async (req, res) => {
  const user = await User.findOne({ username: req.params.username });

  res.render("detail", {
    title: "Detail",
    layout: "layouts/main-layout",
    user,
  });
});

app.get("/edit/:username", (req, res) => {
  res.render("edit", {
    title: "Edit",
    layout: "layouts/main-layout",
    contact: req.params,
  });
});

app.use("/", (req, res) => {
  res.status(404);
  res.send("Page Not Found");
});

app.listen(port, () => {
  console.log(chalk.bgWhite.red(`Server listen at http://localhost:${port}`));
});
