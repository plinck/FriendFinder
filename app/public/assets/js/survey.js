"use strict";

// check for valid URL
function isValidURL(str) {
    let pattern = new RegExp('^((ft|htt)ps?:\\/\\/)?' + // protocol
        '((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|' + // domain name and extension
        '((\\d{1,3}\\.){3}\\d{1,3}))' + // OR ip (v4) address
        '(\\:\\d+)?' + // port
        '(\\/[-a-z\\d%@_.~+&:]*)*' + // path
        '(\\?[;&a-z\\d%@_.,~+&:=-]*)?' + // query string
        '(\\#[-a-z\\d_]*)?$', 'i'); // fragment locator

    return (pattern.test(str));
}

// Form validation
function validateForm() {
    let isValid = true;
    $(".form-control").each(function () {
        if ($(this).val() === "") {
            isValid = false;
        }
    });

    $(".chosen-select").each(function () {
        if ($(this).val() === "") {
            isValid = false;
        }
    });
    return isValid;
}

// Extract form data
function getFormData() {
    let formData = {
        name: $("#name").val(),
        photo_url: $("#photo").val(),
        answers: [
            $("#q1").val(),
            $("#q2").val(),
            $("#q3").val(),
            $("#q4").val(),
            $("#q5").val(),
            $("#q6").val(),
            $("#q7").val(),
            $("#q8").val(),
            $("#q9").val(),
            $("#q10").val()
        ]
    };
    return formData;
}

// Capture the form inputs
$("#submit").on("click", function (event) {
    event.preventDefault();

    // If all required fields are filled
    if (validateForm()) {

        if (isValidURL($("#photo").val())) {
            // Create an object for the user"s data
            let surveyData = getFormData();

            // AJAX post the data to the friends API.
            $.post("/api/friends", surveyData, function (data) {

                // Grab the result from the AJAX post so that the best match's name and photo are displayed.
                $("#match-name").text(data.name);
                $("#match-score").text(data.score);
                $("#match-img").attr("src", data.photo_url);
                $("#match-img").attr("alt", `${data.photo_url} Photo`);

                // Show the bootstrap modal dialog with the best match
                $("#results-modal-dialog").modal("toggle");

            });
        } else {
            alert("Please fill in Valid URL for photo");
        }
    } else {
        alert("Please fill out all fields");
    }
});


$("#submitShowALL").on("click", function (event) {
    event.preventDefault();

    // If all required fields are filled
    if (validateForm()) {

        if (isValidURL($("#photo").val())) {
            // Create an object for the user"s data
            let surveyData = getFormData();

            // AJAX post the data all the friends and how close they are
            $.post("/api/friendsCloseness", surveyData, function (data) {
                let myjson = JSON.stringify(data, null, 4);
                console.log(myjson);

                // Grab the results and build this display list
                let friendsDiv = "";
                for (let i in data) {
                    friendsDiv += `
                <div class="row">
                    <div class="col-sm-4">${data[i].name}</div>
                    <div class="col-sm-4">${data[i].score}</div>
                    <div class="col-sm-4">
                        <img width="64px" src="${data[i].photo_url}" alt="">
                    </div>
                </div>
                `;
                }

                $(`#all-friends`).html(friendsDiv);
                // Show the bootstrap modal dialog with the best match
                $("#modal-dialog-list").modal("toggle");
            });

        } else {
            alert("Please fill in Valid URL for photo");
        }
    } else {
        alert("Please fill out all fields before submitting!");
    }
});

// Load all the questions 
function questionsRender() {
    const questions = [
        "Your mind is always buzzing with unexplored ideas and plans.",
        "Generally speaking, you rely more on your experience than your imagination.",
        "You find it easy to stay relaxed and focused even when there is some pressure.",
        "You rarely do something just out of sheer curiosity.",
        "People can rarely upset you.",
        "It is often difficult for you to relate to other people’s feelings.",
        "In a discussion, truth should be more important than people’s sensitivities.",
        "You rarely get carried away by fantasies and ideas.",
        "You think that everyone’s views should be respected regardless of whether they are supported by facts or not.",
        "You feel more energetic after spending time with a group of people."
    ];
    let questionDiv = "";

    $(`#questions`).empty();

    for (let i in questions) {
        questionDiv += `<h3><strong>Question ${parseInt(i)+1}</strong></h3>
        <h4>${questions[i]}</h4>
        <select class="chosen-select" id="q${parseInt(i)+1}">
            <option value=""></option>
            <option value="1">1 (Strongly Disagree)</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5 (Strongly Agree)</option>
        </select>`;
    }

    $(`#questions`).html(questionDiv);
}

// MAIN START
questionsRender();