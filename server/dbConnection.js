const mongoose = require("mongoose");

mongoose
  .connect(process.env.MONGOURI, {
    dbName: process.env.DB_NAME,
    user: process.env.DB_USER,
    pass: process.env.DB_PASS,
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
    useCreateIndex: true,
  })
  .then(() => console.log("db connected successfully"))
  .catch((err) => console.log(err));
