const convertToCelsius = function(x) {
  fToC = Math.round(((x-32) * 0.5556) * 10) / 10
  
  return fToC;
  
};

const convertToFahrenheit = function(x) {
  cToF = Math.round(((x * 9/5) + 32) * 10) / 10

  return cToF;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
