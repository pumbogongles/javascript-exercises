const fibonacci = function (n) {
    //1, 2, 3, 4, 5, 6, 7,  8,  9,  10, 11, 12
    //0, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144.

    // function(6)
    if (n < 0) {
        return "OOPS"
        
    } else {

        const arr = [0, 1]
        for (i = 2; i < n; i++) {
            arr[i] = arr[i - 1] + arr[i - 2]
        }
        return (arr[arr.length - 1] + arr[arr.length - 2])

    }
};

// Do not edit below this line
module.exports = fibonacci;
