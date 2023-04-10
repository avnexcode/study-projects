const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const expressLayouts = require("express-ejs-layouts");
const { body, validationResult, check } = require("express-validator");
const {
  addData,
  dataFinder,
  readDirectory,
  deleteData,
  editData,
} = require("./module");

const port = 3000;
app.set("view engine", "ejs");
app.use(expressLayouts);
app.use(bodyParser.urlencoded({ extended: true }));

app.post(
  "/add-data",
  [
    body("username").custom((value, { req }) => {
      const duplicated = dataFinder(value);
      if (duplicated) {
        throw new Error("nama sudah digunakan");
      }
      return true;
    }),
    check("email", "email salah").isEmail(),
    body("nohp").isMobilePhone("id-ID").withMessage("nomor salah"),
  ],
  (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      res.render("add-data", {
        title: "Add Data",
        layout: "layouts/main-layouts",
        errors: errors.array(),
      });
    } else {
      addData(req.body);
      res.redirect("/data");
    }
  }
);

app.post(
  "/data/edit/:name",
  [
    body("username").custom((value, { req }) => {
      const duplicated = dataFinder(value);

      if (value !== req.body.oldUsername && duplicated) {
        throw new Error("nama sudah digunakan");
      }
      return true;
    }),
    check("email", "email salah").isEmail(),
    body("nohp").isMobilePhone("id-ID").withMessage("nomor salah"),
  ],
  (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      res.render("edit-data", {
        title: "Edit Data",
        layout: "layouts/main-layouts",
        errors: errors.array(),
        data: req.body,
      });
      return;
    } else {
      editData(req.body);
      res.redirect("/data");
    }
  }
);

app.get("/", (req, res) => {
  res.status(200);
  res.render("home", { title: "Home Page", layout: "layouts/main-layouts" });
});

app.get("/add-data", (req, res) => {
  res.render("add-data", { title: "Add Data", layout: "layouts/main-layouts" });
});

app.get("/data", (req, res) => {
  const dataS = readDirectory();
  res.render("data", {
    title: "List Data",
    layout: "layouts/main-layouts",
    dataS,
  });
});

app.get("/data/delete/:name", (req, res) => {
  deleteData(req.params.name);
  res.redirect("/data");
});

app.get("/data/detail/:name", (req, res) => {
  const data = dataFinder(req.params.name);
  res.render("detail-data", {
    title: "Detail Data",
    layout: "layouts/main-layouts",
    data,
  });
});

app.get("/data/edit/:name", (req, res) => {
  const data = dataFinder(req.params.name);
  res.render("edit-data", {
    title: "Edit Data",
    layout: "layouts/main-layouts",
    data,
  });
});

app.use("/", (req, res) => {
  res.status(404);
  res.render("error", {
    title: "Error",
    layout: "layouts/error-layouts",
  });
});

app.listen(port, () => {
  console.log(`server listen at http://localhost:${port}`);
});
