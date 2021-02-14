//Sum of all numbers in an array

var array = ['11','15','14','19','10'];

//using anonymous function.
 var sumofnum = function(array){
     var sum1 = 0;
     for(i in array){
        sum1 += +array[i];
     }
     console.log(sum1);
 }
sumofnum(array);
//using IIFE.

(function(array){
    var sum2 = 0;
     for(i in array){
        sum2 += +array[i];
     }
     console.log(sum2);
})(array)