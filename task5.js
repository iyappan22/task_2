var arr1 = [12,13,14,15];
var arr2 = [18,19,20,21];

//using anonymous function.

var median = function(arr1,arr2){
    var arr = arr1.concat(arr2);
    arr.sort((a, b)=> a-b);
    var length = arr.length/2;
    median=(arr[length-1] + arr[length])/2;
    console.log(median);
}
median(arr1,arr2);


// IIFE FUNCTION.
(function (arr1,arr2) {
    var arr = arr1.concat(arr2);
    arr.sort((a, b)=> a-b);
    var length = arr.length/2;
    median=(arr[length-1] + arr[length])/2;
    console.log(median);
})(arr1,arr2)