/*
=======================================================

** Week 4 - Project 2**
*** jQuery Mania ***


=======================================================
*/

// Add your JS here.


$(document).ready(function() {


//1.
$(".alertme").click(function(){
  alert('js seems easy so far');
});

//2.
$('.clickme').click(function(){
  $('.clickme').text('changed the text');
})

//3.
$('.addStyle').click(function(){
  $('button').addClass('buttonStyle');
})

//4.
$('.addDifferentStyle').click(function(){
  $(this).addClass('addUniqueStyle');
})

//5.
$('.removeBtn').click(function(){
  $('button').removeClass('buttonStyle addUniqueStyle');
})

//6.
$('.clickToggle').click(function(){
  $(this).toggle('slow',400);
})

//7.
$('.squareBtn').click(function(){
  $('.square').hide('slow');
})


//8.
$('.circle').click(function(){
  $('.circle').hide();
})


//9.
$('.toggleRedSquare').click(function(){
  $('.redSquare').fadeOut('15000');
  $('.redSquare').fadeIn('15000');
})

});  // Close: $(document).ready(function() {
