const mongoose = require('mongoose');

const AuthorSchema = new mongoose.Schema({
  firstName: {
    type: String,
    required: [true, "First Name is Required."],
    minlength: [3, "First Name should be at least 3 characters."]
  },
  lastName: {
    type: String,
    required: [true, "Last Name is Required."],
    minlength: [3, "Last Name should be at least 3 characters."]
  }
}, {timestamps: true})
module.exports.Author = mongoose.model("Author", AuthorSchema);