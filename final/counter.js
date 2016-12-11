/*
=======================================================

    ** Week 7 - Project 1  **
*** Ajax and JSON with OMDB ***

This assignment is more open than the past assignments.
You are free to build a simple web page that interacts
with OMBD. It can simply display data within the HTML
page or buttons and text fields can be added to interact
with the data and update the page accordingly.

Have fun!

=======================================================
*/
var input = 'helolohholoolleee';
function counter(input){
  var emptyObj = {};
  var arr = input.split('');
  for (var i = 0; i < arr.length; i++) {
    var counter = 1;
    for(var j = arr.length-1; j >= 0; j--){
      if(arr[i] === arr[j] && i !== j){
        counter ++;
        arr.splice(j,1);
      }
    }
    emptyObj[arr[i]] = counter;
    arr.shift();
    i --;
  }
  var key = Object.keys(emptyObj)[0];
  var largest = emptyObj[key];
  var itsValue = key;
  var ties = [];
  var check = false;
  for(let k in emptyObj){
    if(emptyObj[k] > largest){
      check = true;
      var newVal = k;
      console.log('largest is now:', k);
      largest = emptyObj[k];
      itsValue = k;
    }
    else if(emptyObj[k] === largest && check === true){
      ties.push(k);
      ties.push(newVal);
    }
  }
  console.log(ties);
  return largest;
}
counter(input);
