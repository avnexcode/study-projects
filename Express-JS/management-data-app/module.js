const fs = require("fs");
const chalk = require("chalk");

const dirPath = "./data";
const dataPath = "./data/data.json";

if (!fs.existsSync(dirPath)) {
  fs.mkdir(dirPath, (err) => {
    if (err) throw err;
  });
}
if (!fs.existsSync(dataPath)) {
  fs.writeFile(dataPath, "[]", (err) => {
    if (err) throw err;
  });
}

const readDirectory = () => {
  const data = JSON.parse(fs.readFileSync(dataPath, "utf-8"));
  return data;
};

const saveData = (data) => {
  fs.writeFile(dataPath, JSON.stringify(data), (err) => {
    if (err) throw err;
  });
};

const addData = (data) => {
  const dataS = readDirectory();
  dataS.push(data);
  saveData(dataS);
};

const dataFinder = (value) => {
  const dataS = readDirectory();
  const data = dataS.find((data) => {
    return data.username === value;
  });
  return data;
};

const editData = (item) => {
  const dataS = readDirectory();
  const newData = dataS.filter((data) => {
    return data.username !== item.oldUsername;
  });
  delete item.oldUsername;
  console.log(newData);
  newData.push(item);
  saveData(newData);
};

const deleteData = (data) => {
  const dataS = readDirectory();
  const newDataS = dataS.filter((item) => {
    return item.username !== data;
  });
  saveData(newDataS);
};

module.exports = {
  dataFinder,
  addData,
  readDirectory,
  editData,
  deleteData,
};
