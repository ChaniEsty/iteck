require('dotenv').config();
const express = require("express");
const userRouter = require("./routs/userRouter");
const logInRouter = require("./routs/logInRouter");
const jobRouter = require("./routs/jobsRouter");
const employerRouter = require("./routs/employerRouter");
const cityRouter = require("./routs/cityRouter");
const fieldRouter = require("./routs/fieldRouter");
const subjectRouter = require("./routs/subjectRouter");

const app = express();
const PORT = process.env.PORT || 3600;

app.use(express.json());
app.use("/user", userRouter);
app.use("/logIn", logInRouter);
app.use("/job", jobRouter);
app.use("/employer", employerRouter);
app.use("/city", cityRouter);
app.use("/field", fieldRouter);
app.use("/subject", subjectRouter);

app.listen(PORT, () => {
    console.log("app ruuning");
});
