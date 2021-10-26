const sumAll = function(a, b) {
    //create an array for elements between a and b;
    const arr = [];
    
    if(isNaN(a)||isNaN(b)||
        Math.sign(a)===-1||Math.sign(b)===-1||
        typeof a === "string"||typeof b === "string"){
        return "ERROR";
    }else if(a < b){
        for (let i = a; i <= b; i++){
            arr.push(i);
        }
    }else if(a > b){
        for (let i = b; i <= a; i++){
            arr.push(i);
        }
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
