/*
=======================================================
** Week 2 - Project 1 **

Below are a number of problems for you to solve
using JS. The JS code can be written below each
problem and the results can be displayed into the
HTML page. In some cases, you may want to check
within the console for verification of the array.

console.log();

=======================================================
*/


// 0. Connect the main.js document to the HTML page.
/*    Add to the bottom of the HTML page: <script src="main.js"></script>*/
document.getElementById("q0").innerHTML = "JS Page Connected Properly!";
document.getElementById("q0").classList.add("status-good");


// 1. Declare a variable whose value is an empty array.
//    Use any method you choose to add at least 4 items to it.
var arr = [];
arr = ['apple',1,true,false];
document.getElementById("q1").innerHTML = arr;
document.getElementById("q1").classList.add("status-good");




// 2. Add an additional item to the beginning of your array.

arr.push('banana');
document.getElementById('q2').innerHTML = arr;
document.getElementById('q2').classList.add('status-good');



// 3. Remove the second and third items in your array.

arr.splice(2,2);
document.getElementById('q3').innerHTML = arr;
document.getElementById('q3').classList.add('status-good');



// 4. Add two new items after the second item.

arr.splice(2,0,'off by one','maybe');
document.getElementById('q4').innerHTML = arr;
document.getElementById('q4').classList.add('status-good');



// 5. Log to the console: 'The current length of the array is....' using the .length method


console.log('the current lenght of the array is ' + arr.length);
document.getElementById('q5').innerHTML = 'added to the console length of the array ' + arr.length;

// Use the following Array for questions 6-9:
var things = ['mug', 'book', 'mouse', 'plant', 'sunglasses'];

// 6. Change 'mouse' to 'keyboard'

things.splice(2,1,'keyboard');

document.getElementById('q6').innerHTML = things;
document.getElementById('q6').classList.add('status-good');

// 7. Combine all of the elements of the array into a string.
//    (Hint: check out the 'join' method.)

var x = things.join(',');
var s = typeof(x);
document.getElementById('q7').innerHTML = x;
document.getElementById('q7').classList.add('status-good');

// 8. Remove the first item.
things.shift();
console.log(things);
document.getElementById('q8a').innerHTML = things;
document.getElementById('q8a').classList.add('status-good');





// 9. Remove all items from the things array.

things.splice(0,things.length);
console.log(things);
document.getElementById('q9').innerHTML = things;
document.getElementById('q9').classList.add('status-good');



// Use the following array for question 10:
var people = ['Bill', 'Ted', 'Emily', 'Andrea', 'Doug'];

// 10. Arrange the items alphabetically. Store this Array as orderedPeople
people.sort();
console.log(people);
document.getElementById('q10').innerHTML = people;
document.getElementById('q10').classList.add('status-good');

// 11. Create an array of arrays with the following three arrays:
var array1 = ["Fido", "Spot", "Rex", "Sparky"]
var array2 = ["Bulldog", "Lab", "Dalmation", "Beagle"]
var array3 = ["White", "Black", "Spotted", "Tri-color"]

// Goal:
var array4 = [
                ["Fido", "Spot", "Rex", "Sparky"],
                ["Bulldog", "Lab", "Dalmation", "Beagle"],
                ["White", "Black", "Spotted", "Tri-color"]
              ]

var array5 = [array1, array2, array3];
console.log(array5);
document.getElementById('q11').innerHTML = array5;
document.getElementById('q11').classList.add('status-good');




// 12. Remove "Sparky" and "White" from the above array of arrays.

array5[0].splice(3,1);
array5[2].splice(0,1);
document.getElementById('q12').innerHTML = array5;
document.getElementById('q12').classList.add('status-good');

// ADVANCED TRACK
// Use the following campingItems array for question 13
var campingItems = ['tent', 'hiking boots', 'picnic table', 'corn on the cob', 'cooler'];

// 13. Declare an array called lastItem using .pop() on the campingItems array.

var lastItem = campingItems.pop();
document.getElementById('q13').innerHTML = lastItem;
document.getElementById('q13').classList.add('status-good');



// 14. Add two new items to lastItem, one at the beginning and one at the end.

var ray = [];
ray.push(lastItem);
ray.push('knife');
ray.reverse();
ray.push('flint');
document.getElementById('q14').innerHTML = ray;
document.getElementById('q14').classList.add('status-good');


// 15. Add s'mores to the lastItem array.

ray.push('s\'mores');
document.getElementById('q15').innerHTML = ray;
document.getElementById('q15').classList.add('status-good');


// 16. Create a new Array called reversedItems.
//    The items should be the same as lastItem, only in reverse order.
var reversedItems = ray.reverse();
document.getElementById('q16').innerHTML = reversedItems;
document.getElementById('q16').classList.add('status-good');



// 17. Using the Arrays below, create a single Array
//     called numberPets whose value is [12, 5, 9, 27, 'fish', 'dog']
var firstArray = [12, 5, 9, 27];
var secondArray = ['fish', 'dog'];
var numberPets = [firstArray, secondArray];
document.getElementById('q17').innerHTML = numberPets;
document.getElementById('q17').classList.add('status-good');



// 18: Try to arrange the following items from smallest to largest:
var sortingNumbers = [2, 5, 98, 55, 77, 300];
// If it doesn't sort as expected, explain why.

var sorted = sortingNumbers.sort();
document.getElementById('q18').innerHTML = sortingNumbers;
document.getElementById('q18').classList.add('status-good');

//the docs say they are messed up because they sort in unicode pointer order






/* SANDBOX TRACK

Solving all of these problems is a great step in the right direction,
but the next step is coming up with your own arrangements to solve
new problems. Practice creating your own problems to solve and their solutions -
you can even challenge your classmates!

Also, consider how you can add/remove CSS styles to create added presentation with the results.

*/
