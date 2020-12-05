const express = require("express");
require("dotenv").config();

console.log(process.env);
const port = process.env.port || 5001;
const host = "localhost";
const app = express();


// middleware




const server = app.listen(port, "localhost", () => {
  console.log(server.address());
  console.log("I'm listening on http://%s:%s", host, port);
});
