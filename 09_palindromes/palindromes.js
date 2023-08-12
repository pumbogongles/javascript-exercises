const palindromes = function (word) {
    let modifiedString = word.toLowerCase().replace(/[^a-z0-9]/g, "");
    let reversedModifiedString = modifiedString.split("").reverse().join("");

    if (modifiedString == reversedModifiedString) {
        return true;
    } else {
        return false;
    }
};
// Do not edit below this line
module.exports = palindromes;
