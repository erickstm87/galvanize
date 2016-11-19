/*
=======================================================

** Week 6 - Project 1 **
*** THE OBJECT OF MY AFFECTION: OBJECTS ***

Below are a number of problems for you to solve
using JS. The JS code can be written below each
problem and the result can be displayed in the HTML page.

For any methods that we didn't cover, please refer to the Object Documentation.
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object
Discovering new things is fun and a great way to learn!!

BASIC TRACK: 1-13
ADVANCED TRACK: 14-20
=======================================================
*/

document.getElementById('q0').className = 'status-good';
document.getElementById('q0').innerHTML = 'connected properly';

// 1. Create an object called "me" that describes you with your name, city, and job title.
//    Display the content of the object in the HTML page.
var me = {
  name: 'tomas',
  city: 'boulder',
  jobTitle: 'engineer'
}
for(i in me){
  document.getElementById('q1').innerHTML += '<br>' + i + ': ' + me[i] + '</br>';
}

// 2. To your "me" object, add a key of "family" with the value being an array of three of your family members and display in the HTML page.
// Example of desired output: { name: 'Bob Smith',
//                              city: 'Denver',
//                              jobTitle: 'professional wrestler',
//                              family: ['Joan', 'Kyle', 'Hank'] }

me.family = ['matt','carly','molly'];
document.getElementById('q2').innerHTML += me.family;



// 3. Using the "me" object, use dot notation and bracket notation to access the value of your city and display the results in the HTML page.
document.getElementById('q3').innerHTML += '<br>dot notation ' + me.city + '</br>';
document.getElementById('q3').innerHTML += '<br>bracket notation ' + me['city'] + '</br>';
// Use the following Object for questions 4-9:
var invitees = { adults: [{
                          name: "Penny",
                          table: 10,
                          dinnerChoice: ["salad", "beef", "ice cream"]
                        },
                        {
                          name: "Billy",
                          table: 12,
                          dinnerChoice: ["soup", "beef", "sorbet"]
                        },
                        {
                          name: "Lauren",
                          table: 3,
                          dinnerChoice: ["soup", "chicken", "ice cream"],
                          specialConsiderations: { allergies: "melon",
                                                   seating: "Don't sit her next to ex husband at table 8."}
                        }
                        ],
                  children: [{
                             name: "Junior",
                             table: 4,
                             allergies: ["nuts"]
                            },
                            { name: "Pablo",
                            table: 4,
                            allergies: ["gluten", "following directions"]
                            },
                            { name: "Ada",
                            table: 4,
                            allergies: ["boys"]
                            }
                         ]
                      };


// 4. Access Penny's dinner choice (this will be the second item in his dinnerChoice array)
document.getElementById('q4').innerHTML += invitees['adults'][0]['dinnerChoice'];
// 5. Access Pablo's table number.
document.getElementById('q5').innerHTML += invitees['children'][1]['table'];
// 6. Access Lauren's seating specialConsideration.
for(i in invitees['adults'][2]['specialConsiderations']){
  document.getElementById('q6').innerHTML += '<br>' + i + ': ' + invitees['adults'][2]['specialConsiderations'][i] + '</br>';
}

// 7. Access Billy's dessert choice (this will be the third item in his dinnerChoice array)
document.getElementById('q7').innerHTML += invitees['adults'][1]['dinnerChoice'];
// 8. Access Ada's allergies.

// 9. Create a string that reads Lauren's dinner choice in a sentence.
// Desired result: "Lauren's appetizer is _______. She will be eating ______ for dinner
// and has selected ________ as her dessert."

document.getElementById('q8').innerHTML += "Lauren's appetizer is " +  invitees['adults'][2]['dinnerChoice'][0] + ". She will be eating " + invitees['adults'][2]['dinnerChoice'][1] + " for dinner and has selected " + invitees['adults'][2]['dinnerChoice'][2] + " as her dessert."




// 10. Create an empty object called "jsWorkshop" using Constructor Notation.
var jsWorkshop = new Object();
console.log(jsWorkshop);
// 11. To your "jsWorkshop" object, assign a key of "classmates" with the value being an array of five your classmates.
jsWorkshop.classmates = ['1classMate','2classMate','3classMate','4classMate','5classMate'];
console.log(jsWorkshop['classmates']);
// 12. Get the length of the fourth classmate's name.
var length = jsWorkshop['classmates'][3].length;
console.log(length);
// 13. Clear the classmates value.
jsWorkshop['classmates'] = [];
console.log(jsWorkshop['classmates']);

// ADVANCED TRACK
// A. Create an empty object called "books".
var books = {};
// B. Create three book objects that contain book titles, their author, and number of pages.
//     The name of each object should be some kind of made up ISBN number.
//     (Feel free to make up the titles. And the authors. Have fun. No pressure.)
//     Insert the three objects into the "books" object.
books = {
  ISBN2222: {
    title: "Catch-22",
    author: 'Joseph Heller',
    pages: 440
  },
  ISBN1234: {
    title: "Master and Margarita",
    author: 'Mikhail Bulgakov',
    pages: 400
  },
  ISBN1111: {
    title: 'My Antonia',
    author: 'Willa Cather',
    pages: 320
  },
  ISBN4444: {
    title: 'Tender is the Night',
    author: 'F Scott Fitzgerald',
    pages: 380
  }
}

// Final desired result:
    // var books = {ISBN22222:  {
    //                             title: "You Had Me at Woof",
    //                             author: "Julie Klum",
    //                             pages: 207
    //                           },
    //              ISBN33333:  {
    //                             title: "The Catcher in the Rye",
    //                             author: "JD Salinger",
    //                             pages: 214
    //                           },
    //              ISBN44444:  {
    //                             title: "Bangkok Haunts",
    //                             author: "John Burdett",
    //                             pages: 569,
    //                           }
    //             }

// C. Access the author of the first book.
console.log(books['ISBN2222']['author']);
// D. Get the length of the author the the third book.
console.log(books['ISBN1111']['author'].length);
// E. To each book object variable, add a key of "dateRead" with a value of the year you read the book.
//     (Go ahead and make this up, too. Get wild.)
//If i were lazy i'd just write it like below
// for(i in books){
//   books[i].dateRead = 2010;
//   console.log(books);
// }
books['ISBN2222'].dateRead = 2005;
books['ISBN1234'].dateRead = 2012;
books['ISBN1111'].dateRead = 2009;
books['ISBN4444'].dateRead = 2013;

// F. Remove the second book from the books object.
delete books['ISBN1234'];
console.log(books);
// G. Explain, in your own words, the difference between Literal Notation and Constructor Notation.
document.getElementById('qg').innerHTML = '<p>From what I\'m repeatedly told Literal Notation is a more fluid way to create objects and their properties on the fly. I still don\'t really believe this. I always just create with the Constructor Notation because, for me it is easier to read and seems to save you a line of code in that I create an object and add properties to it on the same line. Considering you create objects for the sake of adding things to them I don\'t understand why you would first create an empty object.</p>'
