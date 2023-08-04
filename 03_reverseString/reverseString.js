const reverseString = function(word) {
    let arrayOfWord = word.split("")
    let reverseWord = arrayOfWord.reverse();
    let joinWord = reverseWord.join("");
    return joinWord;
};

console.log(reverseString("Hello"))

// Do not edit below this line
module.exports = reverseString;
