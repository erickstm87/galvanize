/*
=======================================================

 ** Week 4 - Project 1  **
*** Exercise the jQuery ***

We'll be using the html code within the index.html for the
following jQuery exercises. After you've completed an exercise,
comment out your code (unless otherwise indicated) as these
techniques may conflict with each other.

=======================================================
*/

// Add your JS here.

// 1. Make sure that the HTML document is fully loaded before running any jQuery code that is needed below. Make sure you don't comment out this code as you'll wrap this code around all the following methods (so don't forget the closing tags, too.
 $(document).ready(function() {



// 2. Hide all of the paragraphs on the index.html page.


//$("p").hide();
//
//
// // 3. Hide all of the h2's on the page.
//
//
//$('h2').hide();
//
//
// // 4. Hide all images on the page.
//
//$('img').hide();



// 5. Hide all links on the page.
//$('a').hide();




// 6. Hide all of the elements in the document.
//$('body').hide();


// 7. Hide all paragraphs when one of them is clicked.
$('p').click(function(){
  $('p').hide();
})



// 8. Hide all images when one of them is clicked.
// $('img').click(function(){
//   $('img').hide();
// })



// 9. When the user clicks onto the image, toggle the paragraphs between hide and show.
$('img').click(function(){
  $('p').toggle(1000);
})



/*
SANDBOX:
Based on the code that is used to hide all images when clicked, consider testing the following options to test the interaction.

Interactive Methods: dblclick(), hover(), mousedown(), mouseenter(), mouseleave(), mousemove(), mouseout(), mouseover(), and mouseup().


Update previous hide functions with speed.

How does the speed affect the animated techniques as they are applied to different HTML elements?

*/
});
