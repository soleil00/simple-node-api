const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const mongoose = require("mongoose");

//routes
const userRoutes = require("./routes/userRoutes");

dotenv.config();
const app = express();
const PORT = process.env.PORT | 2000;
mongoose
  .connect(process.env.MONGODB_URL)
  .then(() => {
    app.listen(PORT, () => {
      console.log(
        `server is running on port ${PORT} and succesfuly connected to db`
      );
    });
  })
  .catch(() => {
    console.log("can't connect to db");
  });

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("welcome aboards");
});

app.get("/message", (req, res) => {
  res.send("message are here");
});

app.use("/users", userRoutes);

app.get("/message/:id", (req, res) => {
  const { id } = req.params;
  res.send(`u are viewinf message number ${id}`);
});
