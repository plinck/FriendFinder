// Dependencies
const express    = require("express");
const bodyParser = require("body-parser");

const app  = express();
const PORT = process.env.PORT || 3000;

// Express parsing
app.use(bodyParser.json());
app.use(bodyParser.text());
app.use(bodyParser.urlencoded({"extended": true}));

// The app.use below is so we can use static directories in express - it tells express where to look.
// First parameter is the mount point, second is the location in the file system where it actually is.
// This tells express the static directory we will use for the files vs embedding
// it directly in the HTML file, so in the html file, we can use:
//  <script src="public/assets/js/survey.js" type="text/javascript"></script>
// and take js files out of html files where they belong
app.use("/public", express.static(__dirname + "/app/public"));

const router_html = require(`${__dirname}/app/routes/htmlRoutes.js`);
const router_api  = require(`${__dirname}/app/routes/apiRoutes.js`);

app.use("/", router_html);
app.use("/api", router_api);

//Listen
app.listen(PORT, () => {
    console.log(`App listening on port ${PORT}`)
});