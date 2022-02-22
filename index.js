require("dotenv").config();

const express = require("express");
const mongoose = require("mongoose");

const mongoString = process.env.DATABASE_URL;

mongoose.connect(mongoString);
const database = mongoose.connection;

database.on("error", (error) => {
    console.log(error);
});

database.once("connected", () => {
    console.log("Database connected...");
});

const app = express();

const routes = require("./routes/routes");

app.use("/api", routes);

app.use(express.json());

app.listen(3000, () => {
    console.log("What's popping? We're connected");
});