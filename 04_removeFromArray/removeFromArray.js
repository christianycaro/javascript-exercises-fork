const removeFromArray = function(array) {
    let args = Array.from(arguments).slice(1);
    //creates array from arguments starting after the initial array argument
    for(let i = array.length - 1; i >= 0; i--) {
        //looping backwards through the array prevents issues with skipping over array elements
        for(const piece of args) {
            //from mdn looping lesson
            if (piece === array[i]) {
                array.splice(i, 1);
            }
        }
    }
    return array;
};

// Do not edit below this line
module.exports = removeFromArray;
