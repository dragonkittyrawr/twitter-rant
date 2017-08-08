// ***************************************************************
// api-routes.js - this file offers a set of routes for displaying and saving data to the db
// ***************************************************************
// Dependencies
// =============================================================
var express = require("express");
var router = express.Router();
var feedbackParse = require("../feedbackParse.js");
var path = require("path");

// Routes
// =============================================================
//display index page

router.get('/', function(req, res) {
    const path = require("path"),
        jsonfile = require("jsonfile");

    const file = path.join(__dirname, "../peerFeedback.json");

    const allFeedback = jsonfile.readFileSync(file);

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

            feedback1 = new Feedback(reviwerName, projectName, presentation, techIntegration, frontEnd, backEnd, collaboration, impressive, improvement, addNotes);
        }
    };

    feedbackParse(allFeedback);

    // console.log("feedback ", req);

    res.json(allFeedback);
});

module.exports = router;
