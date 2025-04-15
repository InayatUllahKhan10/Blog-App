const mongoose = require("mongoose");


// mongoose.connect("mongodb://114.134.22.157/Bloginayat")

mongoose.connect("mongodb+srv://Inayatullahkhan0212:UgAm6DW3itPUFAjI@bloginayat.vskytvy.mongodb.net/?retryWrites=true&w=majority&appName=Bloginayat");

const blogSchema = new mongoose.Schema({
    title: String,
    desc: String,
    image: String,
    content: String,
    date: {
        type: Date,
        default: Date.now,
    }
});

const blogModel = mongoose.model("blog", blogSchema);

module.exports = blogModel;
