import express from "express";
import colors from "colors";
import dotenv from "dotenv";
import morgan from "morgan";
import { connect } from "mongoose";
import connectDB from "./cofnig/db.js";

//configure env
dotenv.config();

//database config
connectDB();

//rest object
const app = express();

//middewares
app.use(express.json());
app.use(morgan("dev"));

///rest api
app.get("/", (req, res) => {
  res.send("<h1>Welcome to ecommerce app</h1>");
});

//PORT
const PORT = process.env.POST || 5000;

//run lissten
app.listen(PORT, () => {
  console.log(
    `Server Running on ${process.env.DEV_MOVE} mode on port  ${PORT}`.bgCyan
      .white
  );
});
