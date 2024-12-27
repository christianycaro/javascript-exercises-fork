const convertToCelsius = function(F) {
const toCel = (F- 32) * (5) / (9);
return parseFloat(toCel.toFixed(1));
};

const convertToFahrenheit = function(C) {
const toFahr = (C * 9 / 5) + 32;
return parseFloat(toFahr.toFixed(1));
};

//


// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
