require("dotenv").config();

const express = require("express");
const cors = require("cors");
const { exit } = require("process");

const authRouter = require("./router/auth");
// const adminRouter = require("./router/admin");
const userRouter = require("./router/user");
// const moveRouter = require("./router/movie");
const connectDB = require("./config/connectDB");

const app = express();
app.use(express.json());
app.use(cors());
const PORT = process.env.PORT || 5000;

// Connect mongodb
connectDB();

app.use("/api/auth", authRouter);
// app.use("api/admin", admin);
// app.use("/api/movies", movieRouter);
app.use("/api/user", userRouter);

app.listen(PORT, () => console.log(`App listen on port: ${PORT}`));
