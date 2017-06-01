var twitter = {

    rantParse: [],
    rantCharCount: [],
    tweetCount: 0,
    wordCount: 0,
    tweets: 0,
    count: 1,

    tweetParser: function(rantRaw, rantParse, rantCharCount) {
        this.rantParse = rantParse;
        this.rantCharCount = rantCharCount;
        this.rantRaw = rantRaw;

        if (rantCharCount.length > 99) {
            tweetCount = Math.round(rantCharCount.length / 135);
            console.log("tweetCount: " + tweetCount);
        } else if (rantCharCount.length < 99 && rantCharCount.length > 9) {
            tweetCount = (rantCharCount.length / 136);
            console.log("tweetCount: " + tweetCount);
        } else {
            tweetCount = (rantCharCount.length / 137);
            console.log("tweetCount: " + tweetCount);
        };

        // BUILD tweetCount

        for (var p = 0; p < tweetCount; p++) {
            tweets = p + 1;
            console.log(tweets + "/" + tweetCount);
        };

        // BUILD wordCount

        for (var i = 0; i < rantParse.length; i++) {
            // console.log("rantParse[i].length: " + rantParse[i].length);
            this.wordCount += rantParse[i].length + 1;
            console.log("wordCount: " + this.wordCount);


            if (this.wordCount < 140) {

                window["tweet" + this.count].push(this.rantParse[i]);
                console.log(this.rantParse[i]);
                console.log("Tweet " + this.count + ": ");
                console.log(window["tweet" + this.count]);

            }
        };
    }
};

window["tweet" + twitter.count] = [];

// GET RANT

$("#rantSubmit").on("click", function(event) {
    // PREVENT PAGE REFRESH
    event.preventDefault();

    // CREATE rantRaw
    rantRaw = $("#rantRaw").val();
    console.log("rantRaw: " + rantRaw);

    // CREATE rantParse
    rantParse = rantRaw.split(" ");
    console.log("rantParse: " + rantParse);

    // CREATE rantCharCount
    rantCharCount = rantRaw.split("");
    console.log("rantCharCount: " + rantCharCount.length);

    twitter.tweetParser(rantRaw, rantParse, rantCharCount);
});
