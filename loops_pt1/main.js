/*
=======================================================

** Week 3 - Project 1 **
*** Function Exercises ***

Below are a number of problems for you to solve
using JS. The JS code can be written below each
problem and the result can be displayed in the HTML page.

BASIC TRACK: 1-10
ADVANCED TRACK: 11-15
=======================================================
*/


document.getElementById('q0').className = 'status-good';
document.getElementById('q0').innerHTML = 'Connected Properly';
// 1. Create a function that simply returns a string that says something funny
//    when it is called and then displayed into the HTML page.
function hello(str){
  document.getElementById('q1').innerHTML += str;
}
hello('hello thomas');

// 2. Define a function called "divideByTwo".
//    It should accept one parameter within a text field called "number" and
//    submitted when a button is clicked.
//    The function should divide the number by two and
//    then displayed into the HTML page.
function divideByTwo(){
  document.getElementById('DivideMe').addEventListener('click', function(){
    var number = prompt('what number would you like to divide!?');
    var param = number/2;
    document.getElementById('q2').innerHTML += "<br>Your number " + number + ' divided by 2 is: ' + param + '</br>';
  })
}
divideByTwo();

// 3. Define a function called "greeting".
//    It should accept two parameters within input fields, which will both be first names.
//    The function should display to the HTML page a greeting to both people.
function greeting(firstName,secondName){
  document.getElementById('q3').innerHTML += '<br>Greetings ' + '<strong>' + firstName + '</strong>' + ' and hey ' + '<strong>' + secondName + '</strong>' + '</br>';
}
greeting('tom','matt');

// 4. Create a function that finds the average of 6 numbers passed in when called
//    and returns the value and is then displayed in the HTML page.
function divided(array1){
  var sum = 0;
  var x = 0;
  for(var i = 0; i < array1.length; i++) {
    sum += array1[i];
    var x = i;
  }
  var avg = sum/i;
  document.getElementById('q4').innerHTML += avg;
}
divided([340,245,25,12,14,111]);

// 5. You use Amazon Subscribe & Save to have six cans of cashews automatically sent to you each month.
//    Write a function that takes the price per unit and calculates the total for you each month.
//    Since the price of the cashews can change anytime, pass that amount into the function to get your total price.
function mult(oneCan){
  var total = oneCan * 6;
  document.getElementById('q5').innerHTML += 'your cashews this month each cost 2.79 for a total of: $' + total.toFixed(2);
}
mult(2.79);

// 6. Define functions called "area" and "perimeter". They should both accept two parameters and calculate the area and perimeter of a rectangle.
document.getElementById('q6').innerHTML += '<br>The width of your rectangle is: 2 </br>';
document.getElementById('q6').innerHTML += '<br>The length of your rectangle is: 5 </br>';
function area(length,width){
  var are = length*width;
  document.getElementById('q6').innerHTML += '<br>The area of your rectangle is: ' + are + '</br>';
}
area(2,5);
function perimeter(height,width){
  var perim = (width*2) + (height*2);
  return perim;
}
var rect = perimeter(2,5);
document.getElementById('q6').innerHTML += '<br>The perimeter of your rectangle is: ' + rect + '</br>';

// 7. Define a function called "quarter". It accepts one parameter called "number".
//    The function will return a value which is one quarter of the number provided.
function quarter(number){
  number = number*.25;
  return number;
}
var quart = quarter(28);
document.getElementById('q7').innerHTML += '28 divided by 4 is: ' + quart;


// 8. Write a function called "sleepings", it should accept one parameter, an integer called "hours".
//    Write a conditional statement inside of the function. If the number of hours is more than 8, display a statement to the HTML page about getting enough rest.
//    If the number of hours is less than 8, print a statement recommending the user get more shut eye.
function sleepings(hours){
  if(hours >= 8)
    document.getElementById('q8').innerHTML += 'You\'re doin great!';
  else
    document.getElementById('q8').innerHTML += 'You\'re doin even better keep up with the rock and roll lifestyle!';

}
sleepings(8);


// 9. Develop a function that determines a person's age by asking them for their birth year.

document.getElementById('year').addEventListener('click',function(){
  var birth = prompt('What year were you born in AD please?');
  var age = 2016-birth;
  document.getElementById('q9').innerHTML = '<br>you are ' + age + ' years old</br>';
})



// 10. Write a function that accepts the following array and separates the people into two teams. Display each team within the HTML page.
//    No names next to each other in the array should be on the same team.
     teammates = ["Harold", "Bob", "Sue", "Grady", "Notorious B.I.G.", "JavaCrypt", "Weird guy in the back", "Gary", "Carol", "Hipster Tim", "Janet"]

function team(teammates){
  var teamOne = [];
  var teamTwo = [];
  for (var i = 0; i < teammates.length; i++) {
    if(i % 2 === 0)
      teamOne.push(teammates[i]);
    else
      teamTwo.push(teammates[i]);
  }
  document.getElementById('q10').innerHTML += '<br>The original team was: ' + teammates + '</br>';
  document.getElementById('q10').innerHTML += '<br>The first team is now: ' + teamOne + '</br>';
  document.getElementById('q10').innerHTML += '<br>The second team is now: ' + teamTwo + '</br>';
}
team(teammates);

// 11. Allow a user to enter a three digit number.
//     Write a function that adds the numbers together.
//     Hint #1: You need to turn a string into an integer.
//     Hint #2: Strings can be treated as arrays too.
document.getElementById('array-3').addEventListener('click', function(){
  var magicTrick = prompt('This is going to be amazing! What three numbers?');
  var split = magicTrick.split('');
  var newArray = [];
  var sum = 0;
  for (var i = 0; i < split.length; i++) {
    var number = parseInt(split[i]);
    newArray.push(number);
  }
  for (var i = 0; i < newArray.length; i++) {
    sum += newArray[i];
  }
  document.getElementById('q11').innerHTML += sum;
})


// 12. You've finally gotten around to counting the change in your piggy bank.
//     Write a function that accepts four parameters from a user (quarters, dimes, nickels, and pennies).
//     The function should take each number of coins and multiply it times each coin's value.
//     Finally, it should return the total amount of change you have in the following format: "$32.77"
//     HINT: Understanding the toFixed method will help you with the format.
function piggyBank(quarters,dimes,nickels,pennies){
  var quartTotal = quarters * .25;
  var dimesTotal = dimes * .1;
  var nickTotal = nickels * .05;
  var penTotal = pennies * .01;
  var sumTotal = quartTotal+dimesTotal+nickTotal+penTotal;
  return sumTotal.toFixed(2);
}
document.getElementById('q12').innerHTML = piggyBank(3,12,22,87);


// ADVANCED TRACK



// A. Develop a function that cleans up a phone number entered by a user.
//     The rules are as follows:
//        If the phone number is less than 10 digits or more than 11 digits, assume that it is bad number
//        If the phone number is 10 digits assume that it is good
//        If the phone number is 11 digits and the first number is 1, trim the 1 and use the last 10 digits
//        If the phone number is 11 digits and the first number is not 1, then it is a bad number.
//        HINT: You may need to use the charAt method.

document.getElementById('pNumber').addEventListener('click',function(){
  var phone = prompt('what\'s your number?');
  if(phone.length < 10 || phone.length > 11)
    document.getElementById('q13').innerHTML = '<br>that\'s a bad number ' + phone.length + '</br>';
  else if(phone.length === 10)
    document.getElementById('q13').innerHTML = '<br>looks good to me</br>';
  else if(phone.length === 11 && phone[0] === 1){
    phone.shift();
    document.getElementById('q13').innerHTML = '<br>looks good to me ' + phone + '</br>' ;
  }
})

// B. Create a function that determines whether a parameter is a number or not.
//     Iterate over the elements in the following array to determine if each is a number.
//     HINT: You may need to use the isNaN method.
       arrayOfAllTheThings = ["one", 23, {thingsWhalesLove: "beaches"}, "six hundred", 33, 6834, "5,435"]
    document.getElementById('q14').innerHTML = '<br>' + arrayOfAllTheThings + '</br>';
  for (var i = 0; i < arrayOfAllTheThings.length; i++) {
    document.getElementById('q14').innerHTML += typeof(arrayOfAllTheThings[i]) + ', ';
  }


// C. Create a die rolling function that accepts no parameters.
//     It rolls two six-sided-dice, adds the two numbers together, and returns a roll value.
//     Display the result in the HTML page.
//     To get the random number rolled by each die, use Math.random and Math.floor.



// D. Using your die roll function above, figure out how many times it would take a user
//     to get around a Monopoly board once. A monopoly board has 40 spaces total.



// E. Write a function that takes a year from a user
//    and reports whether or not it is a leap year.
//    Display the result in the HTML page.
//    Remember, a leap year occurs:
//        On every year that is evenly divisible by 4
//        Except every year that is evenly divisible by 100
//        Unless the year is also evenly divisible by 400
//        For example, 1997 is not a leap year, but 1996 is. 1900 is not a leapyear, but 2000 is.
