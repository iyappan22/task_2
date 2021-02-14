//Print odd numbers in an array

var array = ['11','15','14','19','10'];

//using anonymous function.
 var oddnum = function(array){
     for(i in array){
         if(array[i] %2 !== 0){
            console.log(array[i]);
         }
     }
 }
oddnum(array);
//using IIFE.

(function(array){
    for(j in array){
        if(array[j] %2 !== 0){
           console.log(array[j]);
        }
    }
})(array)
