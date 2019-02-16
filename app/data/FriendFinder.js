// Uncomment the data storage method to use
// Currently in memory  (FriendsData) or SQL (FriendsModel)
const FriendsDataStore = require("./FriendsData.js");
// const FriendsDataStore = require("./FriendsModel.js");

class FriendFinder {
    // When constructeed, it gets data from chosen datasource
    constructor() {
        this.datasource = 0; // 0==memory, 1==SQL, 2==Firebase
        this.friendsDataStore = new FriendsDataStore();

        this.getFriendsFromDataSource();
    }

    // Call the function to fetch the data from the chosen datasource
    getFriendsFromDataSource() {
        this.friendsDataStore.fetchFriends();
    }

    addFriend(profile) {
        this.friendsDataStore.addFriend(profile);
    }

    getFriends() {
        return this.friendsDataStore.friends;
    }

    // find diff for 2 profiles
    findDifference(a, profile) {
        let score = 0;

        for (let i in a.answers) {
            score += Math.abs(profile.answers[i] - a.answers[i]);
        }

        return score;
    }

    // Go through all the other folks and find out who is the most compatible
    findBestFriend(profile) {
        // The lower the difference in compatibility, the better
        const friends = this.getFriends();

        friends.sort((a, b) => {
            return (this.findDifference(a, profile) - this.findDifference(b, profile));
        });

        let friendWithScore = friends[0];
        friendWithScore.score = this.findDifference(friends[0], profile);

        return friendWithScore;
    }

    getClosestFriendsInOrder(profile) {
        let friends = this.getFriends();

        // Add a score to each member of array
        friends.forEach((friend) => {
            let score = 0;
            for (let i in friend.answers) {
                score += Math.abs(profile.answers[i] - friend.answers[i]);
            }
            friend.score = score;
        });

        friends.sort((a, b) => {
            return (a.score - b.score);
        });

        return friends;
    }

}

module.exports = FriendFinder;