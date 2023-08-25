// const getTheTitles = function(arrayDataHere) {
//     let mappedOutArray = arrayDataHere.map(
//         (book) => book.title)
//     return mappedOutArray;
// };

const getTheTitles = function(arrayDataHere) {

    let findBookTitles = function(book){ 
        return book.title
    }

    let mappedOutArray = arrayDataHere.map(findBookTitles) // ['Book', 'Book2']

    return mappedOutArray
};

// Do not edit below this line
module.exports = getTheTitles;
