class FriendsData {

    constructor() {
        this.friends = [];
    }

    fetchFriends() {
        this.friends = [{
                "name": "Madonna",
                "photo_url": "https://pmcvariety.files.wordpress.com/2018/12/rexfeatures_8773364av.jpg?w=1000&h=563&crop=1",
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
                "name": "Kate Bush",
                "photo_url": "http://www.alwaysontherun.net/katebushtop7.jpg",
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
                "name": "Annie Lennox",
                "photo_url": "https://i.pinimg.com/originals/2f/59/e3/2f59e31ae4559c04944cbac90dada75e.jpg",
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
                "name": "Dana Perino",
                "photo_url": "https://upload.wikimedia.org/wikipedia/commons/thumb/9/97/Dana_Perino_%2825238814459%29.jpg/440px-Dana_Perino_%2825238814459%29.jpg",
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
                "name": "Sarah Eisen",
                "photo_url": "https://fm.cnbc.com/applications/cnbc.com/resources/img/editorial/2016/09/16/103946525-EISEN_S_-481_RGB_sat.240x240.jpg?v=1530023158",
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
                "name": "Morgan Brennan",
                "photo_url": "https://fm.cnbc.com/applications/cnbc.com/resources/img/editorial/2017/02/27/104308096-BRENNAN_M-458_D_RGB.240x240.jpg?v=1488234122",
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
                "name": "Julia Boorstin",
                "photo_url": "https://fm.cnbc.com/applications/cnbc.com/resources/img/editorial/2016/10/10/104006133-BOORSTIN_J_-174_RGB.240x240.jpg?v=1530023021",
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
                "name": "Kelly Evans",
                "photo_url": "https://fm.cnbc.com/applications/cnbc.com/resources/img/editorial/2016/10/10/104006180-EVANS_K_-983_RGB.240x240.jpg?v=1531137034",
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
                "name": "Becky Quick",
                "photo_url": "https://fm.cnbc.com/applications/cnbc.com/resources/img/editorial/2016/10/10/104006275-QUICK_B_-337_RGB_sat.1910x1000.jpg",
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