//Return all the prime numbers in an array

var array = [11,15,14,19,10,12];

//using anonymous function.
 var sumofnum = function(array){
    for (var j = 0; j < array.length; j++) {

        var notPrime = false;
        for (var i = 2; i <= array[j]; i++) {
            if (array[j]%i===0 && i!==array[j]) {
                notPrime = true;
            }
        }
        if (notPrime === false) {
                    console.log(array[j]);
        }
    }
}
sumofnum(array);
//using IIFE.

(function(array){
    for (var j = 0; j < array.length; j++) {

        var notPrime = false;
        for (var i = 2; i <= array[j]; i++) {
            if (array[j]%i===0 && i!==array[j]) {
                notPrime = true;
            }
        }
        if (notPrime === false) {
                    console.log(array[j]);
        }
    }
})(array)