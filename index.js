const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");

dotenv.config();

const app = express();
const PORT = process.env.PORT | 2000;

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

app.listen(PORT, () => {
  console.log("server running on port 2000");
});
