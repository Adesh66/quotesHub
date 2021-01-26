const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const quotes_Schema = new Schema({
  quote: {
    type: String,
    required: true,
  },
  quoteAuthor:{
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("quotes", quotes_Schema);
