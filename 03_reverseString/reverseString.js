const reverseString = function(string) {
    const array = Array.from(string);
    const reverse = array.reverse();
    const join = reverse.join("");
    return join;


};

// Do not edit below this line
module.exports = reverseString;
