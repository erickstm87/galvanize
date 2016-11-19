/*
=======================================================

** Week 3 - Project 2 **
*** More Functioning ***

Below are a number of problems for you to solve
using JS. The JS code can be written below each
problem and the result can be logged to the console.

In order to make the results easy to read,
please use console.log("Question #") to declare the
problem number being solved followed by console.log(yourAnswer) after each question.

For any methods that we didn't cover, please refer to the Functions Documentation.
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Functions

BASIC TRACK: 1-9
ADVANCED TRACK: 10-13
=======================================================
*/
document.getElementById('q0').classList.add('status-good');
document.getElementById('q0').innerHTML = 'Connected Properly';
// 1. Without using Math.min(), write a function called minimum(),
//    that takes two numbers from a user,
//    and outputs the smaller number into the HTML page.
function minimum(number1,number2){
  if(number1 < number2)
    document.getElementById('q1').innerHTML += number1 + ' is the lesser of the two numbers : ' + number1 + ' & ' + number2;
}
minimum(2,6);

// 2. Create a new function called minimum3(),
//    to find the smallest of three numbers,
//    input by a user,
//    and the smallest displayed within the HTML page.
function minimum3(num1,num2,num3){
  var array = [];
  array.push(num1);
  array.push(num2);
  array.push(num3);
  var min = array[0];
  for (var i = 0; i < array.length; i++) {
    if(array[i] < min)
      min = array[i];
  }
  document.getElementById('q2').innerHTML = min;
}
minimum3(2,4,1);



// 3. Declare a function called sum() that takes an array of numbers as an argument adds them together and displays the result within the HTML page.
//    i.e. sum([1, 2, 3, 4]) should return 10.
function sum(numArrays){
  var sum = 0;
  for (var i = 0; i < numArrays.length; i++) {
    sum += numArrays[i];
  }
  document.getElementById('q3').innerHTML = sum;
}
sum([1,5,2,3]);
// 4. Declare a function called multiply() that takes an array of numbers and multiplies them together.
//    i.e. multiply([1, 2, 3, 4]) should return 24.
function multiply(arrayOf){
  var sum = 1;
  for (var i = 0; i < arrayOf.length; i++) {
    sum *= arrayOf[i];
  }
  document.getElementById('q4').innerHTML = sum;
}
multiply([1,2,4,2]);

// 5. Write a function called filterSixPlus() that takes the following array and removes words
//    that are less than six characters.
var words = ["window", "table", "cup", "knife", "barstool", "glass", "charger", "outlet"];

function filterSixPlus(words){
  for (var i = 0; i < words.length; i++) {
    if(words[i].length < 6){
      words.splice(i,1);
      i = -1;
      continue;
    }
  }
  document.getElementById('q5').innerHTML = words;;
}
filterSixPlus(words);


// 6. Use a function to ask a user for a temperature in Celsius and converts it to Fahrenheit.
//    HINT: You may need to use parseFloat to convert the user's string input to a float.
document.getElementById('tConvert').addEventListener('click',function(){
  var cel = prompt('what\'s the temperature?');
  var which = prompt('would you like to convert from \'F\' to \'C\' or vice versa? Enter \'C to F\' or \'F to C\' ')
  if(which[0] === 'C')
    var converted = (cel*1.8) + 32;
  else if(which[0] === 'F')
    var converted = (cel-32)*1.8;
  else
    var converted = 'follow the rules!';
  document.getElementById('q6').innerHTML = '<br> the temperature is: ' + converted + '</br>';
})



// 7. Adding to the code in #6, ask the user a second time to determine whether they'd like to convert from Fahrenheit to Celsius
//    or from Celsius to Fahrenheit. To keep it simple, instruct them to use "F to C" or "C to F".
//    Display an error if they do not follow the rules.



// 8. Write a function countBs() that takes a string as its only argument and returns
//    a number that indicates how many uppercase “B” characters are in the string.
//    HINT: Google charAt()
function countBs(aString){
  var x = 0;
  for (var i = 0; i < aString.length; i++) {
    if(aString.charAt(i) === 'B')
      x += 1;
  }
  document.getElementById('q8').innerHTML = 'There are ' + x + ' upper case Bs in this string: ' + aString;
}
countBs('BiiBBopqweB');



// 9. http://games.usvsth3m.com/javascript-under-pressure/
//    Have fun with these!
//    Get as far as you can and record your progress and time.
//    We'll try this again in a few weeks!







// ADVANCED TRACK
// 10. Write a function called countChars() that behaves like countBs(), except it takes a
//     second argument that indicates what character is to be counted.
function countChars(aString,aCharacter){
  var x = 0;
  for (var i = 0; i < aString.length; i++) {
    if(aString.charAt(i) === aCharacter)
      x += 1;
  }
  document.getElementById('qa').innerHTML = 'There are: ' + x + ' occurrences of ' + aCharacter + ' in this string: ' + aString;
}

countChars('aStringwithSS','S')


// 11. Declare a function called ohZero that replaces all of the o's in a string with 0's.
function ohZero(aString){
  var newArray = aString.split('');
    for (var i = 0; i < newArray.length; i++) {
      if(newArray[i] === 'o')
        newArray.splice(i,1,'0')
    }
    var newString = newArray.join('');
    document.getElementById('qb').innerHTML = aString + ' :converted equals: ' + newString;
}
ohZero('a string with o sound oh')
// 12. Write a function that prints out the entire "99 Bottles of Beer on the Wall" song lyrics.

function worstSong(){
  for(var i = 99; i > 0; i--){
    var x = i;
    var y = x-1;
    document.getElementById('qc').innerHTML += '<br>' + x + ' beers on the wall ' + x + ' bottles of beer. blah blah take one down... ' + y + ' bottles of beer on the wall' + '</br>';
  }
}
worstSong();



// 13. Create a 'Guessing Game'. The game starts by picking a random number.
//     It then prompts the user to guess the number. If the user's number is lower/higher,
//     it will prompt the user to enter another guess and tell the user if the guess was
//     too high or too low. This continues until the correct guess is entered.
//     When the correct guess is entered the user is given a success message with the correct number.

document.getElementById('game').addEventListener('click',function(){
  var rando = randomNumber(0,100);
  function randomNumber(min, max) {
    var float = Math.random() * (max - min) + min;
    return Math.trunc(float);
  }

  while(true) {
    var guess = parseInt(prompt('guess a number between one and a hundred'));
    //alert(rando);
    if(guess === rando){
      document.getElementById('qd').innerHTML = '<br>nicely done ' + guess + '</br>';
      break;
    }
    else if(guess < rando){
      //document.getElementById('qd').innerHTML = 'too low';
      alert('too low');
      continue;
    }
    else if(guess > rando){
      //document.getElementById('qd').innerHTML = 'too high';
      alert('too high');
      continue;
    }
  }
})
