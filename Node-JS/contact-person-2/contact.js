const fs = require("fs");
const readline = require("readline");
const chalk = require("chalk");
const validator = require("validator");
const { default: isEmail } = require("validator/lib/isEmail");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

// todo - Quest Promise
const question = (quest) => {
  const req = new Promise((resolve, reject) => {
    rl.question(quest, (ans) => {
      resolve(ans);
    });
  });
  return req;
};

// todo - File validation
const dirPath = "./data";
const filePath = "./data/contacts.json";
const createFile = () => {
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
};

// todo - Random ID getter
const randomID = () => {
  const lowCase = ["qwertyuiopasdfghjklzxcvbnm"];
  const upCase = ["QWERTYUIOPASDFGHJKLZXCVBNM"];
  const numeric = ["1234567890"];
  const data = lowCase + upCase + numeric;

  let generate = "";
  for (let i = 0; i < 10; i++) {
    generate += data[Math.ceil(Math.random() * data.length)];
  }
  return generate;
};

// todo - Load JSON
const loadData = fs.readFileSync(filePath, "utf-8");

// todo - Save contact
const saveContact = (name, email, phone, valid) => {
  const emailValidation = validator.isEmail(email);
  if (!emailValidation) {
    console.log(chalk.bgRed.white("\n-invalid email-"));
    rl.close();
    return;
  }
  const phoneValidation = validator.isMobilePhone(phone, "id-ID");
  if (!phoneValidation) {
    console.log(chalk.bgRed.white("\n-invalid phone number-"));
    rl.close();
    return;
  }
  const contact = {
    id: randomID(),
    name,
    email,
    phone,
  };
  const contacts = JSON.parse(loadData);
  contacts.push(contact);

  // ? - console
  console.log(`\n${chalk.bgWhite.black(">--<-Data Validation->--<")}`);

  if (valid === "no") {
    console.log("\n-ulangi-");
  } else if (valid === "yes") {
    fs.writeFile(filePath, JSON.stringify(contacts), (err) => {
      if (err) throw err;
    });
    console.log("\n");
    console.log(contact);
  } else {
    console.log("\n-wrong input-");
  }

  rl.close();
};

module.exports = {
  question,
  saveContact,
  createFile,
};
