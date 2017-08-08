const path = require("path"),
    jsonfile = require("jsonfile");

const file = path.join(__dirname, "peerFeedback.json");

const allFeedback = jsonfile.readFileSync(file);

$ = require("jquery");

var Feedback = function(timestamp, reviwerName, projectName, presentation, techIntegration, frontEnd, backEnd, collaboration, impressive, improvement, addNotes) {
    this.timestamp = timestamp,
        this.reviwerName = reviwerName,
        this.projectName = projectName,
        this.presentation = presentation,
        this.techIntegration = techIntegration,
        this.frontEnd = frontEnd,
        this.backEnd = backEnd,
        this.collaboration = collaboration,
        this.impressive = impressive,
        this.improvement = improvement,
        this.addNotes = addNotes
}

// RECOMMENDATION FUNCTION

function feedbackParse(allFeedback) {

    // console.log(allFeedback[1].Your_Name);

    var allFeedbackSize = Object.keys(allFeedback).length;

    for (var i = 0; i < allFeedbackSize; ++i) {

        var reviwerName = allFeedback[i].Your_Name;
        var projectName = allFeedback[i].Name_of_project;
        var presentation = allFeedback[i].How_was_their_presentation;
        var techIntegration = allFeedback[i].How_was_their_use_and_integration_of_technologies;
        var frontEnd = allFeedback[i].How_was_the_front_end_design;
        var backEnd = allFeedback[i].How_was_the_back_end_functionality;
        var collaboration = allFeedback[i].How_was_their_collaboration;
        var impressive = allFeedback[i].What_impressed_you_most_about_this_project;
        var improvement = allFeedback[i].What_are_some_areas_you_feel_this_team_or_project_could_use_improvement_on;
        var addNotes = allFeedback[i].Any_additional_notes;

        feedback = new Feedback(reviwerName, projectName, presentation, techIntegration, frontEnd, backEnd, collaboration, impressive, improvement, addNotes);
    }
};

feedbackParse(allFeedback);

// var count = 1;

//     var reviwerNameRow = $("<tr id=\"reviwerName" + count + "\">");

//     // CELL - TRAIN NAME
//     var projectNameCell = $("<td id=\"projectName" + count + "\"");

//     // CELL - DESTINATION
//     var presentationCell = $("<td id=\"presentation" + count + "\">");

//     // CELL - FREQUENCY
//     var techIntegrationCell = $("<td id=\"techIntegration" + count + "\">");

//     // CELL - TIME OF TRAIN'S NEXT ARRIVAL
//     var frontEndCell = $("<td id=\"frontEnd" + count + "\">");

//     // CELL - MINUTES UNTIL TRAIN'S NEXT ARRIVAL
//     var backEndCell = $("<td id=\"backEnd" + count + "\">");

//     function displayTable() {

//         // Append cells to row.
//         reviwerNameRow.append(projectNameCell);

//         reviwerNameRow.append(presentationCell);

//         reviwerNameRow.append(techIntegrationCell);

//         reviwerNameRow.append(frontEndCell);

//         reviwerNameRow.append(backEndCell);

//         $("#feedbackDisplay").append(reviwerNameRow);

//         $("#reviwerName1").text(feedback1.reviwerName);
//     }

//     displayTable();
