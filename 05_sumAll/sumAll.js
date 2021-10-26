const sumAll = function(a, b) {
    //create an array for elements between a and b;
    const arr = [];
    for (let i = a; i <= b; i++){
        arr.push(i);
    }
    //sum all elements in the array;
    let sumArr = 0;
    for (const i of arr){
        sumArr += i;
    }
    return sumArr;

};

// Do not edit below this line
module.exports = sumAll;
