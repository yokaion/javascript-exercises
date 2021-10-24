
const removeFromArray = function(...args) {
    const arr = args[0];
    // filter() returns whatever elements that are not inluded in the args elements.
    return arr.filter(elem => !args.includes(elem));
};

// Do not edit below this line
module.exports = removeFromArray;
