function getAverage (a,b){

    var average = (a + b) / 2;  //Local variable
    console.log( average );
    return average; 

}

var myResult = getAverage (7,8);    //Global variable
console.log("The average is "+ myResult);