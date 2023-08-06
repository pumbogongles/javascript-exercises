const leapYears = function(year) {
    // can be divided by 4
    // cannot be divided by 100, unless it can be divided by 400
    let divideBy4 = true;
    let divideBy100 = true;
    let divideBy400 = true;

    if (year%4 == 0) {
        divideBy4 = true;
    } else {
        divideBy4 = false;
    }

    if (year%100 == 0) {
        divideBy100 = true;
    } else {
        divideBy100 = false;
    }

    if (year%400 == 0) {
        divideBy100 = false;
    }

    if (divideBy4 && divideBy100 == false) {
        return true;
    } else {
        return false;
    }



};

// Do not edit below this line
module.exports = leapYears;
