const repeatString = function(repeat, num) {
    if (Math.sign(num) == 1 || Math.sign(num) == 0) {
        return repeat.repeat(num)
    } else {
        return "ERROR"
    }
    
};

// Do not edit below this line
module.exports = repeatString;
