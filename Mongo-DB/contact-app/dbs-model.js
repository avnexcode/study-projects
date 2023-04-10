const mongoose = require("mongoose");
const User = mongoose.model("user", {
  username: {
    type: String,
    require: true,
  },
  phoneNumber: {
    type: String,
    require: true,
  },
  email: {
    type: String,
    require: true,
  },
});

module.exports = {
  User,
};
