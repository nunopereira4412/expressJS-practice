var express    = require("express");
var bodyParser = require("body-parser");
var multer     = require("multer");

var upload = multer();
var app    = express();

const PORT = 4001;

app.set('view engine', 'pug');
app.set('views', './views');


app.get("/", (req, res) => {
    res.render("form");
});

app.get("/test", (req, res) => {
    res.send("TEst");
});

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.use(upload.array());
app.use(express.static("public"));

app.post("/", (req, res) => {
    console.log(req.body);
    res.send("received your request!");
});

app.listen(PORT);
