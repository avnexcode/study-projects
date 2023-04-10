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
    if (err) return err;
  });
}

const loadFile = fs.readFileSync(filePath, "utf8");

const saveContact = (name, email, phone) => {
  const contact = {
    name,
    email,
    phone,
  };
  const contacts = JSON.parse(loadFile);

  contacts.push(contact);
  console.log(contacts);

  fs.writeFile(filePath, JSON.stringify(contacts), (err) => {
    if (err) throw err;
  });
};

module.exports = {
  saveContact,
};
