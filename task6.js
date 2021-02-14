var arr = [25,22,23,25,45,36];

//using anonymous function.

function removeduplicates(arr) {
    var obj = {};
    var ret_arr = [];
    for (var i = 0; i < arr.length; i++) {
        obj[arr[i]] = true;
    }
    console.log(obj);
    for (var key in obj) {
        ret_arr.push(key);
    }
    console.log(ret_arr);
}
removeduplicates(arr);

//using IIEF function.

(function(arr) {
    var obj = {};
    var ret_arr = [];
    for (var i = 0; i < arr.length; i++) {
        obj[arr[i]] = true;
    }
    console.log(obj);
    for (var key in obj) {
        ret_arr.push(key);
    }
    console.log(ret_arr);
})
(arr);