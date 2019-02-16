"use strict";

// Capture the form inputs
$("#submit").on("click", function (event) {
    event.preventDefault();

    // Form validation
    function validateForm() {
        var isValid = true;
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

    // If all required fields are filled
    if (validateForm()) {
        // Create an object for the user"s data
        var userData = {
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

        // AJAX post the data to the friends API.
        $.post("/api/friends", userData, function (data) {

            // Grab the result from the AJAX post so that the best match's name and photo are displayed.
            $("#match-name").text(data.name);
            $("#match-score").text(data.score);
            $("#match-img").attr("src", data.photo_url);

            // Show the bootstrap modal dialog with the best match
            $("#results-modal").modal("toggle");

        });
    } else {
        alert("Please fill out all fields before submitting!");
    }
});


$("#getOrder").on("click", function (event) {
    event.preventDefault();

    // If all required fields are filled
    // Create an object for the user"s data
    var userData = {
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

    // AJAX post the data to the friends API.
    $.post("/api/friendsCloseness", userData, function (data) {
        let myjson = JSON.stringify(data, null, 4);
        console.log(myjson);

        // show in a popup window
        var x = window.open();
        x.document.open();
        x.document.write('<html><body><pre>' + myjson + '</pre></body></html>');
        x.document.close();
    });
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
