const sumAll = function (int1, int2) {
    sumOfAllFrom = 0;
    if (Math.sign(int1) == -1 || Math.sign(int2) == -1 || !Number.isInteger(int1) || !Number.isInteger(int2)) {
        sumOfAllFrom = "ERROR"
    } else if (int1 < int2) {
        for (i = int1; i < int2 + 1; i++) {
            sumOfAllFrom += i;
        }
    } else if (int2 < int1) {
        for (i = int2; i < int1 + 1; i++) {
            sumOfAllFrom += i;
        }
    } else {
        sumOfAllFrom = "ERROR";
    }

    return sumOfAllFrom;
};

// Do not edit below this line
module.exports = sumAll;
