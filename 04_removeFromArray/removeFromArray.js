
const removeFromArray = function(...args) {
    const arr = args[0];
    return arr.filter(elem => !args.includes(elem));
};

// Do not edit below this line
module.exports = removeFromArray;
