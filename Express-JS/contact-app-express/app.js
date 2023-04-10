const express = require("express");
const app = express();
const expressLayouts = require("express-ejs-layouts");
const contacts = require("./contacts");
const port = 3000;

app.set("view engine", "ejs");
app.use(expressLayouts);
app.use(express.urlencoded());

app.use("/", (request, response, next) => {
  console.log(`middleware input in - ${Date.now()}`);
  next();
});

app.get("/", (request, response) => {
  response.render("home", { title: "Home Page", layout: "layouts/main" });
});

app.get("/about", (request, response) => {
  response.render("about", { title: "About Page", layout: "layouts/main" });
});

app.get("/contact", (request, response) => {
  const directory = contacts.dataLoader();
  response.render("contact", {
    title: "Contact Page",
    layout: "layouts/main",
    directory,
  });
});

app.get("/addcontact", (request, response) => {
  response.render("addcontact", {
    title: "Add Contact",
    layout: "layouts/main",
  });
});

app.post("/asd", (request, response) => {
  console.log("Data berhasil ditambahkan.");
  console.log(request.body);
  response.redirect("/contact");
});

app.use("/", (request, response) => {
  response.status(404);
  response.send("Error sir");
});

app.listen(port, () => {
  console.log(`Server listen on port ${port}`);
});
