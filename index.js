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

app.get("*", (req, res) => {
    res.send("Invalid URL\n");
});
