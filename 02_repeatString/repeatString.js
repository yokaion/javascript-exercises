let string = "hey";
let errorN = "ERROR";

const repeatString = function(string, num) {
    for (i = 0; i < num; i++){
            return string.repeat(num); 
    }

    if(num == 0){
        return string.repeat(num);
    }else if(Math.sign(num) == -1 || Math.sign(num) == -0){
        return "ERROR";
    }
};

// Do not edit below this line
module.exports = repeatString;
