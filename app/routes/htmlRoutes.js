const express = require("express");
const path = require('path');
// Create an instance of Router
const router = express.Router();

// directory where html files are
const routes = {
    "/"          : "home.html",
    "/survey"    : "survey.html"
};

for (let key in routes) {
    router.get(key, (req, res) => {
        let htmlToSend = `${__dirname}/../public/${routes[key]}`;
        // Had to use resolve since I was getting a forbidden error
        res.sendFile(path.resolve(htmlToSend));
    });
}

module.exports = router;