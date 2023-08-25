const findTheOldest = function(arrayData) {
  /*
  0 - Create a function to find out how old someone was before they died
  1 - Find out how old everyone is by taking yearOfDeath minus yearOfBirth
  2 - Compare the results. name with the biggest number is the oldest, return it
  */
 return arrayData.reduce((oldestPerson, currentPerson) => {
  let oldestAge = yearsAlive(oldestPerson.yearOfBirth, oldestPerson.yearOfDeath)
  let currentAge = yearsAlive(currentPerson.yearOfBirth, currentPerson.yearOfDeath)

  if (oldestAge < currentAge) {
    return currentPerson
  }
    else {
      return oldestPerson
    }
  })
 }



const yearsAlive = function(birthYear, deathYear) {
  if (deathYear == null) {
    deathYear = new Date().getFullYear();
  }
  return deathYear - birthYear
}
// Do not edit below this line
module.exports = findTheOldest;
