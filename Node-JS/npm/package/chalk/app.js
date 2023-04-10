const fs = require("fs");

fs.writeFile(
  "README.txt",
  "recommended install chalk in version 4.1.0",
  (err) => {
    if (err) throw err;
  }
);

const chalk = require("chalk");

console.log(chalk.blue("Hello world!"));
