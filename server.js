// Dependencies
const express    = require("express");
const path       = require("path");
const bodyParser = require("body-parser");

const app  = express();
const PORT = process.env.PORT || 3000;

// Express parsing
app.use(bodyParser.json());
app.use(bodyParser.text());
app.use(bodyParser.urlencoded({"extended": true}));

const router_html = require(path.join(directory_routes, "html_routes.js"));
const router_api  = require(path.join(directory_routes, "api_routes.js"));

app.use("/",path.join(__dirname, "app", "public", "html_routes.js"));
app.use("/api", path.join( __dirname, "app", "routes", "api_routes.js"));

//Listen
app.listen(PORT, () => {
    let host = server.address().hostname;

    console.log(`App listening on at http://${host}:${PORT}`)
);