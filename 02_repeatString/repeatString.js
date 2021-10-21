let string = "hey";
let underScore = " ";
let errorN = "Error";

const repeatString = function(string, num) {
    for (i = 0; i < num; i++){
        if(num == 0){
            return underScore;
        }else if(Math.sign(num) == -1 || Math.sign(num) == -0){
            return errorN;
        }else {
            return string.repeat(num); 
        }
    }
};

// Do not edit below this line
module.exports = repeatString;
