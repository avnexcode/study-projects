const contact = require("./contact");
const chalk = require("chalk");

const mainRun = async () => {
  contact.createFile();
  console.log(chalk.bgGreen.black(">--<-Input Data->--<"));
  const name = await contact.question("Name : ");
  const email = await contact.question("Email : ");
  const phone = await contact.question("Phone : ");
  const valid = await contact.question(
    `${chalk.bgWhite.black("Valid ?")} yes or no : `
  );

  contact.saveContact(name, email, phone, valid);
};
mainRun();
