const express = require("express");
const validUrl = require("valid-url");
const path = require('path');

// Create an instance of Router
const router = express.Router();

// Create an instance of FriendFinder
const FriendFinder = require(path.join(__dirname, `/../data/FriendFinder.js`));
const friendFinder = new FriendFinder();

// Display all friends
router.get("/friends", (req, res) => {
    res.json(friendFinder.getFriends());
});

// Display friends in Order of Closeness
router.post("/friendsCloseness", (req, res) => {
    const profile = {
        "name": req.body.name,
        "photo_url": (validUrl.isUri(req.body.photo_url)) ? req.body.photo_url : "",
        "answers": req.body.answers.map(a => parseInt(a))
    };

    res.json(friendFinder.getClosestFriendsInOrder(profile));
});

// Find the most compatible friend
router.post("/friends", (req, res) => {
    const profile = {
        "name": req.body.name,
        "photo_url": (validUrl.isUri(req.body.photo_url)) ? req.body.photo_url : "",
        "answers": req.body.answers.map(a => parseInt(a))
    };

    const friendWithScore = friendFinder.findBestFriend(profile);

    // Add the user's profile to the datastore
    friendFinder.addFriend(profile);

    res.send({
        "my_name": profile.name,
        "name": friendWithScore.name,
        "photo_url": friendWithScore.photo_url,
        "score": friendWithScore.score
    });
});

module.exports = router;