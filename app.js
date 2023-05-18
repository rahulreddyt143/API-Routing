const express = require("express");
const add = express();

add.get("/", (request, response) => {
  response.send("Home Page");
});

add.get("/about", (request, response) => {
  response.sendFile("About Page");
});

module.exports = add;
