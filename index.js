const express = require("express");
const app = express();

app.use("/static", express.static("public"));
app.use(express.static("images"));

const PORT = 4001;

//////////////////////
//
// PUG
//

app.set('view engine', 'pug');
app.set('views', './views');

app.get("/firstTemplate", (req, res) => {
    res.render("firstView");
});

app.get("/testImageStaticServing", (req, res) => {
    res.render("testImageStaticServing");
});

app.get("/dynamicView", (req, res) => {
    res.render("dynamicView", {
        name: "testName",
        url: "http://www.google.com"
    });
});

//////////////////////

app.all("/test", (req, res) => {
    res.send("HTTP methods have no effect on this route\n");
});

app.get("/:id([0-9]{3})", (req, res) => {
    res.send("id is " + req.params.id + "\n");
});

const things = require("./things.js");
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

// TODO 
//
// why cant reach this route? it works if placed before the "/"
app.get("*", (req, res) => {
    res.send("Invalid URL\n");
});

app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`);
});

