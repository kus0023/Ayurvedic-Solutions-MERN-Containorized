const mongoose = require("mongoose");

console.log(process.env.DATABASE_NAME);

const uri = process.env.DATABASE_MONGO_URL;

// const uri = process.env.DATABASE_MONGO_URL.replace(
//   "$",
//   process.env.DATABASE_NAME
// );

console.log("Mongo URL: ", uri);

const options = {
  useUnifiedTopology: true,
  useNewUrlParser: true,
  useCreateIndex: true,
  dbName: process.env.DATABASE_NAME
};


mongoose.connect(uri, options, (err) => {
  if (err) {
    console.error("Database connection failed.");
    console.error(err);
  } else {
    console.log("Connected to database.");
  }
});
