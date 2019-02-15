class FriendsData {

    constructor() {
        this.friends = [];
    }

    fetchFriends() {
        this.friends = [{
                "name": "Ahmed",
                "photo_url": "https://media.licdn.com/mpr/mpr/shrinknp_200_200/AAEAAQAAAAAAAAq7AAAAJDAwYzI4NTQ4LWYwZWUtNGFkYS1hNTYwLTZjYzkwY2ViZDA3OA.jpg",
                "answers": [
                    "5",
                    "1",
                    "4",
                    "4",
                    "5",
                    "1",
                    "2",
                    "5",
                    "4",
                    "1"
                ]
            },
            {
                "name": "Jacob Deming",
                "photo_url": "https://pbs.twimg.com/profile_images/691785039043022849/oWsy8LNR.jpg",
                "answers": [
                    "4",
                    "2",
                    "5",
                    "1",
                    "3",
                    "2",
                    "2",
                    "1",
                    "3",
                    "2"
                ]
            },
            {
                "name": "Jeremiah Scanlon",
                "photo_url": "https://avatars2.githubusercontent.com/u/8504998?v=3&s=460",
                "answers": [
                    "5",
                    "2",
                    "2",
                    "2",
                    "4",
                    "1",
                    "3",
                    "2",
                    "5",
                    "5"
                ]
            },
            {
                "name": "Louis T. Delia",
                "photo_url": "https://pbs.twimg.com/profile_images/639214960049000449/lNCRC-ub.jpg",
                "answers": [
                    "3",
                    "3",
                    "4",
                    "2",
                    "2",
                    "1",
                    "3",
                    "2",
                    "2",
                    "3"
                ]
            },
            {
                "name": "Lou Ritter",
                "photo_url": "https://media.licdn.com/mpr/mpr/shrinknp_400_400/AAEAAQAAAAAAAAkDAAAAJDhhZTI5NTk2LWQzZjUtNDJjZi1hMTM2LTQ3ZjNmYjE0YmY2NA.jpg",
                "answers": [
                    "4",
                    "3",
                    "4",
                    "1",
                    "5",
                    "2",
                    "5",
                    "3",
                    "1",
                    "4"
                ]
            },
            {
                "name": "Jordan Biason",
                "photo_url": "https://media.licdn.com/mpr/mpr/shrinknp_400_400/AAEAAQAAAAAAAAisAAAAJGUxYzc4YzA0LWQxMzUtNGI4NS04YTFiLTkwYzM0YTZkNzA2NA.jpg",
                "answers": [
                    "4",
                    "4",
                    "2",
                    "3",
                    "2",
                    "2",
                    "3",
                    "2",
                    "4",
                    "5"
                ]
            },
            {
                "name": "bruce",
                "photo_url": "https://upload.wikimedia.org/wikipedia/commons/thumb/5/56/Deftones_-_Rock_am_Ring_2016_-2016156214055_2016-06-04_Rock_am_Ring_-_Sven_-_1D_X_-_0078_-_DV3P9737_mod.jpg/450px-Deftones_-_Rock_am_Ring_2016_-2016156214055_2016-06-04_Rock_am_Ring_-_Sven_-_1D_X_-_0078_-_DV3P9737_mod.jpg",
                "answers": [
                    "3",
                    "3",
                    "3",
                    "3",
                    "3",
                    "3",
                    "3",
                    "3",
                    "3",
                    "2"
                ]
            },
            {
                "name": "Joseph Cerankowski",
                "photo_url": "http:",
                "answers": [
                    "3",
                    "3",
                    "3",
                    "3",
                    "3",
                    "3",
                    "3",
                    "3",
                    "3",
                    "3"
                ]
            },
            {
                "name": "jsamson",
                "photo_url": "ASasAS.PNG",
                "answers": [
                    "1",
                    "1",
                    "1",
                    "1",
                    "1",
                    "1",
                    "1",
                    "1",
                    "1",
                    "1"
                ]
            }
        ];
    } //get friends

    // Add tp array
    addFriend(profile) {
        this.friends.push(profile);
    }

} //class

module.exports = FriendsData;