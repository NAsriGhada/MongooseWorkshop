// 1. import part
const express = require("express");
const connectDB = require("./config/connectDB");
const contact = require("./models/userModel");

// 2.create express app and port
const app = express();
const PORT = 8080;

// 3.connect to the database
connectDB();

// 5. create the database functions or CRUD
// ! ADD USER
    // todo user 1
const addUserOne = async () => {
  const ghada = new contact.UserSchema({
    userFullName: "Ghada Nasri",
    userEmail: "ghada@gmail.com",
    userPhoneNumber: 00000,
    userAge: 28,
  });
    await ghada.save()
};
// addUserOne()
    // todo user 2
const addUserTwo = async () => {
  const yasmine = new contact.UserSchema({
    userFullName: "Yasmine",
    userEmail: "yasmine@gmail.com",
    userPhoneNumber: 00000,
    userAge: 28,
  });
    await yasmine.save()
};
// addUserTwo()

// ! UPDATE USER
const updateUser = async () => {
    await contact.UserSchema.findByIdAndUpdate("644ba4d2ffc98ffe09f63199", {
      $set: { userFullName: "Skander" },
    });
}
// updateUser()

// ! DELETE USER
const deleteUser = async () => {
  await contact.UserSchema.findByIdAndDelete("644ba4d2ffc98ffe09f63199");
};
deleteUser();


// 4.connect to the internet
app.listen((err) =>
  err ? console.log(err) : console.log(`app listning on ${PORT}`)
);
