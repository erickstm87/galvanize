/*
----------------------------------------
SAMPLE
----------------------------------------

Challenge: Write function named test that returns the string "This Works!".
Solution: This one has already been complete for you.

*/

function test() {
 var string ="This Works!";
 return string;
}



/*
----------------------------------------
CHALLENGE
----------------------------------------

Write function named sum that will take an array of numbers and return the sum of them

Example: if you pass it [1,2,3] then it should return 6 (which is 1 + 2 + 3)
*/
function sum(anArray){
  var sum = 0;
  for (var i = 0; i < anArray.length; i++) {
    sum += anArray[i];
  }
  return sum;
}


/*
----------------------------------------
CHALLENGE
----------------------------------------

Write function named doubleNumbers that will take an array of numbers and return an array with those numbers doubled

Example: if you pass it [1,2,3] then it should return [2,4,6]
*/
function doubleNumbers(anArray){
  var doubled = 1;
  var b = [];
  for (var i = 0; i < anArray.length; i++) {
    b.push(anArray[i] *= 2);
  }
  return b;
}

/*
----------------------------------------
CHALLENGE
----------------------------------------

Write function named multiplyNumbers that will take an array of numbers and
return an array with those numbers multiplied by another value

Examples:

- if you call multiplyNumbers([1,2,3], 0) you'd get [0,0,0]
- if you call multiplyNumbers([1,2,3], 5) you'd get [5,10,15]
*/

function multiplyNumbers(anArray,num){
    var b = [];
    for (var i = 0; i < anArray.length; i++) {
      b.push(anArray[i]*num);
    }
    return b;
}


/*
----------------------------------------
CHALLENGE
----------------------------------------

Write function named doubleLetters that will take a string and double every letter in the string

Example: if you pass it "abc" then it should return "aabbcc"
*/
function doubleLetters(aString){
  var newArray = aString.split('');
  var b = [];
  for (var i = 0; i < newArray.length; i++) {
    b.push(newArray[i]+newArray[i]);
  }
  return b.join('');
}

/*
----------------------------------------
CHALLENGE
----------------------------------------

Write function named interleave that will take two arrays and interleaves them

Example: if you pass it ["a", "b", "c"] and ["d", "e", "f"] then it should return ["a", "d", "b", "e", "c", "f"]

NOTE: you can assume each input will be the same length
*/

function interleave(array1,array2){
  var b = [];
  for (var i = 0; i < array1.length; i++) {
    b.push(array1[i],array2[i]);
  }
  return b;
}

/*
----------------------------------------
CHALLENGE
----------------------------------------

Write function named createRange that will take a number and a default value and return an array of that many values

Example: if you pass it 4 and "Hello" then it should return ["Hello", "Hello", "Hello", "Hello"]
*/
function createRange(number,dValue){
  var b = [];
  for (var i = 0; i < number; i++) {
    b.push(dValue);
  }

  return b;
}
createRange(4,'hello');
/*
----------------------------------------
CHALLENGE
----------------------------------------

Write function named flipArray that will take an array and return an object where the keys are the items and the values are the indices

Example:

If you pass it ["quick", "brown", "fox"] then it should return { "quick": 0, "brown": 1, "fox": 2 }
*/
function flipArray(anArray){
  var obj = new Object();
  for (var i = 0; i < anArray.length; i++) {
    //console.log()
    obj[anArray[i]] = i;
  }
  console.log(obj);
  return obj;
}
flipArray(["quick", "brown", "fox"]);

/*
----------------------------------------
CHALLENGE
----------------------------------------

Write function named arraysToObject that will take an array of 2-element arrays, and return an object of key/value pairs

Example:

If you pass it [[2014, "Horse"], [2015, "Sheep"]] then it should return { 2014: "Horse", 2015: "Sheep" }

*/
function arraysToObject(anArray){
  var obj = new Object();
  for (var i = 0; i < anArray.length; i++) {
    obj[anArray[i][0]] = anArray[i][1];
  }
  return obj;
}
arraysToObject([[2014,'horse'],[2015],'sheep']);
/*
----------------------------------------
CHALLENGE
----------------------------------------

Write function named reverseString that will reverse a string without calling the built-in .split or .reverse methods

Example:

If you pass it "hello" then it should return "olleh"
*/
function reverseString(string){
  var b = [];
  var c = [];
  for (var i = 0; i < string.length; i++) {
    b.push(string[i]);
  }
  for(var j = b.length-1; j >= 0; j--){
    c.push(b[j]);
  }
  return c.join('');
}
reverseString('hello');
/*
----------------------------------------
CHALLENGE
----------------------------------------

Write a function named repeats that returns true if the first half of the string equals the last half, and false if not

Example:

If you pass it "haha" then it should return true because "ha" (the first half) equals "ha" (the second half)
If you pass it "yay" then it should return false because it's odd
If you pass it "heehaw" then it should return false because "hee" doesn't equal "haw"
*/

function repeats(string){
  var array = string.split('');
  var leftHalf = array.slice(0,(array.length/2));
  var rightHalf = array.slice((array.length/2),array.length);
  if(string.length % 2 !== 0)
    return false;
  for(var i = 0; i < leftHalf.length; i++) {
    console.log('entered loop');
    console.log(leftHalf[i] + ' and ' + rightHalf[i]);
    if(leftHalf[i] !== rightHalf[i]){
      console.log(leftHalf[i],rightHalf[i]);
      return false;
    }
  }
  return true;
}

/*
----------------------------------------
CHALLENGE
----------------------------------------

Write a function named everyOther that returns every other character in the string

Example:

If you pass it "abcdef" then it should return "ace" because those represent every other letter
*/
function everyOther(string){
  var b = [];
  for (var i = 0; i < string.length; i++) {
    if(i % 2 === 0)
      b.push(string[i]);
  }
  return(b.join(''));
}

/*
----------------------------------------
CHALLENGE
----------------------------------------

Write a function named allEqual that returns true if every character in the string is the same

Example:

If you pass "aaa" it should return true
If you pass "aba" it should return false
*/
function allEqual(string){
  array = string.split('');
  var first = array[0];
  for (var i = 0; i < array.length; i++) {
    if(first !== array[i])
      return false;
  }
  return true;
}

/*
----------------------------------------
CHALLENGE
----------------------------------------

Write a function named sumLetters that returns the sum of every character in the string

Example:

If you pass "45" it should return 9
If you pass "246" it should return 10
*/
function sumLetters(string){
  var array = string.split('');
  var sum = 0;
  for (var i = 0; i < array.length; i++) {
    var num = parseInt(array[i]);
    sum += num;
  }
  return(sum);
}
sumLetters('1234');

/*
----------------------------------------
CHALLENGE
----------------------------------------

Write a function named countVowels that returns the number of vowels in a string, excluding "y"

Example:

If you pass "you" it should return 2
*/
function countVowels(string){
  //var dict = ['a','e','i','o','u'];
  var b = [];
  for (var i = 0; i < string.length; i++) {
    switch (string[i]) {
      case 'a':
      case 'e':
      case 'i':
      case 'o':
      case 'u':
        b.push(string[i]);
        break;
      default:
        break;
    }
  }
  return(b.join('').length);
}
countVowels('ab');
/*
----------------------------------------
CHALLENGE
----------------------------------------

Write a function named split that takes a string and returns an array of the letters

Example:

If you pass "you" it should return ["y", "o", "u"]

NOTE: do not use the builtin `split` method
*/
function split(string){
  var b = [];
  for (var i = 0; i < string.length; i++) {
    b.push(string[i]);
  }
  return(b);
}
split('helo');
/*
----------------------------------------
CHALLENGE
----------------------------------------

Write a function named getCodePoints that takes a string and returns an array of the codePoints of the letters

See https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/codePointAt

Example:

If you pass "Hello" it should return [ 72, 101, 108, 108, 111 ]
*/
function getCodePoints(string){
  var b = [];
  for (var i = 0; i < string.length; i++) {
    b.push(string.codePointAt(i));
  }
  return(b);
}
getCodePoints('Hello');

/*
----------------------------------------
CHALLENGE
----------------------------------------

Write a function named letterMap that takes a string and returns an object of the letters and their positions in the string

Example:

If you pass "Yo" it should return {Y: 0, o: 1}
If you pass "Hello" it should return {H: 0, e: 1, l: 3, o: 4}
*/
function letterMap(string){
  var obj = {};
  for (var i = 0; i < string.length; i++) {
    obj[string[i]] = i;
  }
  return(obj);
}
letterMap('Yo');
/*
----------------------------------------
CHALLENGE
----------------------------------------

Write a function named letterCount that takes a string and returns an object with the letters and the number of their occurrences

Example:

If you pass "Yo" it should return {Y: 1, o: 1}
If you pass "Hello" it should return {"H": 1, "e": 1, "l": 2, "o": 1}
*/
//this one was taken from http://stackoverflow.com/questions/17313268/efficiently-find-the-number-of-occurrences-a-given-value-has-in-an-array
//but I had someone walk me through it so i'm going to note the hell out of it
function letterCount(string){
  var arr = string.split('');
  //arr = arr.sort();
  var b = {};
  arr.forEach(function(i){ //not sure why a forEach instead of a for loop but it probably doesn't even matter
    b[i] = b[i] + 1 || 1 //Here was the tricky section. the right side evaluates first and it is saying. 'if b[i](a for example) exists then increment the value of the key by one. If not assign one to the value and insert the key'
  })
  return(b);
}
letterCount('abac');
/*
----------------------------------------
CHALLENGE
----------------------------------------

Write a function named threeOdds that takes 2 numbers and returns true if there are 3 odd numbers _between_ those two numbers

Example:

If you pass 0,2 it should return false because the only number between 0 and 2 is 1
If you pass 0,6 it should return true because between 0 and six (the numbers 1,2,3,4,5) there are three odds - 1, 3 and 5
*/

function threeOdds(num1,num2){
  var b = [];
  for(var i = num1; i < num2; i++){
    if(i % 2 !== 0 && i !== 0)
      b.push(num2[i])
  }
  if(b.length > 2)
    return true;
  else {
    return false;
  }
}

/*
----------------------------------------
CHALLENGE
----------------------------------------

Write a function called leftPad that takes a string, a length and a fill character and returns a string padded to length with the fill character

Example:

If you pass "a", 3, "*" it should return "**a" - that is, a string of length 3, padded on the left by the "*" character
*/
function leftPad(arg1,arg2,arg3){
  var b = [];
  if(arg1.length > arg2)
    return arg1;
  else{
    for(var i = 0; i < arg2-arg1.length; i++){
      b.push(arg3)
    }
    b = b.reverse();
    b.push(arg1);
    //b = b.reverse();
  }
  return(b.join(''));
}

leftPad('a','3','*')
/*
----------------------------------------
CHALLENGE
----------------------------------------

Write a function named createString that takes a number and a letter and creates a string of that many letters

Example:

If you pass "a", 3 it should return "aaa"
If you pass "b", 3 it should return "bb"
*/
function createString(num,letter){
  var b = [];
  for (var i = 0; i < num; i++) {
    b.push(letter);
  }
  return(b.join(''));
}
createString(' ',3);
/*
----------------------------------------
CHALLENGE
----------------------------------------

Write a function named factorial that takes a number and returns its factorial

Factorial of 4 means 4 * 3 * 2 * 1

Example:

If you pass 4 it should return 24 since that's 4 * 3 * 2 * 1
If you pass 5 it should return 120 since that's 5 * 4 * 3 * 2 * 1
*/
function factorial(num){
  var product = 1;
  var i = num;
  while(i > 0){
    product = product * i;
    console.log(product);
    i--;
  }
  return(product);
}
factorial(4);

/*
----------------------------------------
CHALLENGE
----------------------------------------

Write a function named arrayOfNumbers that takes a number and returns an array of all the numbers between 1 and that number, inclusive

Example:

If you pass 1 it should return [1]
If you pass 3 it should return [1,2,3]
*/
function arrayOfNumbers(num){
  var b = [];
  for (var i = 1; i <= num; i++) {
    console.log(i);
    b.push(i);
  }
  return b;
}

/*
----------------------------------------
CHALLENGE
----------------------------------------

Write a function named evenOdd that takes a number and returns an object with the numbers and whether they are even or odd

Example:

If you pass 1,4 it should return {"1": "odd", "2": "even", "3": "odd", "4": "even"}
*/
function evenOdd(num1,num2){
  var obj = {};
  if(num2 === 0)
    return obj;
  for (var i = num1; i <= num2; i++) {
    if(i % 2 === 0){
      obj[i] = 'even'
    }
    else {
      obj[i] = 'odd';
    }
  }
  console.log(obj);
  return(obj);
}
evenOdd(1,4);
/*
----------------------------------------
CHALLENGE
----------------------------------------

Write a function named growingKeys that takes a number and a string and returns an object where the keys are that string, repeated one more each time

Example:

If you pass 2,"d" it should return {"d": true, "dd": true}
*/
function growingKeys(num,str){
  var obj = new Object();
  var copy = str;
  for (var i = 0; i < num; i++) {
    obj[str] = true;
    str = str + copy;
  }
  return(obj);
}
growingKeys(3,'d');
/*
----------------------------------------
CHALLENGE
----------------------------------------

Write a function named every that takes an array and a value and returns true if every element of the array equals the value

Example:

If you pass [1,1], 1 it should return true
If you pass [1,2], 1 it should return false
*/
function every(arr,value){
  for (var i = 0; i < arr.length; i++) {
    if(arr[i] !== value)
      return false;
  }
  return true;
}
every([1,2],1)
/*
----------------------------------------
CHALLENGE
----------------------------------------

Write a function named some that takes an array and a value and returns true if at least one element of the array equals the value

Example:

If you pass [1,2], 1 it should return true
If you pass [3,2], 1 it should return false
*/
function some(arr,value){
  for (var i = 0; i < arr.length; i++) {
    if(arr[i] === value)
      return true;
  }
  return false;
}
some([1,2],1)
/*
----------------------------------------
CHALLENGE
----------------------------------------

Write a function named some that takes an array and returns a string with the elements joined by commas, with a trailing 'and'

Example:

If you pass ["Sue", "Will"] it should return "Sue and Will"
If you pass ["Sue", "Will", "Rachel"] it should return "Sue, Will and Rachel"
*/
function toSentence(arr){
  var string = '';
  for (var i = 0; i < arr.length; i++) {
    if(i === arr.length-1)
      string += ('and ' + arr[i]);
    else if(i === arr.length-2)
      string += arr[i] + ' ';
    else
      string += arr[i] + ', ';
  }
  console.log(string);
  return string;
}
toSentence(['sue','will','bob']);
/*
----------------------------------------
CHALLENGE
----------------------------------------

Write a function named acronym that takes an array and returns a string that is an acronym of the items in the array

Example:

If you pass ["Sue", "Will"] it should return "SW"
If you pass ["Java", Script", "Object", "Notation"] it should return "JSON"
*/
function acronym(arr){
  var b = [];
  for (var i = 0; i < arr.length; i++) {
    b.push(arr[i][0])
  }
  return(b.join(''));
}
acronym(["Java", "Script", "Object", "Notation"]);
/*
----------------------------------------
CHALLENGE
----------------------------------------

Write a function named min that takes an array and returns minimum value of the array

Example:

If you pass [0,-3,2,5] it should return -3
*/
function min(arr){
  var min = arr[0];
  for (var i = 0; i < arr.length; i++) {
    if(min > arr[i])
      min = arr[i];
  }
  return(min);
}
min([0,-3,2,5]);
/*
----------------------------------------
CHALLENGE
----------------------------------------

Write a function named index that takes an array of objects, and a property name, and returns an object where the keys are the specified property

Example:

If you pass [{id: 1, name: "Joe"}, {id: 2, name: "Sue"}] it should return {1: {id: 1, name: "Joe"}, 2: {id: 2, name: "Sue"}}
[{id: 1, name: "Will"}, {id: 2, name: "Sue"}], 'id' deep equals
1: {id: 1, name: "Will"},
2: {id: 2, name: "Sue"},
*/
function index(arr,prop){
  var obj = new Object();
  if(arr.length === 0)
    return {};
  for(var i = 0; i < arr.length; i++){
    for(var j in arr[i]){
      //console.log(arr[i]);
      if(j === prop){
        console.log(arr[i][j]);
        var key = arr[i][j];
        j = key;
        obj[key] = arr[i];

      }
    }
  }
  return(obj);
}
index([{id: 1, name: "Will"}, {id: 2, name: "Sue"}], 'id');

/*
----------------------------------------
CHALLENGE
----------------------------------------

Write a function named invert that takes an object and returns an object where the keys and values have been inverted

Example:

If you pass {id: 1, name: "Joe"} it should return {1: "id", Joe: "name"}
*/
function invert(anObj){
  var obj = new Object();
  var key = 'new';
  for(var i in anObj){
    key = anObj[i];
    obj[key] = i;
  }
  return(obj);
}
invert({id: 1, name: "Joe"});
/*
----------------------------------------
CHALLENGE
----------------------------------------

Write a function named addSignature that takes an object and a name, and returns an object where

- the keys are suffixed with "-signed"
- the values are suffixed with " - <name>"

Example:

If you pass "Fred", {"contract": "foo"} it should return {"contract-signed": "foo - Fred"}
*/
function addSignature(name,anObj){
  var obj = {};
  //var key = 'key';
  for(var i in anObj){
    var key = i;
    i += '-signed';
    obj[i] = anObj[key] + (' - ' + name);
    //anObj[i] += ' - ' + name;
  }
  return(obj);
}
addSignature({"contract": "foo"},'Fred');

/*
----------------------------------------
CHALLENGE
----------------------------------------

Write a function named pairs that takes an object and returns an array of strings of key/value pairs

Example:

If you pass {name: "Will", age: 24} it should return ["name - will", "age - 24"]
*/
function pairs(obj){
  var b = [];
  var empty = Object.keys(obj).length;
  if(empty === 0)
    return [];
  console.log(empty)
  for(var i in obj){
    b.push(i + ' - ' + obj[i]);
  }
  return(b);
}
pairs({a: 'b'});
/*
----------------------------------------
CHALLENGE
----------------------------------------

Write a function named sumValues that takes an object and returns the sum of the values

Example:

If you pass {a: 1, b: 2} it should return 3
*/
function sumValues(obj){
  var sum = 0;
  for(var i in obj){
    sum += obj[i];
  }
  return(sum)
}
sumValues({a: 1, b: 2});

/*
----------------------------------------
CHALLENGE
----------------------------------------

Write a function named biggestProperty that takes an object and returns the name of the property with the highest value

Example:

If you pass {1999: 4036, 2000: 7654} it should return '2000'
*/
function biggestProperty(obj){
  if (Object.getOwnPropertyNames(obj).length === 0)
    return undefined;
  for(var j in obj){
    var max = obj[j];
    break;
  }
  console.log(max);
  for(var i in obj){
    if(obj[i] > max)
      max = i;
  }
  console.log(max);
  return max;
}
biggestProperty({1999: 4036, 2000: 7654});

/*
----------------------------------------
CHALLENGE
----------------------------------------

Write a function named keyForValue that takes an object and a value and returns the name of the property that matches that value

Example:

If you pass {1999: 4036, 2000: 7654} and 4036, it should return '1999'
*/
function keyForValue(obj,val){
  for(var i in obj){
    if(obj[i] === val)
      return i;
  }
}



/*
----------------------------------------
CHALLENGE
----------------------------------------

Write a function named containsValue that takes an object and a value and returns true if the object contains the value

Example:

If you pass {1999: 4036, 2000: 7654} and 4036, it should return true
*/
function containsValue(obj,val){
  for(var i in obj){
    if(obj[i] === val)
      return true;
  }
  return false;
}



//
