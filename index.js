import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import bodyParser from "body-parser";
import connect from "./connectDb/mongodbConnection.js";
import Routes from "./Router/Route.js";
const app = express();
const port = process.env.PORT || 4000;

dotenv.config();
app.use(cors());

app.use(bodyParser.json({ extended: true }));
app.use(bodyParser.urlencoded({ extended: true }));

connect();

app.use("/api/v1", Routes);

app.get("/", (req, res) => {
  res.send("Vercel is ready to use!");
});

app.listen(port, (req, res) => {
  console.log("Welcome to server");
});
