const FriendsData = require("./FriendsData.js");
const FriendsModel = require("./FriendsModel.js");
class FriendFinder {
    // When constructeed, it gets data from chosen datasource
    constructor() {
        this.datasource = 0; // 0==memory, 1==SQL, 2==Firebase
        this.friendsData = new FriendsData();
        this.friendsModel = new FriendsModel();

        this.getFriendsFromDataSource();
    }

    // Call the function for the chosen datasources
    getFriendsFromDataSource() {
        switch (this.datasource) {
            case 0:
                this.friendsData.fetchFriends();
                break;
            case 1:
                this.friendsModel.fetchFriends();
                break;
        }
    }

    // find diff for 2 profiles
    findDifference(a, b) {
        let score = 0;

        for (let i in a.answers) {
            score += Math.abs(b.answers[i] - a.answers[i]);
        }

        return score;
    }

    addFriend(profile) {
        switch (this.datasource) {
            case 0:
                this.friendsData.addFriend(profile);
                break;
            case 1:
                this.friendsModel.addFriend(profile);
                break;
        }
    }

    getFriends() {
        switch (this.datasource) {
            case 0:
                return this.friendsData.friends;
                break;
            case 1:
                return this.friendsModel.friends;
                break;
        }
    }

    // Go through all the other folks and find out who is the most compatible
    findBestFriend(profile) {
        // The lower the difference in compatibility, the better
        const friends = this.getFriends();

        friends.sort((a, b) => {
            this.findDifference(a, profile) - this.findDifference(b, profile);
        });

        console.log(friends[0]);
        
        return friends[0];
    }
}

module.exports = FriendFinder;