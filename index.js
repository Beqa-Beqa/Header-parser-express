// Initialize express app
require("dotenv").config();
const express = require("express");
const app = express();

// Use static files like styles
app.use(express.static("public"));

// API endpoints
app.get("/", (req,res) => {
  res.sendFile(__dirname + "/views/index.html");
})

// Challenge code Headers parser
app.get("/api/whoami", (req,res) => {
  res.json({
    ipaddress: req.socket.remoteAddress,
    language: req.headers["accept-language"],
    software: req.headers["user-agent"]
  });
});

// Define port and listen to the server
const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`Server is listening on port ${port}`)
})