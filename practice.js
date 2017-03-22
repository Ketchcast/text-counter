calculate(["a", "b"]);
calculate(["a", "c"]);

function calculate(result) {
    for (var i = 0; i < result.length; i++) {
        var check = 0;
        for (var j = 0; j < words.length; j++) {
            if (result[i] == words[j]) {
                check = 1;
                ++counts[j];
            }
        }
        if (check == 0) {
            words.push(result[i]);
            counts.push(1);
        }
        check = 0;
    }
}

var stringOfWords = "these are the unique, unique words."

// remove all punctuation, from googling ("javascript replace punction")
var stringNoPunctuation = stringOfWords.replace(/[^\w\s]|_/g, "").replace(/\s+/g, " ")

// split stringNoPunctuation into an array to loop over
var words = stringNoPunctuation.split(' ')

// start an object to keep track of our unique words
var uniques = {}

for(var i = 0; i < words.length; i++) {
    
    // set up a variable for clearer code
    var word = words[i]

    // check if the word exists in the uniques object 
    if(!uniques[word]) {
        
        // Its not there?!?!?!? We add it
        uniques[word] = word
    }
}

// Number of keys/words in uniques object after we have looked at all the words
console.log("This many unique words: ", Object.keys(uniques).length)


calculate(["a", "b"]);
calculate(["a", "c"]);

function calculate(result) {
    for (var i = 0; i < result.length; i++) {
        var check = 0;
        for (var j = 0; j < words.length; j++) {
            if (result[i] == words[j]) {
                check = 1;
                ++counts[j];
            }
        }
        if (check == 0) {
            words.push(result[i]);
            counts.push(1);
        }
        check = 0;
    }
}