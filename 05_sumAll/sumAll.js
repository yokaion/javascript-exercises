const sumAll = function(a, b) {
    //create an array for elements between a and b;
    const arrAB = [];
    for (let i = a; i <= b; i++){
        arrAB.push(i);
    }
    //sum all elements in the array;
    let sumArr = 0;
    for (const val of arrAB){
        sumArr += val;
    }
    return sumArr;

};

// Do not edit below this line
module.exports = sumAll;
