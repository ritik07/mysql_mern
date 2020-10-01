const conn = require("./config/database");
const express = require("express");
const app = express();
const cors = require("cors");
const userRouter = require("./API/users/user.router");

app.get("/api", (req, res) => {
    res.json({ success: 1, message: "This is reat apis working" });
});

app.use(cors());
app.use(express.json());
app.use("/api/users", userRouter);

app.listen(5000, () => {
    console.log("Server up and listing on port 5000");
});
