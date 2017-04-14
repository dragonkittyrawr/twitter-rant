var rantParse = [];
var rantCharCount = [];
var tweetCount;
var wordCount = 0;
var count;

$("#rantSubmit").on("click", function(event) {
    // Prevent page refresh.
    event.preventDefault();
    rantRaw = $("#rantRaw").val();
    console.log(rantRaw);
    rantParse = rantRaw.split(" ");
    console.log(rantParse);
    rantCharCount = rantRaw.split("");
    console.log(rantCharCount.length);



    tweetParser(rantRaw, rantParse, rantCharCount);
});

function tweetParser(rantRaw, rantParse, rantCharCount) {


    if (rantCharCount.length > 99) {
        tweetCount = Math.round(rantCharCount.length / 135);
        console.log(tweetCount);
    } else if (rantCharCount.length < 99 && rantCharCount.length > 9) {
        tweetCount = (rantCharCount.length / 136);
        console.log(tweetCount);
    } else {
        tweetCount = (rantCharCount.length / 137);
        console.log(tweetCount);
    };

    // BUILD TWEETCOUNT

    for (var p = 0; p < tweetCount; p++) {
        count = p + 1;
        console.log(count + "/" + tweetCount);
    }

    // BUILD WORDCOUNT

    for (var i = 0; i < rantParse.length; i++) {
        console.log(rantParse[i].length);
        wordCount += rantParse[i].length + 1;
        console.log(wordCount);

        if (wordCount < 140) {
            window["tweet" + count] = [];
            window["tweet" + count].push(rantParse[i]);
            
        }
    }

    console.log("Tweet " + count + ": " + window["tweet" + count]);


};
