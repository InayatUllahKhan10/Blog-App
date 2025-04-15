const mongoose = require("mongoose");



// mongoose.connect("mongodb://114.134.22.157/Bloginayat")

mongoose.connect("mongodb+srv://Inayatullahkhan0212:UgAm6DW3itPUFAjI@bloginayat.vskytvy.mongodb.net/?retryWrites=true&w=majority&appName=Bloginayat");

const userSchema = new mongoose.Schema({
    username: String,
    name: String,
    email: String,
    password: String,
    isAdmin:{
      type: Boolean,
      default: false
    },
    date: {
      type: Date,
      default: Date.now,
    }
  });
  
  const userModel = mongoose.model("user", userSchema);
  
  module.exports = userModel;
