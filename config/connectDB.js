const mongoose = require("mongoose");
const connectDB = () => {
  mongoose
    .connect(
      "mongodb+srv://ghada:phQgEGUA18pmf6XO@mongoosecluster.3ry0c0q.mongodb.net/test"
    )
    .then(() => console.log("connection to the database is successful..."))
    .catch((err) => console.log(err));
};

module.exports = connectDB;