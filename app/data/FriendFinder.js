const Database = require("./DatabasePromise.js");

class FriendFinder {
    // When constructeed, it gets data from DB and outs in an array
    constructor() {
        this.friends = [];
        this.getFriendsFromDB();
    }

    // Get friends from DB and put in object var
    getFriendsFromDB() {
        let database = new Database();
        database.query(`SELECT * FROM friends`)
            .then((err, rows) => {
                if (rows != undefined) {
                    // map the rows into the array of objects
                    this.friends = rows.map(r => ({
                        "id": r.id,
                        "name": r.name,
                        "photo_url": r.photo_url,
                        "answers": JSON.parse(r.answers)
                    }));
                }
            })
            .catch(err => {
                console.log(`error inserting into friends ${err}`);
            });;
        database.close();
    }

    // find diff for 2 profiles
    findDifference(a, b) {
        let score = 0;

        for (let i in a.answers) {
            score += Math.abs(b.answers[i] - a.answers[i]);
        }

        return score;
    }

    // When you add, immediate get that one back so you can put in friends array
    addFriend(profile) {
        let database = new Database();
        const query_cmd =
            `INSERT INTO friends (name, photo_url, answers)
            VALUES ("${profile.name}", "${profile.photo_url}", "${JSON.stringify(profile.answers)}");
            SELECT id FROM friends ORDER BY id DESC LIMIT 1;`;

        database.query(query_cmd)
            .then((err, rows) => {
                this.friends.push(Object.assign({}, {
                    "id": results[1][0].id
                }, profile));
            })
            .catch(err => {
                console.log(`error inserting into friends ${err}`);
            });

        database.close();
    }

    getFriends() {
        return this.friends;
    }

    // Go through all the other folks and find out who is the most compatible
    findBestFriend(profile) {
        // The lower the difference in compatibility, the better
        this.friends.sort((a, b) => {
            this.findDifference(a, profile) - this.findDifference(b, profile);
        });

        return this.friends[0];
    }
}

module.exports = FriendFinder;