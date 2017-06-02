var twitter = {

    rantParse: [],
    rantCharCount: [],
    tweetCount: 0,
    charCount: 0,
    tweets: 0,
    count: 1,
    index: 0,
    rantCharCountLength: 0,
    ix: 0,

    tweetParser: function(rantRaw, rantParse, rantCharCount) {
        this.rantParse = rantParse;
        this.rantCharCount = rantCharCount;
        this.rantRaw = rantRaw;

        // DETERMINE number of tweets

        if (rantCharCount.length > 99) {
            tweetCount = Math.ceil(rantCharCount.length / 135);
            console.log("tweetCount: " + tweetCount);
            console.log("rantCharCount " + this.rantCharCount);
            this.rantCharCountLength = 135;
            for (let i = 0; i < tweetCount; i++) {
                this.index = 0;
                tweets = i + 1;
                window["tweet" + tweets] = [];
                window["tweet" + tweets].push(tweets + "/" + tweetCount);
                twitter.tweetBuilder();
            }
        } else if (rantCharCount.length < 99 && rantCharCount.length > 9) {
            tweetCount = Math.ceil(rantCharCount.length / 136);
            console.log("tweetCount: " + tweetCount);
            console.log("rantCharCount " + this.rantCharCount);
            this.rantCharCountLength = 136;
            for (let i = 0; i < tweetCount; i++) {
                this.index = 0;
                tweets = i + 1;
                window["tweet" + tweets] = [];
                window["tweet" + tweets].push(tweets + "/" + tweetCount);
                twitter.tweetBuilder();
            }
        } else {
            tweetCount = Math.ceil(rantCharCount.length / 137);
            console.log("tweetCount: " + tweetCount);
            console.log("rantCharCount " + this.rantCharCount);
            this.rantCharCountLength = 137;
            for (let i = 0; i < tweetCount; i++) {
                this.index = 0;
                tweets = i + 1;
                window["tweet" + tweets] = [];
                window["tweet" + tweets].push(tweets + "/" + tweetCount);
                twitter.tweetBuilder();
            }
        };
    },

    tweetBuilder: function() {

        // BUILD tweetCount

        this.charCount += window["tweet" + tweets][0].length;
        console.log(window["tweet" + tweets]);
        console.log(this.charCount);
        // this.count++;

        // BUILD tweets

        while (this.charCount < this.rantCharCountLength && rantParse[this.ix] !== undefined) {

            this.charCount += rantParse[this.ix].length + 1;

            window["tweet" + this.count].splice(this.index, 0, this.rantParse[this.ix]);
            this.ix++;
            this.index++;


        };

        console.log(window["tweet" + this.count].join(" "));
        this.count++;
        this.charCount = 0;
    }
};

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
