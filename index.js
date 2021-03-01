const express = require("express");
const app = express();

const PORT = 4001;

app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`);
});

const things = require("./things.js");

app.all("/test", (req, res) => {
    res.send("HTTP methods have no effect on this route\n");
});

app.get("/:id([0-9]{3})", (req, res) => {
    res.send("id is " + req.params.id + "\n");
});

app.use("/things", things);

//////////////////////
//
// MIDDLEWARE TEST
//

app.use((req, res, next) => {
    console.log("START");
    next();
});

app.get("/", (req, res, next) => {
    res.send("MIDDLE");
    next();
});

app.use((req, res, next) => {
    console.log("END");
});

//////////////////////

app.get("*", (req, res) => {
    res.send("Invalid URL\n");
});

