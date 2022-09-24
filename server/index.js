require("dotenv").config();
const express = require("express");
const sequelize = require("./config/config");
const cors = require("cors");
const router = require("./routes/index");
const PORT = process.env.PORT || 5500;

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api", router);

const start = async () => {
  try {
    await sequelize.authenticate();
    await sequelize.sync();
    app.listen(PORT, () => {
      console.log(`server works on http://localhost:${PORT}`);
    });
  } catch (error) {
    console.log(error);
  }
};

start();
