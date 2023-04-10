const fs = require("fs");
const readmeExist = fs.existsSync("README.txt");

if (!readmeExist) {
  fs.writeFile(
    "README.txt",
    "recommended install nodemon in local project. {'npm install -g nodemon' = 'install nodemon in global}, {'npm install --save-dev' = 'install nodemon in local'}",
    (err) => {
      if (err) throw err;
    }
  );
}
