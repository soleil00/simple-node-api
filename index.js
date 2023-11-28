const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("welcome aboard");
});

app.get("/message", (req, res) => {
  res.send("message are here");
});

app.get("/message/:id", (req, res) => {
  const { id } = req.params;
  res.send(`u are viewinf message number ${id}`);
});

app.listen(process.env.PORT | 2000, () => {
  console.log("server running on port 2000");
});
