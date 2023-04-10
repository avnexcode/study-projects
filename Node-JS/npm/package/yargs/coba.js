const fs = require("fs");

const dirPath = "./data";
const filePath = "./data/datas.json";

const createFile = () => {
  return new Promise((resolve, reject) => {
    if (!fs.existsSync(dirPath)) {
      fs.mkdir(dirPath, (err) => {
        if (err) throw err;
      });
    }
    if (!fs.existsSync(filePath)) {
      fs.writeFile(filePath, "[]", (err, datas) => {
        if (err) return err;
        let file = datas;
        return;
      });
    }
  });
};

const loadFile = async () => {
  const ldFile = await createFile();
  //   const file = fs.readFileSync(ldFile, "utf8");
  //   return ldFile;
  console.log(ldFile);
};
loadFile();
