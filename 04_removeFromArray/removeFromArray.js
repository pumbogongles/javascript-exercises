const removeFromArray = function(arr, ...args) {
    const newArray = []; //creation of a new array

    arr.forEach((item) => {
        if (!args.includes(item)) {
            newArray.push(item)
        }
    })
    
    return newArray;


};



// Do not edit below this line
module.exports = removeFromArray;
