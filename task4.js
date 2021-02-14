var array = ['ram','eye','MADAM'];

var palindrome = function(array){
   var str = "";
   var rev = "";
   for(var i in array){
       rev = array[i].split("").reverse().join("");
       if(rev===array[i]){
       str = str + " " + array[i];
       }
   }
   console.log(str);
}
palindrome(array);
//using IIFE.

var array = ['ram','eye','MADAM'];

(function(array){
   var str = "";
   var rev = "";
   for(var i in array){
       rev = array[i].split("").reverse().join("");
       if(rev===array[i]){
       str = str + " " + array[i];
       }
   }
   console.log(str);
})
(array);