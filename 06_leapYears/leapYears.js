const leapYears = function(year) {

    const divFour = year % 4 === 0;
    const divHun = year % 100 === 0;
    const divFourHun = year % 400 === 0;
    
    if (divFour && (!divHun || divFourHun)) {
        return true
    } else {
        return false
    }
};

// Do not edit below this line
module.exports = leapYears;
