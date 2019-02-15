const Database = require("./DatabasePromise.js");

// Static (i.e. shared by all objects) Class Properties
//let friends = [];

class FriendsModel {

    constructor() {
        this.friends = [];
    }

    // Get friends from DB and put in object var
    fetchFriends(aCallback) {
        let database = new Database();
        database.query(`SELECT * FROM friends`)
            .then((err, rows) => {
                if (rows != undefined) {
                    // map the rows into the array of objects
                    this.friends = rows.map(r => ({
                        "name": r.name,
                        "photo_url": r.photo_url,
                        "answers": JSON.parse(r.answers)
                    }));
                    // Send it back to requestor in completion handler callback
                    aCallback(this.friends);
                }
            })
            .catch(err => {
                console.log(`error inserting into friends ${err}`);
            });;
        database.close();
    }

    // When you add, immediate get that one back so you can put in friends array
    addFriend(profile, aCallback) {
        let database = new Database();
        const query_cmd =
            `INSERT INTO friends (name, photo_url, answers)
            VALUES ("${profile.name}", "${profile.photo_url}", "${JSON.stringify(profile.answers)}");`;

        database.query(query_cmd)
            .then((err, rows) => {
                this.friends.push(profile);

                aCallback(this.friends);
            })
            .catch(err => {
                console.log(`error inserting into friends ${err}`);
            });

        database.close();
    }

}

module.exports = FriendsModel;