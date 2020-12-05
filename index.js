const express = require("express");
require("dotenv").config();
const logger = require("morgan");
var cookieParser = require("cookie-parser");

// console.log(process.env);
const port = process.env.port || 5001;
const host = "localhost";
const app = express();

// middleware

app.use(cookieParser());
app.use((req, res, next) => {
  console.log("Cookies: ", req.signedCookies);
  next();
});

// app.use(logger());

app.use((req, res, next) => {
  //Authentication
  console.log("Auth");
  // some jobs
  res.isAuth = false;
  next();
});
app.use((req, res, next) => {
  console.log("Controller // db");
  if (res.isAuth) {
    console.log("Private data");
  } else {
    console.log("not auth");
  }
  next();
});
app.use((req, res, next) => {
  console.log("middleware: 3");
  if (true) {
    res.send("send");
  }
});

app.get("/user", (req, res) => {
  res.send("User Details");
});

app.use((err, req, res, next) => {
  console.log("middleware: 1");
  // yapılacak işlemler tanımlanır
  const error = new err("BOOOOMMMMMM !!!");
  next(error);
});

app.use((req, res, next) => {
  console.log("middleware: 2");
  // yapılacak işlemler tanımlanır
  next();
});

app.use((req, res, next) => {
  console.log("middleware: 3");
  // yapılacak işlemler tanımlanır
  next();
});

app.use((req, res, next) => {
  console.log("middleware: 4");
  // yapılacak işlemler tanımlanır
  next();
});

app.use((req, res, next) => {
  console.log("middleware: 5");
  // yapılacak işlemler tanımlanır
  if (true) {
    res.send("OK");
  }
});

app.use((req, res, next) => {
  console.log("middleware: 6");
  // yapılacak işlemler tanımlanır
  next();
});

app.get("/user", (req, res) => {});

const server = app.listen(port, "localhost", () => {
  // console.log(server.address());
  console.log("I'm listening on http://%s:%s", host, port);
});
