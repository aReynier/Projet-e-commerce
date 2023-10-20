const express = require("express");
const cors = require("cors");
const connectDB = require("./config/db");
const dotenv = require("dotenv").config();
const port = 5500;

//connexion to database
connectDB();

const app = express();
// const productsRoute = require("./routes/productsRoutes");

// against cors errors
app.use(cors());

// request data Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use("/product", require("./routes/product.routes"));

//launch server
app.listen(port, () => console.log("server started: " + port));
