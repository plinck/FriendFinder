// Dependencies
const express    = require("express");
const bodyParser = require("body-parser");

const app  = express();
const PORT = process.env.PORT || 3000;

// Express parsing
app.use(bodyParser.json());
app.use(bodyParser.text());
app.use(bodyParser.urlencoded({"extended": true}));

const router_html = require(`${__dirname}/app/routes/htmlRoutes.js`);
const router_api  = require(`${__dirname}/app/routes/apiRoutes.js`);

app.use("/", router_html);
app.use("/api", router_api);

//Listen
app.listen(PORT, () => {
    console.log(`App listening on port ${PORT}`)
});