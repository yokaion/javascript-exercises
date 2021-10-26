const leapYears = function(year) {
    //Check if year is divisible by 4 or 400;
    if(year % 4 == 0 && year % 100 != 0 ||
        year % 400 == 0){
            return true;
    }else {
        return false;
    }

};

// Do not edit below this line
module.exports = leapYears;
