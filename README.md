# Friend Finder - Node and Express Servers

## Overview

This is a Friend Finder application.  It is not a dating app.  The user answers 10 survey questions and the backend compares those survey results to all the other people who filled out the survey and shows them their closest friend match.  It displays that match in a bootstrap model dialog.  There is also an option to display ALL the friends who filled out the survey in order of how close they are to you in survey results.  The lower the number / score, the closer the match they are to you.  That `score` for you vs a single freind is determined by subtracting each answer you picked from each answer a friend picked and taking the absolute value.  Those values are totalled for all the answers which gives your match a score.

It uses HTML/CSS/Javascript and Bootstrap on the front end and Node/Express on the backend.  I have an in memory backend and an optional MySQL backend.  Two ES6 classes are swapped in and out to determine which backend storage is used.

## Links

* [Live Portfolio Page](https://plinck.github.io/My-Portfolio/)
* [GitHub for this](https://github.com/plinck/FriendFinder)

## Technologies Used

* [x] HTML/CSS/Javascript/JQuery/Bootstrap
* [x] SQL (JawsDB on heroku and Local mySQL DB)
* [x] Node.js, Express, Path

## Screenshots

![ss1](images/ss1.png)

### Design

1. The survey has 10 questions. Each answer is on a scale of 1 to 5 based on how much the user agrees or disagrees with a question.

2. `htmlRoutes.js` serves up the html files

3. `apiRoutes.js` handles all the data and repsonds with JSON

4. Data is saved in a Javascript file of `app/data/friendsData.js` as an array of objects. I also created an SQL interface in `app/data/friendsModel.js`.  Which one is used in determined by the require at the top of the `findFriends.js` file.
  
5. The user's most compatible friend is determined by calculating a score for each friend. I compare each answer you picked to each answer a friend picked and taking the absolute value of the difference.  Those are totalled for all the answers which gives your match a `score`.  Lowest score is closest match.

6. The user's most compatible friend is displayed the result as a modal pop-up.
   * The modal displays both the name and picture of the closest match.

- - -