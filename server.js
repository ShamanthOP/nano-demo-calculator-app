const express = require("express");
const app = express();

const PORT = 8080;

const baseUrl = "/calculator";

app.use(express.json());

const baseRouter = express.Router();

baseRouter.get("/greeting", (req, res) => {
    return res.send("Hello World!");
});

baseRouter.post("/add", (req, res) => {
    const { first, second } = req.body;
    const res = first + second;
    res.status(200).send({ result: res });
});

baseRouter.post("/subtract", (req, res) => {
    const { first, second } = req.body;
    res.status(200).send({ result: first-second});
});

app.use(baseUrl, baseRouter);
app.listen(PORT, () => {
    console.log("Server running at PORT", PORT);
});
