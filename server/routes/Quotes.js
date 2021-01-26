const express = require("express");
const router = express.Router();

const Quotes = require("../model/QuotesSchema");
router.get("/", async (req, res, next) => {
  try {
    const allQuotes = await Quotes.find({}, { __v: 0 });
    res.send(allQuotes);
  } catch (error) {
    next(error);
  }
});
router.post("/", async (req, res, next) => {
  try {
    const quote = new Quotes(req.body);
    await quote.save();
    console.log(quote);
    res.send(quote);
  } catch (error) {
    if (error.quote === "ValidationError") {
      next(422, error.message);
      return;
    }
    next(error);
  }
});

module.exports = router;
