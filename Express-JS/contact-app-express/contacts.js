const fs = require("fs");

const dirPath = "./data";
const filePath = "./data/datas.json";

if (!fs.existsSync(dirPath)) {
  fs.mkdir(dirPath, (err) => {
    if (err) throw err;
  });
}

if (!fs.existsSync(filePath)) {
  fs.writeFile(filePath, "[]", (err) => {
    if (err) throw err;
  });
}

const dataLoader = () => {
  const fileBuffer = fs.readFileSync(filePath, "utf-8");
  return JSON.parse(fileBuffer);
};

module.exports = { dataLoader };
