// //###============================#####
// //###----------EXPLANATION-------#####
// //###============================#####

//we can also use "moments" which is a third party library to solve this problem, 
//it provides variety of functions to format the date, and it is a good library 
//for localisation. 

function checkBiggerDate(first, second) {
    //validity of date is already checked in question no 2. file name is isValidDate
    var first_Entry = first.split('-');
    var second_Entry = second.split('-');

    var firstDate = new Date();
    firstDate.setFullYear(first_Entry[0], (first_Entry[1] - 1), first_Entry[2]);

    var secondDate = new Date();
    secondDate.setFullYear(second_Entry[0], (second_Entry[1] - 1), second_Entry[2]);

    if (firstDate > secondDate) {
        return firstDate;
    }
    else {
        return secondDate;
    }
}

console.log(checkBiggerDate("2012-05-12", "2014-07-12"))