const yargs = require("yargs");
const { saveContact } = require("./contact");

const name = {
  describe: "Full Name",
  demandOption: true,
  type: "string",
};
const phone = {
  describe: "Phone Number",
  demandOption: true,
  type: "string",
};
const email = {
  describe: "Email",
  demandOption: false,
  type: "string",
};

yargs.command({
  command: "add",
  builder: {
    name,
    phone,
    email,
  },
  handler(argv) {
    // console.log(argv.name, argv.phone, argv.email);
    saveContact(argv.name, argv.email, argv.phone);
  },
});

yargs.parse();
