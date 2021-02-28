const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
    res.send("[things.js] GET route\n");
});

router.post("/", (req, res) => {
    res.send("[things.js] POST route\n");
});

router.get("/:id([0-9]{3})", (req, res) => {
    res.send("[things.js] id is " + req.params.id + "\n");
});

router.get("/:name/:id([0-9]{3})", (req, res) => {
    res.send("[things.js] name = " + req.params.name + " | id = " + req.params.id + "\n");
});

module.exports = router;