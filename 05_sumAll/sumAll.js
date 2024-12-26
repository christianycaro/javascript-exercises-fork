const sumAll = function(num1, num2) {
    let numbers = [];
    let sum = 0;

    function integerCheck(val1, val2) {
        if(val1 % 1 !== 0) {
            return false
        } else if(val2 % 1 !== 0) {
            return false
        } else if(val1 < 0 || val2 < 0) {
            return false
        } else if(typeof val1 !== 'number' || typeof val2 !== 'number') {
            return false
        }
    }

    if(integerCheck(num1, num2) === false) {
        return "ERROR"
    } else if(num1 < num2) {
        for(i = num1; i <= num2; i++) {
            numbers.push(i);
        }
    } else if(num1 > num2) {
        for(i = num1; i >= num2; i--) {
            numbers.push(i)
        }
    } 

     for(let i = 0; i < numbers.length; i++) {
        sum += numbers[i];
    } 

    return sum;
};

//take 2 integers
//return numbers between integers
//if smaller number first increment until reaches value of larger number
//if larger number first decrement until reaches value of smaller number
//add all of the numbers

// Do not edit below this line
module.exports = sumAll;
